import { MissingCommand } from '../pipeline/exec.ts'
import { resolveCss } from '../svg/css.ts'
import { isDark } from '../theme.ts'
import { render } from '../vendor/pele.js'
import { inkFor } from './ink.ts'
import type { CodeRequest, Renderer } from './types.ts'

// pele's defaults are its light theme.
const DARK = {
  fg: inkFor('dark'),
  line: inkFor('dark'),
  muted: '#9a9a9a',
  surface: '#2b2b2b',
  'surface-alt': '#3a3a3a',
  border: '#6e6e6e',
  accent: '#7b9be5',
}

// pele paints edge labels and slice labels in its background color, so a
// transparent background still needs one close to the terminal's.
const backdrop = (request: CodeRequest) =>
  request.background !== 'transparent' ? request.background : isDark(request.theme) ? '#1e1e1e' : '#ffffff'

const attribute = (value: string) =>
  value.replace(/[&<>"]/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' })[c]!)

function themed(svg: string, request: CodeRequest): string {
  const palette = { ...(isDark(request.theme) ? DARK : {}), bg: backdrop(request) }
  const properties = Object.entries(palette)
    .map(([name, value]) => `--pele-${name}:${attribute(value)};`)
    .join('')
  const fill =
    request.background === 'transparent'
      ? ''
      : `<rect x="-1e5" y="-1e5" width="2e5" height="2e5" fill="${attribute(request.background)}"/>`
  return svg.replace(/^<svg([^>]*?) style="/, `<svg$1 style="${properties}`).replace(/^<svg[^>]*>/, `$&${fill}`)
}

// pele lays out and draws mermaid in-process, measuring text with Arial's
// widths; it themes through CSS, which is resolved here as resvg reads little
// of it. A background the resolver cannot mix fails pele like a parse error
// does, so the next renderer still gets the block.
export const pele: Renderer = {
  id: 'pele',
  langs: ['mermaid'],
  async render(request, ctx) {
    if (!ctx.canRasterizeSvg) throw new MissingCommand('resvg')
    try {
      return { kind: 'svg', svg: resolveCss(themed(render(request.source).svg, request)) }
    } catch (error) {
      return { error: error instanceof Error ? error.message : String(error) }
    }
  },
}
