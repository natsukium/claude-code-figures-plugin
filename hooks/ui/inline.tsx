import type { RenderChildren } from 'claude-code'

import { type Figures, type ToolCall, blocksOf, renderBlocks, renderImages, spansOf, turnWide } from '../figures.ts'
import type { Io } from '../io.ts'
import type { Viewport } from '../layout.ts'
import type { Outcome } from '../pipeline/index.ts'
import { INDENT, type TerminalElements, picture, pictures, roomIn } from './pictures.tsx'
import { fullSize, thumbnailSize } from './placements.ts'

// Each returns the pictures to draw under the engine's own row, or undefined
// to leave the row alone.

export async function replyPictures(io: Io, figures: Figures, el: TerminalElements, text: string, viewport: Viewport) {
  const blocks = blocksOf(figures, text)
  if (blocks.length === 0) return undefined
  const placement = fullSize(figures.config)
  const room = roomIn(viewport)
  const outcomes = await turnWide(io, figures, blocks, await renderBlocks(io, figures, blocks), room)
  return pictures(
    el,
    outcomes,
    placement,
    viewport,
    blocks.map((b) => b.lang),
  )
}

type Reply = { text: string; isFirstOfReply: boolean }

/**
 * The whole reply with each picture in place of the block it was drawn from,
 * or undefined to leave the reply to the engine. The text between pictures
 * goes down the chain one piece at a time, through `down`, so the engine and
 * the plugins beneath draw each piece as they would a reply of its own.
 */
export async function replyInPlace(
  io: Io,
  figures: Figures,
  el: TerminalElements,
  reply: Reply,
  viewport: Viewport,
  down: (text: string, isFirstOfReply: boolean) => Promise<RenderChildren>,
) {
  const spans = spansOf(figures, reply.text)
  if (spans.length === 0) return undefined
  const placement = fullSize(figures.config)
  const room = roomIn(viewport)
  const outcomes = await turnWide(io, figures, spans, await renderBlocks(io, figures, spans), room)
  if (outcomes.every((outcome) => 'skipped' in outcome)) return undefined

  // The engine indents a reply's later blocks itself, but only the first
  // block of a reply opens with the bullet and its indent: the pieces after
  // it are indented here to line up with its text.
  const { Box } = el
  const indent = reply.isFirstOfReply ? INDENT : 0
  const pieces: RenderChildren[] = []
  let cursor = 0
  const text = async (to: number) => {
    const piece = reply.text.slice(cursor, to).trim()
    cursor = to
    if (piece === '') return
    const leading = pieces.length === 0
    pieces.push(
      <Box key={`text-${pieces.length}`} marginLeft={leading ? 0 : indent}>
        {await down(piece, leading ? reply.isFirstOfReply : false)}
      </Box>,
    )
  }
  for (const [i, span] of spans.entries()) {
    const outcome = outcomes[i]!
    if ('skipped' in outcome) continue
    // A block that failed stays as text, with the error under it.
    await text('error' in outcome ? span.end : span.start)
    cursor = span.end
    pieces.push(picture(el, outcome, placement, room, span.lang, i, { indent, marginTop: 0 }))
  }
  await text(reply.text.length)
  return (
    <Box flexDirection="column" gap={1}>
      {pieces}
    </Box>
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
