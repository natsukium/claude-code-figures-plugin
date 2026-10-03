import { expect, test } from 'vitest'

import { createRegistry } from '../../hooks/renderers/index.ts'
import type { Renderer } from '../../hooks/renderers/types.ts'

const ids = (renderers: readonly Renderer[]) => renderers.map((r) => r.id)

test('with no renderers option, mermaid tries mmdr, then mmdc', () => {
  expect(ids(createRegistry([]).chain('mermaid'))).toEqual(['mmdr', 'mmdc'])
})

test('listing one renderer of a lang drops its others', () => {
  expect(ids(createRegistry(['mmdc']).chain('mermaid'))).toEqual(['mmdc'])
})

test('listing several renderers of a lang orders them as listed', () => {
  expect(ids(createRegistry(['mmdc', 'mmdr']).chain('mermaid'))).toEqual(['mmdc', 'mmdr'])
})

test('a lang none of whose renderers is listed keeps its default chain', () => {
  expect(ids(createRegistry(['mmdc']).chain('dot'))).toEqual(['dot'])
})

test('ids no renderer has are reported as unknown', () => {
  expect(createRegistry(['mmdc', 'katex']).unknown).toEqual(['katex'])
})

test('fence aliases resolve to the lang, and unknown tags to nothing', () => {
  const registry = createRegistry([])
  expect([registry.langOf('graphviz'), registry.langOf('tex'), registry.langOf('ts')]).toEqual([
    'dot',
    'math',
    undefined,
  ])
})
