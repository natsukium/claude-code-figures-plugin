import { expect, test } from 'vitest'

import { parseConfig } from '../../hooks/config.ts'

test('the renderers option is split on commas, trimmed, and empty entries dropped', () => {
  expect(parseConfig({ renderers: ' mmdc, ,mmdr ' }).renderers).toEqual(['mmdc', 'mmdr'])
})

test('unset options take the manifest defaults', () => {
  expect(parseConfig({})).toMatchObject({ theme: 'auto', scale: 2, maxRows: 30, toolImages: true, renderers: [] })
})

test('placement is below unless set to inline, and wide flowcharts are turned unless switched off', () => {
  expect(parseConfig({})).toMatchObject({ placement: 'below', turnFlowcharts: true })
  expect(parseConfig({ placement: 'inline', turn_flowcharts: false })).toMatchObject({
    placement: 'inline',
    turnFlowcharts: false,
  })
  expect(parseConfig({ placement: 'sideways' }).placement).toBe('below')
})
