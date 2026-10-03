import { cacheKey } from '../pipeline/cache.ts'
import type { CodeRequest, RenderContext } from './types.ts'

// Both mermaid renderers take the background through a config file rather
// than a flag.
export async function mermaidConfig(request: CodeRequest, ctx: RenderContext): Promise<string> {
  const path = `${ctx.dir}/mermaid-${cacheKey(request.background).slice(0, 16)}.json`
  await ctx.io.write(path, JSON.stringify({ themeVariables: { background: request.background } }))
  return path
}
