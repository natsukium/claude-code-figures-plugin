import type { Io } from '../io.ts'
import type { Exec } from '../pipeline/exec.ts'

export type CodeRequest = {
  lang: string
  source: string
  theme: string
  background: string
  scale: number
  cellWidthPx: number
}

export type Artifact = { kind: 'svg'; svg: string } | { kind: 'png'; path: string; zoom: number }

export type RenderContext = {
  io: Io
  exec: Exec
  dir: string
  /** Where a renderer that writes PNG itself puts it, at the given zoom. */
  outPath(zoom: number): string
  /** False once resvg turned out to be missing. */
  canRasterizeSvg: boolean
}

export type Renderer = {
  /** Unique across all renderers; what the `renderers` option names. */
  id: string
  /** The first is the lang's name; the rest are fence tags that alias it. */
  langs: readonly [string, ...string[]]
  accepts?(source: string): boolean
  /** Throws MissingCommand when its program is not installed. */
  render(request: CodeRequest, ctx: RenderContext): Promise<Artifact | { error: string }>
}
