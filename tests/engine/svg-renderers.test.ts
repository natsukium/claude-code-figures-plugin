import { expect, test } from 'claude-code/testing'

import { fence, missing, mountReply, pngHeader, stubWorld } from './support.ts'

test('a dot fence is rendered to SVG by Graphviz with light ink on a dark theme, then rasterized by resvg', async ($, on) => {
  const { runs } = stubWorld(on)

  const ui = await mountReply($, fence('dot', 'digraph { a -> b }'))

  expect(await ui.find({ type: 'Image' })).toBeDefined()
  expect(runs.find((argv) => argv[0] === 'dot')).toEqual(
    expect.arrayContaining(['-Tsvg', '-Gbgcolor=transparent', '-Ncolor=#d4d4d4']),
  )
  expect(runs.find((argv) => argv[0] === 'resvg')).toEqual(expect.arrayContaining(['--zoom', '2']))
})

test('a graphviz fence is an alias for dot', async ($, on) => {
  const { runs } = stubWorld(on)

  await mountReply($, fence('graphviz', 'digraph { a -> b }'))

  expect(runs.some((argv) => argv[0] === 'dot')).toBe(true)
})

test("a d2 fence is rendered with d2's dark theme", async ($, on) => {
  const { runs } = stubWorld(on)

  await mountReply($, fence('d2', 'a -> b'))

  expect(runs.find((argv) => argv[0] === 'd2')).toEqual(expect.arrayContaining(['--theme', '200', '-']))
})

test('an svg fence goes straight to resvg', async ($, on) => {
  const { runs } = stubWorld(on)

  const ui = await mountReply($, fence('svg', '<svg xmlns="http://www.w3.org/2000/svg"/>'))

  expect(await ui.find({ type: 'Image' })).toBeDefined()
  expect(runs.map((argv) => argv[0])).toEqual(['resvg'])
})

test('a dot fence without Graphviz on PATH is left as code, with no error shown', async ($, on) => {
  stubWorld(on, { respond: (argv) => missing(argv[0]!) })

  const ui = await mountReply($, fence('dot', 'digraph { a -> b }'))

  expect(await ui.find({ type: 'Image' })).toBeUndefined()
  expect(await ui.find({ text: /not found/ })).toBeUndefined()
})

test('a diagram the row cap would shrink past legibility grows to the terminal height instead', async ($, on) => {
  stubWorld(on, { png: pngHeader(400, 3200) })

  const ui = await mountReply($, fence('dot', 'digraph { a -> b }'))

  // 200x1600 at 1x: max_rows 30 leaves 8 columns, 32% of its width. The
  // 50-row viewport allows 44 rows, 12 columns, still under 60%, so the hint
  // shows as well.
  expect((await ui.find({ type: 'Image' }))?.props).toMatchObject({ rows: 44, columns: 12 })
  expect(await ui.find({ text: /shown at 48% · \/figures to enlarge/ })).toBeDefined()
})

test('a diagram drawn legibly gets no hint', async ($, on) => {
  stubWorld(on)

  const ui = await mountReply($, fence('dot', 'digraph { a -> b }'))

  expect(await ui.find({ text: /shown at/ })).toBeUndefined()
})
