import { failure } from '../pipeline/exec'
import { inkFor } from './ink'
import type { Renderer } from './types'

// Graphviz draws black on white unless told otherwise, which disappears on a
// dark terminal once the background is transparent.
export const graphviz: Renderer = {
  id: 'dot',
  langs: ['dot', 'graphviz'],
  async render(request, ctx) {
    const ink = inkFor(request.theme)
    const argv = [
      'dot',
      '-Tsvg',
      `-Gbgcolor=${request.background}`,
      ...['G', 'N', 'E'].flatMap((k) => [`-${k}fontname=Helvetica,Arial,sans-serif`, `-${k}fontcolor=${ink}`]),
      `-Ncolor=${ink}`,
      `-Ecolor=${ink}`,
    ]
    const result = await ctx.exec(argv, request.source)
    return result.exitCode === 0 ? { kind: 'svg', svg: result.stdout } : failure('dot', result)
  },
}
