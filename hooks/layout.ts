export type Size = { width: number; height: number }
export type Viewport = { columns: number; rows: number }
export type Cell = { cellWidthPx: number; cellAspect: number }
export type Fit = { columns: number; rows: number; scale: number }

// Below this share of its natural size a diagram's labels or a screenshot's
// text stop being readable in the terminal.
export const LEGIBLE_SCALE = 0.6

const KITTY_MAX = 255

// The terminal scales the picture to fill the box it is given, so the box has
// to carry the picture's aspect ratio, measured in cells of the assumed size.
export function fitCells(natural: Size, cell: Cell, caps: Viewport): { columns: number; rows: number } {
  const ratio = natural.height / natural.width / cell.cellAspect
  let columns = Math.min(caps.columns, Math.ceil(natural.width / cell.cellWidthPx))
  let rows = Math.round(columns * ratio)
  if (rows > caps.rows) {
    rows = caps.rows
    columns = Math.round(rows / ratio)
  }
  return { columns: Math.max(1, Math.min(KITTY_MAX, columns)), rows: Math.max(1, Math.min(KITTY_MAX, rows)) }
}

export const shownScale = (columns: number, natural: Size, cell: Cell) =>
  Math.min(1, (columns * cell.cellWidthPx) / natural.width)

type Limits = Cell & { maxColumns: number; maxRows: number }

const fit = (natural: Size, limits: Limits, viewport: Viewport, maxRows: number): Fit => {
  const cells = fitCells(natural, limits, {
    columns: Math.min(limits.maxColumns, Math.max(1, viewport.columns - 4)),
    rows: maxRows,
  })
  return { ...cells, scale: shownScale(cells.columns, natural, limits) }
}

// A picture shrunk past legibility by the row cap gets the terminal's height
// instead, less a few rows so the prompt stays on screen; one still too small
// after that (a very wide one) is drawn anyway, with a hint to enlarge it.
export function inline(natural: Size, limits: Limits, viewport: Viewport): Fit {
  const capped = fit(natural, limits, viewport, limits.maxRows)
  const tallest = Math.min(KITTY_MAX, viewport.rows - 6)
  if (capped.scale >= LEGIBLE_SCALE || tallest <= limits.maxRows) return capped
  return fit(natural, limits, viewport, tallest)
}

// Tool images are context for a call rather than the answer itself, and a
// few screenshots at full size would push the conversation off screen.
export function thumbnail(
  natural: Size,
  limits: Cell & { maxColumns: number; toolImageMaxRows: number },
  viewport: Viewport,
): Fit {
  return fit(natural, { ...limits, maxRows: limits.toolImageMaxRows }, viewport, limits.toolImageMaxRows)
}

export function pane(natural: Size, cell: Cell, body: Viewport): Fit {
  const cells = fitCells(natural, cell, { columns: Math.min(KITTY_MAX, body.columns), rows: body.rows })
  return { ...cells, scale: shownScale(cells.columns, natural, cell) }
}
