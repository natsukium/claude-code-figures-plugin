import type { On, PromptOrigin, SessionMessage } from 'claude-code'
import { expect, test, type Engine } from 'claude-code/testing'

import { fence, missing, PNG_400x1600, readImage, stubWorld } from './support.ts'

const transcript: SessionMessage[] = [
  { role: 'user', text: 'draw it', toolUses: [] },
  { role: 'assistant', text: fence('dot', 'digraph { a -> b }'), toolUses: [] },
  {
    role: 'assistant',
    text: '',
    toolUses: [{ tool_use_id: 'toolu_1', tool: 'Read', input: {}, result: readImage('image/png'), text: '' }],
  },
]

const mountPane = ($: Engine, placement: 'dock' | 'inline' = 'inline', bodyRows = 3, viewportRows = 40) =>
  $.ui.mount({
    plugin: 'figures',
    surface: 'terminal',
    component: 'Pane',
    requestId: 'figures',
    props: {
      title: 'Figures',
      isFocused: true,
      bodyColumns: 100,
      placement,
      scroll: { offset: 0, bodyRows },
      view: {},
    },
    viewport: { columns: 104, rows: viewportRows },
  })

const stubTranscript = (on: On, messages: SessionMessage[]) => on('session.messages', async () => ({ value: messages }))

const stubTall = (on: On) => {
  stubWorld(on, { png: PNG_400x1600 })
  stubTranscript(on, [{ role: 'assistant', text: fence('dot', 'digraph { a -> b }'), toolUses: [] }])
}

test('the figures pane shows the newest picture of the transcript first, as wide as the pane', async ($, on) => {
  stubWorld(on)
  stubTranscript(on, transcript)

  const ui = await mountPane($)

  expect(await ui.find({ text: /2\/2 Read$/ })).toBeDefined()
  expect((await ui.find({ type: 'Image' }))?.props).toMatchObject({
    source: { file: expect.stringMatching(/img-[0-9a-f]{64}\.png$/) },
    columns: 100,
  })
})

test('Prev in the figures pane steps back to the earlier diagram', async ($, on) => {
  stubWorld(on)
  stubTranscript(on, transcript)

  const ui = await mountPane($)
  await ui.press({ key: 'prev' })

  expect(await ui.find({ text: /1\/2 dot$/ })).toBeDefined()
})

test('Open in the figures pane hands the PNG to open, then xdg-open when open is missing', async ($, on) => {
  const { runs } = stubWorld(on, { respond: (argv) => (argv[0] === 'open' ? missing('open') : undefined) })
  stubTranscript(on, transcript)

  const ui = await mountPane($)
  await ui.press({ key: 'open' })

  expect(runs.find((argv) => argv[0] === 'xdg-open')?.[1]).toMatch(/img-[0-9a-f]{64}\.png$/)
})

test('the figures pane includes an image sent with SendUserFile', async ($, on) => {
  stubWorld(on)
  stubTranscript(on, [
    {
      role: 'assistant',
      text: '',
      toolUses: [
        {
          tool_use_id: 'toolu_1',
          tool: 'SendUserFile',
          input: {},
          result: { attachments: [{ path: '/repo/sent.png', size: 1, isImage: true, media_type: 'image/png' }] },
          text: '',
        },
      ],
    },
  ])

  const ui = await mountPane($)

  expect(await ui.find({ text: /1\/1 SendUserFile$/ })).toBeDefined()
  expect((await ui.find({ type: 'Image' }))?.props).toMatchObject({
    source: { file: expect.stringMatching(/img-[0-9a-f]{64}\.png$/) },
  })
})

test('the figures pane says so when nothing has been drawn', async ($, on) => {
  stubWorld(on)
  stubTranscript(on, [{ role: 'user', text: 'hi', toolUses: [] }])

  const ui = await mountPane($)

  expect(await ui.find({ text: /No diagrams or images/ })).toBeDefined()
})

test('an inline figures pane sizes a tall picture by the terminal height, not by the rows it drew last', async ($, on) => {
  stubTall(on)

  const ui = await mountPane($, 'inline', 3)

  expect((await ui.find({ type: 'Image' }))?.props).toMatchObject({ rows: 26 })
})

test('a docked figures pane fits a tall picture into its body, less the header row', async ($, on) => {
  stubTall(on)

  const ui = await mountPane($, 'dock', 20)

  expect((await ui.find({ type: 'Image' }))?.props).toMatchObject({ rows: 19 })
})

test('an inline figures pane in a tall terminal is not held to max_rows', async ($, on) => {
  stubTall(on)

  const ui = await mountPane($, 'inline', 3, 70)

  // 400x1600 at 2x is drawn whole in 48 rows, more than max_rows' 30.
  expect((await ui.find({ type: 'Image' }))?.props).toMatchObject({ rows: 48, columns: 25 })
})

test('opened without a choice, the figures pane shows the newest picture the transcript drew too small', async ($, on) => {
  stubWorld(on)
  stubTranscript(on, [
    ...transcript.slice(0, 2),
    { role: 'assistant', text: fence('mermaid', 'flowchart LR\n  A --> B'), toolUses: [] },
    transcript[2]!,
  ])

  const ui = await mountPane($)

  // The Read screenshot is the newest, but only it was drawn as a thumbnail
  // too small to read; the diagrams, at 1600x400, fit their 120 columns.
  expect(await ui.find({ text: /3\/3 Read$/ })).toBeDefined()
})

const submitAndRecordCloses = async ($: Engine, on: On, origin: PromptOrigin) => {
  const closed: string[] = []
  on('ui.close', async (_, e) => {
    closed.push(e.id)
    return { value: undefined }
  })
  on('prompt.submit', async (_, e) => ({ text: e.text }))
  const submitted = await $.prompt.submit({ text: 'next question', wait: false, origin })
  return { closed, submitted }
}

test('submitting the next prompt from the composer closes the figures pane and lets the prompt through', async ($, on) => {
  expect(await submitAndRecordCloses($, on, { kind: 'composer' })).toEqual({
    closed: ['figures'],
    submitted: { text: 'next question' },
  })
})

test('a prompt sent through Remote Control closes the figures pane', async ($, on) => {
  expect((await submitAndRecordCloses($, on, { kind: 'bridge' })).closed).toEqual(['figures'])
})

test('a task notification arriving as a prompt leaves the figures pane open', async ($, on) => {
  expect((await submitAndRecordCloses($, on, { kind: 'task-notification' })).closed).toEqual([])
})
