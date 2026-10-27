import { Unsupported } from './unsupported.ts'

export type Element = { name: string; attrs: Map<string, string>; children: (Element | string)[] }

const ENTITIES: Record<string, string> = { lt: '<', gt: '>', amp: '&', quot: '"', apos: "'" }

const decode = (text: string): string =>
  text.replace(/&(#x[0-9a-f]+|#\d+|\w+);/gi, (_, ref: string) => {
    if (ref[0] === '#')
      return String.fromCodePoint(ref[1] === 'x' || ref[1] === 'X' ? parseInt(ref.slice(2), 16) : +ref.slice(1))
    const char = ENTITIES[ref]
    if (char === undefined) throw new Unsupported(`entity &${ref};`)
    return char
  })

const ATTR = /\s*([^\s=/>]+)\s*=\s*("[^"]*"|'[^']*')/y
const TAG_END = /\s*(\/?)>/y

export function parseXml(text: string): Element {
  const root: Element = { name: '', attrs: new Map(), children: [] }
  const stack = [root]
  let at = 0
  while (at < text.length) {
    const open = text.indexOf('<', at)
    const top = stack[stack.length - 1]!
    if (open < 0 || open > at) {
      const chunk = text.slice(at, open < 0 ? undefined : open)
      if (stack.length > 1) top.children.push(decode(chunk))
      if (open < 0) break
    }
    at = open
    if (text.startsWith('<!--', at)) at = end(text, '-->', at)
    else if (text.startsWith('<?', at)) {
      // An xml-stylesheet instruction, or any other, may change what is drawn.
      const close = end(text, '?>', at)
      if (!/^<\?xml\s/.test(text.slice(at, close)))
        throw new Unsupported(`processing instruction ${text.slice(at, close)}`)
      at = close
    } else if (text.startsWith('<![CDATA[', at)) {
      const close = end(text, ']]>', at)
      top.children.push(text.slice(at + 9, close - 3))
      at = close
    } else if (text.startsWith('<!', at)) {
      // A DOCTYPE's internal subset can declare entities this parser does not expand.
      const close = end(text, '>', at)
      if (text.slice(at, close).includes('[')) throw new Unsupported('DOCTYPE with an internal subset')
      at = close
    } else if (text[at + 1] === '/') {
      const close = end(text, '>', at)
      const name = text.slice(at + 2, close - 1).trim()
      if (stack.length < 2 || top.name !== name) throw new Unsupported(`malformed XML at </${name}>`)
      stack.pop()
      at = close
    } else {
      const name = /^[^\s/>]+/.exec(text.slice(at + 1))?.[0]
      if (!name) throw new Unsupported('malformed XML')
      const element: Element = { name, attrs: new Map(), children: [] }
      let pos = at + 1 + name.length
      ATTR.lastIndex = pos
      for (let m = ATTR.exec(text); m; m = ATTR.exec(text)) {
        element.attrs.set(m[1]!, decode(m[2]!.slice(1, -1)))
        pos = ATTR.lastIndex
      }
      TAG_END.lastIndex = pos
      const rest = TAG_END.exec(text)
      if (!rest) throw new Unsupported(`malformed XML in <${name}>`)
      at = pos + rest[0].length
      top.children.push(element)
      if (!rest[1]) stack.push(element)
    }
  }
  if (stack.length > 1) throw new Unsupported(`unclosed <${stack[stack.length - 1]!.name}>`)
  const svg = root.children.find((child) => typeof child !== 'string')
  if (!svg || svg.name !== 'svg') throw new Unsupported('no root <svg>')
  return svg
}

function end(text: string, marker: string, from: number): number {
  const at = text.indexOf(marker, from)
  if (at < 0) throw new Unsupported('malformed XML')
  return at + marker.length
}

const escape = (text: string, quote: boolean) =>
  text.replace(quote ? /[&<"]/g : /[&<>]/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' })[c]!)

export function serializeXml(element: Element): string {
  const attrs = [...element.attrs].map(([name, value]) => ` ${name}="${escape(value, true)}"`).join('')
  if (element.children.length === 0) return `<${element.name}${attrs}/>`
  const children = element.children.map((child) =>
    typeof child === 'string' ? escape(child, false) : serializeXml(child),
  )
  return `<${element.name}${attrs}>${children.join('')}</${element.name}>`
}
