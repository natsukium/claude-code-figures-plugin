import { failure } from '../pipeline/exec.ts'
import { mermaidConfig } from './mermaid-config.ts'
import type { Renderer } from './types.ts'

// mmdr writes SVG for resvg to rasterize at the scale; without resvg, or at
// 1x where resvg adds nothing, it writes the PNG itself.
export const mmdr: Renderer = {
  id: 'mmdr',
  langs: ['mermaid'],
  async render(request, ctx) {
    const argv = ['mmdr', '-i', '-', '-t', request.theme, '-c', await mermaidConfig(request, ctx)]
    if (ctx.canRasterizeSvg && request.scale > 1) {
      const svg = await ctx.exec([...argv, '-e', 'svg'], request.source)
      return svg.exitCode === 0 ? { kind: 'svg', svg: svg.stdout } : failure('mmdr', svg)
    }
    const path = ctx.outPath(1)
    const png = await ctx.exec([...argv, '-o', path, '-e', 'png'], request.source)
    return png.exitCode === 0 ? { kind: 'png', path, zoom: 1 } : failure('mmdr', png)
  },
}
