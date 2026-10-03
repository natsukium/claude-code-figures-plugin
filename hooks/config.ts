export type Config = {
  /** `auto` follows Claude Code's theme; anything else is a fixed renderer theme. */
  theme: string
  background: string
  scale: number
  cellWidthPx: number
  cellAspect: number
  maxColumns: number
  maxRows: number
  toolImages: boolean
  toolImageMaxRows: number
  /** Renderer ids in preference order; see renderers/index.ts. */
  renderers: string[]
}

export function parseConfig(options: Record<string, unknown>): Config {
  return {
    theme: String(options.theme ?? 'auto'),
    background: String(options.background ?? 'transparent'),
    scale: Number(options.scale ?? 2),
    cellWidthPx: Number(options.cell_width_px ?? 8),
    cellAspect: Number(options.cell_aspect ?? 2.1),
    maxColumns: Number(options.max_columns ?? 120),
    maxRows: Number(options.max_rows ?? 30),
    toolImages: options.tool_images !== false,
    toolImageMaxRows: Number(options.tool_image_max_rows ?? 12),
    renderers: String(options.renderers ?? '')
      .split(',')
      .map((id) => id.trim())
      .filter((id) => id !== ''),
  }
}
