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

export function pictures(
  { Box, Image, Text }: TerminalElements,
  outcomes: Outcome[],
  placement: Placement,
  viewport: Viewport,
  labels: string | readonly string[],
) {
  const room = { columns: viewport.columns - INDENT, rows: viewport.rows }
  return outcomes.map((outcome, i) => {
    const label = typeof labels === 'string' ? labels : (labels[i] ?? 'image')
    if ('skipped' in outcome) return null
    if ('error' in outcome) {
      return (
        <Box key={`${label}-${i}`} marginLeft={INDENT}>
          <Text color="red">
            {label}: {outcome.error.split('\n')[0]}
          </Text>
        </Box>
      )
    }
    const { columns, rows, scale } = placement.fit(outcome, room)
    return (
      <Box key={`${label}-${i}`} marginLeft={INDENT} marginTop={1} flexDirection="column">
        <Image
          source={{ file: outcome.path, format: 'png' }}
          columns={columns}
          rows={rows}
          alt={`[${label} ${i + 1}]`}
        />
        {scale < LEGIBLE_SCALE ? (
          <Text dimColor>
            shown at {Math.round(scale * 100)}% · {placement.enlarge}
          </Text>
        ) : null}
      </Box>
    )
  })
}

export const viewportOf = (e: { viewport?: { columns: number; rows: number } }): Viewport => ({
  columns: e.viewport?.columns ?? 80,
  rows: e.viewport?.rows ?? 40,
})
