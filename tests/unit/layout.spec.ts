import { describe, expect, test } from 'vitest'

import { fitCells, inline, pane, thumbnail } from '../../hooks/layout.ts'

const cell = { cellWidthPx: 8, cellAspect: 2 }
const limits = { ...cell, maxColumns: 120, maxRows: 30, toolImageMaxRows: 12 }

describe('fitCells', () => {
  test('a picture narrower than the caps keeps one cell per cellWidthPx', () => {
    expect(fitCells({ width: 400, height: 160 }, cell, { columns: 196, rows: 30 })).toEqual({ columns: 50, rows: 10 })
  })

  test('a picture wider than the caps is narrowed to them, keeping the aspect ratio', () => {
    expect(fitCells({ width: 1600, height: 320 }, cell, { columns: 80, rows: 30 })).toEqual({ columns: 80, rows: 8 })
  })

  test('a picture taller than the row cap is shrunk to it, keeping the aspect ratio', () => {
    expect(fitCells({ width: 400, height: 1600 }, cell, { columns: 196, rows: 30 })).toEqual({ columns: 15, rows: 30 })
  })

  test('no side exceeds the 255 cells the kitty protocol can address', () => {
    expect(fitCells({ width: 8000, height: 100 }, cell, { columns: 1000, rows: 1000 }).columns).toBe(255)
  })
})

describe('inline', () => {
  test('a picture that fits legibly is drawn at its natural width', () => {
    expect(inline({ width: 800, height: 200 }, limits, { columns: 200, rows: 50 })).toMatchObject({
      columns: 100,
      rows: 13,
      scale: 1,
    })
  })

  test('a picture max_rows shrinks past legibility grows to the terminal height less six rows', () => {
    expect(inline({ width: 200, height: 1600 }, limits, { columns: 200, rows: 50 })).toMatchObject({
      rows: 44,
      columns: 11,
    })
  })

  test('a short terminal does not grow the picture past max_rows', () => {
    expect(inline({ width: 200, height: 1600 }, limits, { columns: 200, rows: 20 }).rows).toBe(30)
  })
})

test('thumbnail holds to tool_image_max_rows and never grows', () => {
  expect(thumbnail({ width: 200, height: 1600 }, limits, { columns: 200, rows: 50 }).rows).toBe(12)
})

test('pane fills the body it is given, past max_rows', () => {
  expect(pane({ width: 200, height: 800 }, cell, { columns: 100, rows: 60 })).toMatchObject({ columns: 25, rows: 50 })
})
