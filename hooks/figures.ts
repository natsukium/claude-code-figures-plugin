import type { Config } from './config.ts'
import { type Block, blocksIn } from './detect/markdown.ts'
import { imagesIn } from './detect/tool-output.ts'
import type { Io } from './io.ts'
import type { Outcome, Pipeline } from './pipeline/index.ts'
import type { Registry } from './renderers/index.ts'
import { resolveTheme } from './theme.ts'

/** What every hook shares: the options, the renderers they chose, and the pipeline. */
export type Figures = { config: Config; registry: Registry; pipeline: Pipeline }

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

export const renderImages = (io: Io, figures: Figures, output: unknown): Promise<Outcome[]> =>
  Promise.all(imagesIn(output).map((image) => figures.pipeline.image(io, image)))
