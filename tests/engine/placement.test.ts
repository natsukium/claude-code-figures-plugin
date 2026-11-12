import type { RenderElement } from 'claude-code'
import { expect, test } from 'claude-code/testing'
import type { Engine } from 'claude-code/testing'

import { type Stubs, pngHeader, result, stubWorld } from './support.ts'

const text = 'Before the diagram.\n\n```mermaid\nflowchart TD\n  A --> B\n```\n\nAfter the diagram.'
const wide = '```mermaid\nflowchart LR\n  A --> B --> C --> D --> E --> F --> G --> H\n```'

// The engine draws each piece it is given as its text, so a test sees which
// pieces went down the chain.
const engine = (props: Record<string, unknown>) => h('Text', null, String(props.text)) as RenderElement

const mount = ($: Engine, reply = text) =>
  $.ui.mount({
    plugin: 'figures',
    surface: 'terminal',
    component: 'AssistantMessage',
    props: { text: reply, isFirstOfReply: true },
    viewport: { columns: 200, rows: 50 },
  })

// Left to right the chain is 4000x200 at 1x, far too wide to read; top to
// bottom it is 400x600.
const sideways = (): Stubs => {
  const tall = new Set<string>()
  return {
    respond: (argv, stdin) => {
      if (argv[0] === 'mmdr') return result(0, /flowchart TD/.test(stdin ?? '') ? '<svg id="tall"/>' : '<svg/>')
      if (argv[0] === 'resvg' && stdin?.includes('tall')) tall.add(argv.at(-1)!)
      return result(0)
    },
    read: (path) => ({ value: { base64: tall.has(path) ? pngHeader(800, 1200) : pngHeader(8000, 400) } }),
  }
}

test(
  'inline, a picture takes the place of its block and the text around it goes down the chain',
  { options: { placement: 'inline' } },
  async ($, on) => {
    stubWorld(on, { engine })

    const ui = await mount($)

    const texts = (await ui.findAll({ type: 'Text' })).map((t) => t.text)
    expect(texts).toEqual(expect.arrayContaining(['Before the diagram.', 'After the diagram.']))
    expect(texts.join('\n')).not.toMatch(/flowchart/)
    expect(await ui.findAll({ type: 'Image' })).toHaveLength(1)
  },
)

test(
  'inline, the pieces after the first line up with the text after its bullet',
  { options: { placement: 'inline' } },
  async ($, on) => {
    stubWorld(on, { engine })

    const ui = await mount($)

    const margins = (await ui.findAll({ type: 'Box' })).map((box) => box.props.marginLeft ?? 0)
    expect(margins.filter((m) => m === 2)).toHaveLength(2)
    expect(margins).toContain(0)
  },
)

test(
  'inline, a block that fails stays as text with its error under it',
  { options: { placement: 'inline' } },
  async ($, on) => {
    stubWorld(on, { engine, respond: () => result(1, '', 'parse error at line 2') })

    const ui = await mount($)

    expect(await ui.find({ type: 'Image' })).toBeUndefined()
    expect(await ui.find({ text: /flowchart TD/ })).toBeDefined()
    expect(await ui.find({ text: /parse error at line 2/ })).toBeDefined()
  },
)

test('below stays the default: the reply is drawn whole with its pictures under it', async ($, on) => {
  stubWorld(on, { engine })

  const ui = await mount($)

  expect(await ui.find({ text: /flowchart TD/ })).toBeDefined()
  expect(await ui.findAll({ type: 'Image' })).toHaveLength(1)
})

test('a wide left-to-right flowchart is turned top to bottom when that draws it larger', async ($, on) => {
  const { stdins } = stubWorld(on, sideways())

  const ui = await mount($, wide)

  expect(stdins.some((stdin) => /flowchart TD/.test(stdin ?? ''))).toBe(true)
  expect((await ui.find({ type: 'Image' }))?.props).toMatchObject({ columns: 42, rows: 30 })
})

test('a flowchart that would read only by growing past the row cap is left as written', async ($, on) => {
  const stubs = sideways()
  // Top to bottom this one is 400x1600: within 30 rows it is shrunk too far.
  const read = stubs.read!
  stubs.read = (path) => {
    const found = read(path) as { value: { base64: string } }
    return found.value.base64 === pngHeader(800, 1200) ? { value: { base64: pngHeader(800, 3200) } } : found
  }
  stubWorld(on, stubs)

  const ui = await mount($, wide)

  expect((await ui.find({ type: 'Image' }))?.props).toMatchObject({ columns: 120 })
})

test('a flowchart that reads at its size is not turned', async ($, on) => {
  const { stdins } = stubWorld(on)

  await mount($, '```mermaid\nflowchart LR\n  A --> B\n```')

  expect(stdins.some((stdin) => /flowchart TD/.test(stdin ?? ''))).toBe(false)
})

test(
  'with turn_flowcharts off a wide flowchart is drawn as written',
  { options: { turn_flowcharts: false } },
  async ($, on) => {
    const { stdins } = stubWorld(on, sideways())

    const ui = await mount($, wide)

    expect(stdins.some((stdin) => /flowchart TD/.test(stdin ?? ''))).toBe(false)
    expect((await ui.find({ type: 'Image' }))?.props).toMatchObject({ columns: 120 })
  },
)
