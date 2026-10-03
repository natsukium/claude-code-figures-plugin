import { failure } from '../pipeline/exec.ts'
import { isDark } from '../theme.ts'
import type { Renderer } from './types.ts'

// d2's theme 200 is its dark theme; 0 its default light one.
export const d2: Renderer = {
  id: 'd2',
  langs: ['d2'],
  async render(request, ctx) {
    const argv = ['d2', '--theme', isDark(request.theme) ? '200' : '0', '--pad', '10', '-', '-']
    const result = await ctx.exec(argv, request.source)
    return result.exitCode === 0 ? { kind: 'svg', svg: result.stdout } : failure('d2', result)
  },
}
