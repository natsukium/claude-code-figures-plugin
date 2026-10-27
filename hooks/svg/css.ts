import { parseColor } from './color.ts'
import { type Element, parseXml, serializeXml } from './xml.ts'

// Geometry properties SVG 2 lets a style set, which resvg reads only as
// attributes.
const GEOMETRY = new Set(['x', 'y', 'width', 'height', 'rx', 'ry', 'cx', 'cy', 'r'])

/**
 * The SVG with every custom property substituted, every color-mix()
 * computed, and every geometry property in a style moved to its attribute,
 * so it reads the same to resvg, which supports none of them.
 */
export function resolveCss(svg: string): string {
  const root = parseXml(svg)
  resolve(root, new Map())
  return serializeXml(root)
}

function resolve(node: Element, inherited: ReadonlyMap<string, string>): void {
  const declarations = splitDeclarations(node.attrs.get('style') ?? '')
    .map((d) => [d.slice(0, d.indexOf(':')).trim(), d.slice(d.indexOf(':') + 1).trim()] as const)
    .filter(([name]) => name)
  const own = new Map(declarations.filter(([name]) => name.startsWith('--')))
  const resolved = new Map(inherited)
  const resolving = new Set<string>()
  // A custom property's own var() references read the element's other
  // custom properties, so each is resolved on first use.
  const lookup = (name: string): string | undefined => {
    const raw = own.get(name)
    if (raw === undefined) return resolved.get(name)
    if (resolving.has(name)) throw new Error(`custom property ${name} refers to itself`)
    resolving.add(name)
    const value = substitute(raw, lookup)
    resolving.delete(name)
    own.delete(name)
    if (value !== undefined) resolved.set(name, value)
    else resolved.delete(name)
    return value
  }
  for (const name of own.keys()) lookup(name)

  const computed = (value: string) => {
    const substituted = substitute(value, lookup)
    if (substituted === undefined) throw new Error(`no value for "${value}"`)
    return mixColors(substituted)
  }
  for (const [name, value] of node.attrs) {
    if (name !== 'style' && /var\(|color-mix\(/.test(value)) node.attrs.set(name, computed(value))
  }
  const rest = declarations.filter(([name]) => !name.startsWith('--'))
  // A style declaration overrides the attribute of the same name.
  for (const [name, value] of rest) if (GEOMETRY.has(name)) node.attrs.set(name, computed(value))
  const style = rest
    .filter(([name]) => !GEOMETRY.has(name))
    .map(([name, value]) => `${name}:${computed(value)}`)
    .join(';')
  if (style) node.attrs.set('style', style)
  else node.attrs.delete('style')

  for (const child of node.children) if (typeof child !== 'string') resolve(child, resolved)
}

// A semicolon inside quotes or parentheses, as in url(data:...;base64,...),
// does not end a declaration.
function splitDeclarations(style: string): string[] {
  const out: string[] = []
  let depth = 0
  let quote: string | undefined
  let start = 0
  for (let i = 0; i < style.length; i++) {
    const c = style[i]
    if (quote) {
      if (c === '\\') i++
      else if (c === quote) quote = undefined
    } else if (c === '"' || c === "'") quote = c
    else if (c === '(') depth++
    else if (c === ')') depth = Math.max(0, depth - 1)
    else if (c === ';' && depth === 0) {
      out.push(style.slice(start, i))
      start = i + 1
    }
  }
  return [...out, style.slice(start)]
}

// The value with each var() replaced, or undefined when one names nothing
// and has no fallback, which makes the declaration invalid.
function substitute(value: string, lookup: (name: string) => string | undefined): string | undefined {
  let out = ''
  let at = 0
  for (let start = value.indexOf('var(', at); start >= 0; start = value.indexOf('var(', at)) {
    const [args, end] = argumentsAt(value, start + 'var('.length)
    const name = args[0]!.trim()
    const fallback = args.length > 1 ? args.slice(1).join(',').trim() : undefined
    const replacement = lookup(name) ?? (fallback === undefined ? undefined : substitute(fallback, lookup))
    if (replacement === undefined) return undefined
    out += value.slice(at, start) + replacement
    at = end
  }
  return out + value.slice(at)
}

// The comma-separated arguments of the function whose parenthesis opened
// just before `from`, and the index past its closing parenthesis.
function argumentsAt(text: string, from: number): [string[], number] {
  const args: string[] = []
  let depth = 0
  let start = from
  for (let i = from; i < text.length; i++) {
    const c = text[i]
    if (c === '(') depth++
    else if (c === ')' && depth-- === 0) return [[...args, text.slice(start, i)], i + 1]
    else if (c === ',' && depth === 0) {
      args.push(text.slice(start, i))
      start = i + 1
    }
  }
  throw new Error(`unclosed parenthesis in "${text}"`)
}

function mixColors(value: string): string {
  const start = value.indexOf('color-mix(')
  if (start < 0) return value
  const [args, end] = argumentsAt(value, start + 'color-mix('.length)
  const mixed = mix(args.map((arg) => mixColors(arg.trim())))
  if (!mixed) throw new Error(`cannot compute ${value.slice(start, end)}`)
  return value.slice(0, start) + mixed + mixColors(value.slice(end))
}

// color-mix(in srgb, ...) per CSS Color 5: the percentages normalized to sum
// to 100%, a shortfall lowering the alpha, mixed premultiplied.
function mix(args: string[]): string | undefined {
  if (args.length !== 3 || args[0]!.toLowerCase() !== 'in srgb') return undefined
  const parts = args.slice(1).map((arg) => {
    const m = /^(.*?)(?:\s+(\d+(?:\.\d+)?)%)?$/s.exec(arg)!
    const color = parseColor(m[1]!, [0, 0, 0, 1])
    if (!color || /currentcolor/i.test(m[1]!)) return undefined
    return { color, share: m[2] === undefined ? undefined : +m[2] / 100 }
  })
  const [a, b] = parts
  if (!a || !b) return undefined
  const p1 = a.share ?? (b.share === undefined ? 0.5 : 1 - b.share)
  const p2 = b.share ?? 1 - p1
  const sum = p1 + p2
  if (sum <= 0) return undefined
  const [w1, w2] = [p1 / sum, p2 / sum]
  const alpha = a.color[3] * w1 + b.color[3] * w2
  const channel = (i: number) =>
    alpha === 0 ? 0 : (a.color[i]! * a.color[3] * w1 + b.color[i]! * b.color[3] * w2) / alpha
  const byte = (v: number) => Math.round(v * 255)
  return `rgba(${byte(channel(0))},${byte(channel(1))},${byte(channel(2))},${+(alpha * Math.min(1, sum)).toFixed(4)})`
}
