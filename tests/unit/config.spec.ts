import { expect, test } from 'vitest'

import { parseConfig } from '../../hooks/config.ts'

test('the renderers option is split on commas, trimmed, and empty entries dropped', () => {
  expect(parseConfig({ renderers: ' mmdc, ,mmdr ' }).renderers).toEqual(['mmdc', 'mmdr'])
})

test('unset options take the manifest defaults', () => {
  expect(parseConfig({})).toMatchObject({ theme: 'auto', scale: 2, maxRows: 30, toolImages: true, renderers: [] })
})
