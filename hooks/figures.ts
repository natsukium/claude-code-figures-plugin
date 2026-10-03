import type { Config } from './config.ts'
import { type Block, blocksIn } from './detect/markdown.ts'
import { type FoundImage, imagesIn, sentImagesIn } from './detect/tool-output.ts'
import type { Io } from './io.ts'
import type { Memo } from './pipeline/cache.ts'
import type { Outcome, Pipeline } from './pipeline/index.ts'
import type { Registry } from './renderers/index.ts'
import { resolveTheme } from './theme.ts'

/** What every hook shares: the options, the renderers they chose, the pipeline, and the files sent so far. */
export type Figures = { config: Config; registry: Registry; pipeline: Pipeline; sent: Memo<FoundImage[]> }

export const blocksOf = (figures: Figures, text: string): Block[] => blocksIn(text, figures.registry)

export async function renderBlocks(io: Io, figures: Figures, blocks: Block[]): Promise<Outcome[]> {
  const { config, pipeline } = figures
  const theme = await resolveTheme(io, config.theme)
  return Promise.all(
    blocks.map((block) =>
      pipeline.code(io, {
        lang: block.lang,
        source: block.source,
        theme,
        background: config.background,
        scale: config.scale,
        cellWidthPx: config.cellWidthPx,
      }),
    ),
  )
}

export type ToolCall = { tool_use_id: string; tool: string; output?: unknown }

export async function renderImages(io: Io, figures: Figures, call: ToolCall): Promise<Outcome[]> {
  const sent = await sentImages(io, figures, call)
  return Promise.all([...imagesIn(call.output), ...sent].map((image) => figures.pipeline.image(io, image)))
}

// Held per call, not per path: a path sent again after being overwritten
// must not repaint the earlier rows with the new picture.
function sentImages(io: Io, figures: Figures, call: ToolCall): Promise<FoundImage[]> {
  const files = sentImagesIn(call.tool, call.output)
  if (files.length === 0) return Promise.resolve([])
  return figures.sent.get(call.tool_use_id, async () => {
    const read = await Promise.all(
      files.map(async ({ path, mime }): Promise<FoundImage[]> => {
        // Moved, deleted, or over the engine's read limit: the send itself
        // succeeded, so the row stays as the engine draws it.
        try {
          return [{ base64: await io.readBase64(path), mime }]
        } catch {
          return []
        }
      }),
    )
    return read.flat()
  })
}
