import { expect, test } from 'claude-code/testing'

import { missing, mountReply, result, stubWorld } from './support.ts'

test('a mermaid fence is rendered to SVG by mmdr, rasterized by resvg at the scale, and drawn at its 1x size', async ($, on) => {
  const { runs } = stubWorld(on, { respond: (argv) => result(0, argv[0] === 'mmdr' ? '<svg/>' : '') })

  const ui = await mountReply($)

  expect((await ui.find({ type: 'Image' }))?.props).toMatchObject({
    source: { file: expect.stringMatching(/^\/tmp\/x\/claude-figures\/[0-9a-f]{64}@2x\.png$/), format: 'png' },
    columns: 100,
    rows: 12,
  })
  expect(runs.find((argv) => argv[0] === 'mmdr')).toEqual(expect.arrayContaining(['-e', 'svg', '-t', 'dark']))
  expect(runs.find((argv) => argv[0] === 'resvg')).toEqual(expect.arrayContaining(['--zoom', '2']))
})

test('without resvg on PATH, mmdr writes the PNG itself at 1x', async ($, on) => {
  const { runs } = stubWorld(on, { respond: (argv) => (argv[0] === 'resvg' ? missing('resvg') : result(0, '<svg/>')) })

  const ui = await mountReply($)

  expect((await ui.find({ type: 'Image' }))?.props).toMatchObject({
    source: { file: expect.stringMatching(/@1x\.png$/) },
    columns: 120,
  })
  expect(runs.at(-1)).toEqual(expect.arrayContaining(['mmdr', '-e', 'png']))
})

test('a PNG already in the cache is drawn without running any renderer', async ($, on) => {
  const { runs } = stubWorld(on, { exists: (path) => path.endsWith('@2x.png') })

  const ui = await mountReply($)

  expect(await ui.find({ type: 'Image' })).toBeDefined()
  expect(runs).toHaveLength(0)
})

test('a desktop reply is left to the engine, since Image is terminal-only', async ($, on) => {
  const { runs } = stubWorld(on)

  await $.ui.mount({
    plugin: 'figures',
    surface: 'desktop',
    component: 'AssistantMessage',
    props: { text: '```mermaid\nflowchart LR\n  A --> B\n```\n', isFirstOfReply: true },
  })

  expect(runs).toHaveLength(0)
})

test('a reply without a figure fence runs no renderer', async ($, on) => {
  const { runs } = stubWorld(on)

  const ui = await mountReply($, '```ts\nconst a = 1\n```')

  expect(await ui.find({ type: 'Image' })).toBeUndefined()
  expect(runs).toHaveLength(0)
})

test("when mmdr and mmdc both fail, mmdr's first stderr line is shown instead of an Image", async ($, on) => {
  stubWorld(on, {
    respond: (argv) => result(1, '', argv[0] === 'mmdr' ? 'parse error at line 2\nmore' : 'mmdc says no'),
  })

  const ui = await mountReply($)

  expect(await ui.find({ type: 'Image' })).toBeUndefined()
  expect(await ui.find({ text: /parse error at line 2/ })).toBeDefined()
})

test('with neither mmdr nor mmdc on PATH, the block is left as code with no error', async ($, on) => {
  stubWorld(on, { respond: (argv) => missing(argv[0]!) })

  const ui = await mountReply($)

  expect(await ui.find({ type: 'Image' })).toBeUndefined()
  expect(await ui.find({ text: /not found|mermaid:/ })).toBeUndefined()
})

test(
  'the theme and background options reach mmdr',
  { options: { theme: 'forest', background: '#ffffff' } },
  async ($, on) => {
    const { runs, writes } = stubWorld(on)

    await mountReply($)

    expect(runs.find((argv) => argv[0] === 'mmdr')).toEqual(expect.arrayContaining(['-t', 'forest']))
    expect(writes.find((w) => w.path.includes('/mermaid-'))?.text).toBe('{"themeVariables":{"background":"#ffffff"}}')
  },
)

test('without mmdr on PATH, mmdc writes the PNG at the scale itself', async ($, on) => {
  const { runs } = stubWorld(on, { respond: (argv) => (argv[0] === 'mmdr' ? missing('mmdr') : result(0)) })

  const ui = await mountReply($)

  expect((await ui.find({ type: 'Image' }))?.props).toMatchObject({
    source: { file: expect.stringMatching(/@2x\.png$/) },
  })
  expect(runs.find((argv) => argv[0] === 'mmdc')).toEqual(
    expect.arrayContaining(['-i', '-', '-t', 'dark', '-b', 'transparent', '-s', '2']),
  )
  expect(runs.some((argv) => argv[0] === 'resvg')).toBe(false)
})

test('a block mmdr rejects is rendered by mmdc instead', async ($, on) => {
  const { runs } = stubWorld(on, {
    respond: (argv) => (argv[0] === 'mmdr' ? result(1, '', 'unsupported syntax') : result(0)),
  })

  const ui = await mountReply($)

  expect(await ui.find({ type: 'Image' })).toBeDefined()
  expect(await ui.find({ text: /unsupported syntax/ })).toBeUndefined()
  expect(runs.map((argv) => argv[0])).toEqual(['mmdr', 'mmdc'])
})

test(
  'renderers=mmdc skips mmdr and maps the mmdr-only modern theme to default',
  { options: { renderers: 'mmdc', theme: 'modern' } },
  async ($, on) => {
    const { runs } = stubWorld(on, { respond: () => result(0) })

    await mountReply($)

    expect(runs.map((argv) => argv[0])).toEqual(['mmdc'])
    expect(runs[0]).toEqual(expect.arrayContaining(['-t', 'default']))
  },
)

test("renderers=mmdr reports mmdr's error without trying mmdc", { options: { renderers: 'mmdr' } }, async ($, on) => {
  const { runs } = stubWorld(on, { respond: () => result(1, '', 'unsupported syntax') })

  const ui = await mountReply($)

  expect(await ui.find({ text: /unsupported syntax/ })).toBeDefined()
  expect(runs.some((argv) => argv[0] === 'mmdc')).toBe(false)
})

test('renderers=mmdc,mmdr tries mmdc first', { options: { renderers: 'mmdc,mmdr' } }, async ($, on) => {
  const { runs } = stubWorld(on, { respond: (argv) => (argv[0] === 'mmdc' ? missing('mmdc') : result(0, '<svg/>')) })

  await mountReply($)

  expect(runs.map((argv) => argv[0]).slice(0, 2)).toEqual(['mmdc', 'mmdr'])
})
