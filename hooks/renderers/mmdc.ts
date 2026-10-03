import { failure } from '../pipeline/exec.ts'
import { mermaidConfig } from './mermaid-config.ts'
import type { Renderer } from './types.ts'

const THEMES = new Set(['default', 'forest', 'dark', 'neutral'])

// mmdc's SVG puts labels in <foreignObject>, which resvg leaves blank, so it
// writes the PNG itself through its browser, which also scales it.
export const mmdc: Renderer = {
  id: 'mmdc',
  langs: ['mermaid'],
  async render(request, ctx) {
    const path = ctx.outPath(request.scale)
    const theme = THEMES.has(request.theme) ? request.theme : 'default'
    const argv = [
      'mmdc',
      '-q',
      '-i',
      '-',
      '-o',
      path,
      '-t',
      theme,
      '-b',
      request.background,
      '-s',
      String(request.scale),
    ]
    // Starting a headless browser takes seconds, longer when it is cold.
    const png = await ctx.exec([...argv, '-c', await mermaidConfig(request, ctx)], request.source, 60_000)
    return png.exitCode === 0 ? { kind: 'png', path, zoom: request.scale } : failure('mmdc', png)
  },
}
