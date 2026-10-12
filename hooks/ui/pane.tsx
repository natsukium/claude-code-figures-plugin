import type { Elements } from 'claude-code'

import type { GalleryItem } from '../../types'
import { type Figures, blocksOf, renderBlocks, renderImages } from '../figures.ts'
import type { Io } from '../io.ts'
import { LEGIBLE_SCALE, pane, type Viewport } from '../layout.ts'
import { MissingCommand, execWith } from '../pipeline/exec.ts'
import type { Outcome } from '../pipeline/index.ts'
import { fullSize, thumbnailSize } from './placements.ts'

export const PANE = 'figures'
const GALLERY_SIZE = 30

/** The pane's chosen picture, held in $.state by register.tsx. */
export type Selection = { index: number | null; set(index: number): void }

export type PaneProps = {
  bodyColumns: number
  placement: string
  scroll: { bodyRows: number }
}

// Render hooks may not write state, so the gallery is rebuilt from the
// transcript; the memos make that a lookup for anything drawn.
export async function gallery(io: Io, figures: Figures): Promise<GalleryItem[]> {
  const items = (
    outcomes: Outcome[],
    kind: GalleryItem['kind'],
    label: (i: number) => string,
    origin: (i: number) => GalleryItem['origin'],
  ): GalleryItem[] =>
    outcomes.flatMap((outcome, i) =>
      'path' in outcome
        ? [
            {
              path: outcome.path,
              width: outcome.width,
              height: outcome.height,
              label: label(i),
              kind,
              origin: origin(i),
            },
          ]
        : [],
    )
  const perMessage = await Promise.all(
    (await io.messages()).map(async (message) => {
      if (message.role !== 'assistant') return []
      const blocks = blocksOf(figures, message.text)
      const diagrams =
        blocks.length > 0
          ? items(
              await renderBlocks(io, figures, blocks),
              'diagram',
              (i) => blocks[i]?.lang ?? 'diagram',
              (i) => ({ source: blocks[i]?.source ?? '' }),
            )
          : []
      if (!figures.config.toolImages) return diagrams
      const tools = await Promise.all(
        message.toolUses
          .filter((use) => use.result !== undefined && !use.isError)
          .map(async (use) =>
            items(
              await renderImages(io, figures, { tool_use_id: use.tool_use_id, tool: use.tool, output: use.result }),
              'tool',
              () => use.tool,
              () => ({ toolUseId: use.tool_use_id }),
            ),
          ),
      )
      return [...diagrams, ...tools.flat()]
    }),
  )
  const seen = new Set<string>()
  return perMessage
    .flat()
    .filter((item) => !seen.has(item.path) && seen.add(item.path))
    .slice(-GALLERY_SIZE)
}

const squeeze = (text: string) => text.replace(/\s+/g, ' ').trim()

/**
 * The newest picture a mouse selection points at: a tool image by the row the
 * selection lies in, a diagram by source text selected within its block.
 */
export function selectedIn(
  list: GalleryItem[],
  selection: { text: string; requestId?: string },
  groups: ReadonlyMap<string, readonly string[]>,
): number | undefined {
  const text = squeeze(selection.text)
  const row = selection.requestId
  const calls = row === undefined ? [] : (groups.get(row) ?? [row])
  const index = list.findLastIndex(({ origin }) =>
    'toolUseId' in origin ? calls.includes(origin.toolUseId) : text !== '' && squeeze(origin.source).includes(text),
  )
  return index === -1 ? undefined : index
}

async function openExternally(io: Io, path: string): Promise<void> {
  const exec = execWith(io)
  for (const opener of ['open', 'xdg-open']) {
    try {
      await exec([opener, path])
      return
    } catch (error) {
      if (!(error instanceof MissingCommand)) throw error
    }
  }
  io.toast('Neither open nor xdg-open is on PATH')
}

type PaneElements = Pick<Elements['terminal'], 'Box' | 'Button' | 'Image' | 'Text'>

export async function drawPane(
  io: Io,
  figures: Figures,
  { Box, Button, Image, Text }: PaneElements,
  props: PaneProps,
  viewport: Viewport,
  selection: Selection,
) {
  const { config } = figures
  const list = await gallery(io, figures)
  if (list.length === 0) return <Text dimColor>No diagrams or images in this session yet.</Text>

  // Opened without a choice, the pane shows the newest picture the
  // transcript could not draw legibly, which is what /figures is for.
  const illegible = list.findLastIndex(
    (item) =>
      (item.kind === 'tool' ? thumbnailSize(config) : fullSize(config)).fit(item, viewport).scale < LEGIBLE_SCALE,
  )
  const fallback = illegible === -1 ? list.length - 1 : illegible
  const index = selection.index === null ? fallback : Math.min(Math.max(selection.index, 0), list.length - 1)
  const item = list[index]!

  // An inline pane grows to its content, so its bodyRows is the height drawn
  // last rather than room to fill, and the layout clips what does not fit.
  // Only the dock's is fixed; inline, the prompt and its chrome (about 14
  // rows with the frame) stay below. One row goes to the header.
  const bodyRows = props.placement === 'dock' ? Math.max(1, props.scroll.bodyRows - 1) : Math.max(4, viewport.rows - 14)
  const { columns, rows } = pane(item, config, { columns: props.bodyColumns, rows: bodyRows })
  return (
    <Box flexDirection="column">
      <Box>
        <Button key="prev" label="Prev" hotkey="p" onPress={() => selection.set(Math.max(0, index - 1))} />
        <Button
          key="next"
          label="Next"
          hotkey="n"
          onPress={() => selection.set(Math.min(list.length - 1, index + 1))}
        />
        <Button key="open" label="Open" hotkey="o" onPress={() => openExternally(io, item.path)} />
        <Text dimColor>
          {' '}
          {index + 1}/{list.length} {item.label}
        </Text>
      </Box>
      <Image source={{ file: item.path, format: 'png' }} columns={columns} rows={rows} alt={`[${item.label}]`} />
    </Box>
  )
}
