import { tex2svg } from '../vendor/mathjax.js'
import { inkFor } from './ink.ts'
import type { Renderer } from './types.ts'

// MathJax sizes its SVG in ex, which resvg reads as half its 12px default
// font; restating the size in pixels, with an ex as wide as a terminal cell,
// draws a formula about as large as the text around it.
const exToPx = (svg: string, exPx: number) =>
  svg.replace(
    /^(<svg[^>]*?)\b(width|height)="([\d.]+)ex"([^>]*?)\b(width|height)="([\d.]+)ex"/,
    (_, a, k1, v1, b, k2, v2) =>
      `${a}${k1}="${(Number(v1) * exPx).toFixed(1)}"${b}${k2}="${(Number(v2) * exPx).toFixed(1)}"`,
  )

export const mathjax: Renderer = {
  id: 'mathjax',
  langs: ['math', 'latex', 'tex'],
  // A latex fence holding a whole document is source to read, not a formula.
  accepts: (source) => !/\\documentclass|\\begin\{document\}/.test(source),
  async render(request, ctx) {
    const loadRange = async (range: string) =>
      JSON.parse(await ctx.io.readText(`${ctx.io.pluginRoot}/hooks/vendor/mathjax-fonts/${range}.json`)) as unknown[]
    let svg: string
    try {
      svg = await tex2svg(request.source, loadRange)
    } catch (error) {
      // MathJax's TexError carries a message but is not an Error.
      const message = (error as { message?: unknown } | null)?.message
      return { error: typeof message === 'string' ? message : String(error) }
    }
    return { kind: 'svg', svg: exToPx(svg, request.cellWidthPx).replaceAll('currentColor', inkFor(request.theme)) }
  },
}
