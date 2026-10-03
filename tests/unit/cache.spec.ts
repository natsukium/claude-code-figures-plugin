import { expect, test } from 'vitest'

import { cacheKey } from '../../hooks/pipeline/cache.ts'
import { pngSize } from '../../hooks/pipeline/png.ts'

test('cacheKey is the SHA-256 of the canonical JSON', () => {
  // sha256('"abc"')
  expect(cacheKey('abc')).toBe('6cc43f858fbb763301637b5af970e2a46b46f461f27e5a0f41e009c59b827b25')
})

test('cacheKey ignores the order a request was built in', () => {
  expect(cacheKey({ a: 1, b: { c: 2, d: 3 } })).toBe(cacheKey({ b: { d: 3, c: 2 }, a: 1 }))
})

test('cacheKey encodes non-ASCII sources as UTF-8', () => {
  // sha256('"日本"')
  expect(cacheKey('日本')).toBe('ac3da3e9f3bcd6e9b9ee193f0e443867ef7c17e6faf5799a56541c2c7d3eff57')
})

test('pngSize reads the width and height from the IHDR chunk', () => {
  expect(pngSize('iVBORw0KGgoAAAANSUhEUgAABkAAAAGQCAYAAAAAAAAA')).toEqual({ width: 1600, height: 400 })
})
