import { type Figures, type ToolCall, blocksOf, renderBlocks, renderImages } from '../figures.ts'
import type { Io } from '../io.ts'
import type { Viewport } from '../layout.ts'
import type { Outcome } from '../pipeline/index.ts'
import { type TerminalElements, pictures } from './pictures.tsx'
import { fullSize, thumbnailSize } from './placements.ts'

// Each returns the pictures to draw under the engine's own row, or undefined
// to leave the row alone.

export async function replyPictures(io: Io, figures: Figures, el: TerminalElements, text: string, viewport: Viewport) {
  const blocks = blocksOf(figures, text)
  if (blocks.length === 0) return undefined
  const outcomes = await renderBlocks(io, figures, blocks)
  return pictures(
    el,
    outcomes,
    fullSize(figures.config),
    viewport,
    blocks.map((b) => b.lang),
  )
}

export async function toolUsePictures(
  io: Io,
  figures: Figures,
  el: TerminalElements,
  call: ToolCall,
  viewport: Viewport,
) {
  if (!figures.config.toolImages) return undefined
  const outcomes = await renderImages(io, figures, call)
  if (outcomes.length === 0) return undefined
  return pictures(el, outcomes, fullSize(figures.config), viewport, call.tool)
}

// A collapsed group draws one count line and no ToolUse rows, so its
// pictures are drawn under that line; an expanded one reaches ToolUse.
export async function toolGroupPictures(
  io: Io,
  figures: Figures,
  el: TerminalElements,
  calls: readonly { tool_use_id?: string; tool: string; isRunning: boolean; output?: unknown }[],
  viewport: Viewport,
) {
  if (!figures.config.toolImages) return undefined
  const perCall = await Promise.all(
    calls.map((call) =>
      call.tool_use_id === undefined || call.isRunning || call.output === undefined
        ? Promise.resolve([] as Outcome[])
        : renderImages(io, figures, { tool_use_id: call.tool_use_id, tool: call.tool, output: call.output }),
    ),
  )
  const outcomes = perCall.flat()
  if (outcomes.length === 0) return undefined
  return pictures(el, outcomes, thumbnailSize(figures.config), viewport, 'image')
}
