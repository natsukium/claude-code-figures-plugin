import { expect, test, type Engine } from 'claude-code/testing'

import { missing, readImage, stubWorld } from './support.ts'

const mountToolUse = ($: Engine, output: unknown, tool = 'Read') =>
  $.ui.mount({
    plugin: 'figures',
    surface: 'terminal',
    component: 'ToolUse',
    requestId: 'toolu_1',
    props: {
      tool_use_id: 'toolu_1',
      tool,
      input: { file_path: '/repo/shot.png' },
      isRunning: false,
      isErrored: false,
      isInterrupted: false,
      output,
    },
    viewport: { columns: 200, rows: 50 },
  })

const mountGroup = ($: Engine, isExpanded: boolean) =>
  $.ui.mount({
    plugin: 'figures',
    surface: 'terminal',
    component: 'ToolGroup',
    props: {
      calls: [
        {
          tool_use_id: 'toolu_a',
          tool: 'Read',
          input: {},
          isRunning: false,
          isErrored: false,
          isInterrupted: false,
          output: readImage('image/png'),
        },
        {
          tool_use_id: 'toolu_b',
          tool: 'Grep',
          input: {},
          isRunning: false,
          isErrored: false,
          isInterrupted: false,
          output: { matches: [] },
        },
      ],
      isActive: false,
      isExpanded,
    },
    viewport: { columns: 200, rows: 50 },
  })

test('a PNG that Read returned is decoded to the cache, named by its content, and drawn full size under the tool row', async ($, on) => {
  const { runs } = stubWorld(on)

  const ui = await mountToolUse($, readImage('image/png'))

  expect((await ui.find({ type: 'Image' }))?.props).toMatchObject({
    source: { file: expect.stringMatching(/^\/tmp\/x\/claude-figures\/img-[0-9a-f]{64}\.png$/) },
    columns: 120,
    rows: 14,
  })
  expect(runs[0]).toEqual(expect.arrayContaining(['base64 -d > "$1"']))
  expect(runs.some((argv) => argv[0] === 'magick' || argv[0] === 'sips')).toBe(false)
})

test('a JPEG falls back from magick to sips for the PNG conversion', async ($, on) => {
  const { runs } = stubWorld(on, { respond: (argv) => (argv[0] === 'magick' ? missing('magick') : undefined) })

  const ui = await mountToolUse($, readImage('image/jpeg'))

  expect(await ui.find({ type: 'Image' })).toBeDefined()
  expect(runs.find((argv) => argv[0] === 'sips')).toEqual(expect.arrayContaining(['-s', 'format', 'png']))
})

test('a tool row without an image is drawn by the engine alone', async ($, on) => {
  const { runs } = stubWorld(on)

  const ui = await mountToolUse($, { stdout: 'ok', stderr: '' }, 'Bash')

  expect(await ui.find({ type: 'Image' })).toBeUndefined()
  expect(runs).toHaveLength(0)
})

test('tool_images=false leaves tool rows alone', { options: { tool_images: false } }, async ($, on) => {
  const { runs } = stubWorld(on)

  const ui = await mountToolUse($, readImage('image/png'))

  expect(await ui.find({ type: 'Image' })).toBeUndefined()
  expect(runs).toHaveLength(0)
})

test("a collapsed tool group draws its calls' images under the count line", async ($, on) => {
  stubWorld(on)

  const ui = await mountGroup($, false)

  expect(await ui.findAll({ type: 'Image' })).toHaveLength(1)
})

test('an expanded tool group is left to its ToolUse rows', async ($, on) => {
  const { runs } = stubWorld(on)

  const ui = await mountGroup($, true)

  expect(await ui.find({ type: 'Image' })).toBeUndefined()
  expect(runs).toHaveLength(0)
})

test(
  'tool_image_max_rows caps the thumbnails of a collapsed group separately from diagrams',
  { options: { tool_image_max_rows: 5 } },
  async ($, on) => {
    stubWorld(on)

    const ui = await mountGroup($, false)

    expect((await ui.find({ type: 'Image' }))?.props).toMatchObject({ rows: 5 })
  },
)

test("a collapsed group's thumbnail too small to read points at ctrl+o", async ($, on) => {
  stubWorld(on)

  const ui = await mountGroup($, false)

  // 1600x400 in 12 rows is 101 columns, 51% of its width.
  expect(await ui.find({ text: /shown at 51% · ctrl\+o or \/figures to enlarge/ })).toBeDefined()
})
