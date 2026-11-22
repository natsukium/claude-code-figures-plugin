import type { Elements } from 'claude-code'

import { type Fit, LEGIBLE_SCALE, type Size, type Viewport } from '../layout.ts'
import type { Outcome } from '../pipeline/index.ts'

export type TerminalElements = Pick<Elements['terminal'], 'Box' | 'Image' | 'Text'>

export type Placement = {
  fit(natural: Size, viewport: Viewport): Fit
  /** Shown under a picture drawn below LEGIBLE_SCALE. */
  enlarge: string
}

export const INDENT = 2

export const roomIn = (viewport: Viewport): Viewport => ({ columns: viewport.columns - INDENT, rows: viewport.rows })

export function pictures(
  el: TerminalElements,
  outcomes: Outcome[],
  placement: Placement,
  viewport: Viewport,
  labels: string | readonly string[],
) {
  const room = roomIn(viewport)
  return outcomes.map((outcome, i) =>
    picture(el, outcome, placement, room, typeof labels === 'string' ? labels : (labels[i] ?? 'image'), i),
  )
}

export function picture(
  { Box, Image, Text }: TerminalElements,
  outcome: Outcome,
  placement: Placement,
  room: Viewport,
  label: string,
  i: number,
  { indent = INDENT, marginTop = 1 } = {},
) {
  if ('skipped' in outcome) return null
  if ('error' in outcome) {
    return (
      <Box key={`${label}-${i}`} marginLeft={indent}>
        <Text color="error">
          {label}: {outcome.error.split('\n')[0]}
        </Text>
      </Box>
    )
  }
  const { columns, rows, scale } = placement.fit(outcome, room)
  return (
    <Box key={`${label}-${i}`} marginLeft={indent} marginTop={marginTop} flexDirection="column">
      <Image source={{ file: outcome.path, format: 'png' }} columns={columns} rows={rows} alt={`[${label} ${i + 1}]`} />
      {scale < LEGIBLE_SCALE ? (
        <Text dimColor>
          shown at {Math.round(scale * 100)}% · {placement.enlarge}
        </Text>
      ) : null}
    </Box>
  )
}

export const viewportOf = (e: { viewport?: { columns: number; rows: number } }): Viewport => ({
  columns: e.viewport?.columns ?? 80,
  rows: e.viewport?.rows ?? 40,
})
