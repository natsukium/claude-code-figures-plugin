import { expect, test, type Engine } from 'claude-code/testing'

import { PNG_1600x400, PNG_400x1600, missing, readImage, stubWorld } from './support.ts'

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

const sentFile = (path: string) => ({
  attachments: [{ path, size: 1, isImage: true, media_type: 'image/png' }],
})

const mountSentResult = (
  $: Engine,
  output: unknown,
  { id = 'toolu_1', requestId, isErrored = false }: { id?: string; requestId?: string; isErrored?: boolean } = {},
) =>
  $.ui.mount({
    plugin: 'figures',
    surface: 'terminal',
    component: 'ToolResult',
    requestId: requestId ?? id,
    props: { tool_use_id: id, tool: 'SendUserFile', output, isErrored },
    viewport: { columns: 200, rows: 50 },
  })

test('an image SendUserFile sent is read from its path and drawn full size under its attachment line', async ($, on) => {
  const reads: string[] = []
  stubWorld(on, {
    read: (path) => {
      reads.push(path)
      return { value: { base64: PNG_1600x400 } }
    },
  })

  const ui = await mountSentResult($, sentFile('/repo/sent.png'))

  expect(reads).toContain('/repo/sent.png')
  expect((await ui.find({ type: 'Image' }))?.props).toMatchObject({
    source: { file: expect.stringMatching(/^\/tmp\/x\/claude-figures\/img-[0-9a-f]{64}\.png$/) },
    columns: 120,
  })
})

test('an SVG that Read returned whole is drawn by resvg under the tool row', async ($, on) => {
  const source = '<svg xmlns="http://www.w3.org/2000/svg" width="400" height="200"/>'
  const { runs, stdins } = stubWorld(on)

  const ui = await mountToolUse($, {
    type: 'text',
    file: { filePath: '/repo/diagram.svg', content: source, startLine: 1, numLines: 1, totalLines: 1 },
  })

  expect(await ui.find({ type: 'Image' })).toBeDefined()
  expect(runs.map((argv) => argv[0])).toEqual(['resvg'])
  expect(stdins[0]).toBe(source)
})

test('an SVG and a PNG sent together are drawn in the order they were attached', async ($, on) => {
  stubWorld(on, {
    read: (path) => ({
      value: path.endsWith('.svg') ? '<svg xmlns="http://www.w3.org/2000/svg"/>' : { base64: PNG_1600x400 },
    }),
  })

  const ui = await mountSentResult($, {
    attachments: [
      { path: '/repo/diagram.svg', size: 1, isImage: false, media_type: 'image/svg+xml' },
      { path: '/repo/shot.png', size: 1, isImage: true, media_type: 'image/png' },
    ],
  })

  const files = (await ui.findAll({ type: 'Image' })).map((image) => (image.props.source as { file: string }).file)
  expect(files).toHaveLength(2)
  expect(files[0]).not.toMatch(/\/img-/)
  expect(files[1]).toMatch(/\/img-[0-9a-f]{64}\.png$/)
})

test('an SVG SendUserFile sent is read as text and drawn by resvg under its attachment line', async ($, on) => {
  const source = '<svg xmlns="http://www.w3.org/2000/svg" width="400" height="200"/>'
  const { runs, stdins } = stubWorld(on, {
    read: (path) => ({ value: path.endsWith('.svg') ? source : { base64: PNG_1600x400 } }),
  })

  const ui = await mountSentResult($, {
    attachments: [{ path: '/repo/diagram.svg', size: 1, isImage: false, media_type: 'image/svg+xml' }],
  })

  expect(await ui.find({ type: 'Image' })).toBeDefined()
  expect(runs.map((argv) => argv[0])).toEqual(['resvg'])
  expect(stdins[0]).toBe(source)
})

test("SendUserFile's tool row is left to the engine, so its image is drawn once", async ($, on) => {
  const { runs } = stubWorld(on)

  const ui = await mountToolUse($, sentFile('/repo/sent.png'), 'SendUserFile')

  expect(await ui.find({ type: 'Image' })).toBeUndefined()
  expect(runs).toHaveLength(0)
})

test('a SendUserFile result whose file is gone is drawn by the engine alone', async ($, on) => {
  const { runs } = stubWorld(on, { read: () => ({ deny: 'ENOENT' }) })

  const ui = await mountSentResult($, sentFile('/repo/gone.png'))

  expect(await ui.find({ type: 'Image' })).toBeUndefined()
  expect(runs).toHaveLength(0)
})

test('a sent file overwritten later keeps the picture its row first drew, while a new send of it draws the new one', async ($, on) => {
  let current = PNG_1600x400
  let reads = 0
  stubWorld(on, {
    read: () => {
      reads++
      return { value: { base64: current } }
    },
  })

  const first = await (await mountSentResult($, sentFile('/repo/shot.png'), { id: 'toolu_1' })).find({ type: 'Image' })
  current = PNG_400x1600
  const redrawn = await (
    await mountSentResult($, sentFile('/repo/shot.png'), { id: 'toolu_1', requestId: 'redraw' })
  ).find({ type: 'Image' })
  const resent = await (await mountSentResult($, sentFile('/repo/shot.png'), { id: 'toolu_2' })).find({ type: 'Image' })

  expect(reads).toBe(2)
  expect(redrawn?.props.source).toEqual(first?.props.source)
  expect(resent?.props.source).not.toEqual(first?.props.source)
})

test('a SendUserFile result that errored is drawn by the engine alone', async ($, on) => {
  const { runs } = stubWorld(on)

  const ui = await mountSentResult($, sentFile('/repo/sent.png'), { isErrored: true })

  expect(await ui.find({ type: 'Image' })).toBeUndefined()
  expect(runs).toHaveLength(0)
})

test('tool_images=false leaves SendUserFile results alone', { options: { tool_images: false } }, async ($, on) => {
  const { runs } = stubWorld(on)

  const ui = await mountSentResult($, sentFile('/repo/sent.png'))

  expect(await ui.find({ type: 'Image' })).toBeUndefined()
  expect(runs).toHaveLength(0)
})

test('a collapsed tool group holding a SendUserFile call draws its image as a thumbnail', async ($, on) => {
  stubWorld(on)

  const ui = await $.ui.mount({
    plugin: 'figures',
    surface: 'terminal',
    component: 'ToolGroup',
    props: {
      calls: [
        {
          tool_use_id: 'toolu_a',
          tool: 'SendUserFile',
          input: {},
          isRunning: false,
          isErrored: false,
          isInterrupted: false,
          output: sentFile('/repo/sent.png'),
        },
      ],
      isActive: false,
      isExpanded: false,
    },
    viewport: { columns: 200, rows: 50 },
  })

  expect((await ui.find({ type: 'Image' }))?.props).toMatchObject({ rows: 12 })
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
