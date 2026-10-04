import { atom, read, update } from 'claude-code'
import type { EngineInterface, Register, RenderChildren } from 'claude-code'

import { parseConfig } from './config.ts'
import type { Figures } from './figures.ts'
import type { Io } from './io.ts'
import { Memo, cacheDir, expire } from './pipeline/cache.ts'
import { Pipeline } from './pipeline/index.ts'
import { createRegistry } from './renderers/index.ts'
import { replyPictures, toolGroupPictures, toolUsePictures } from './ui/inline.tsx'
import { PANE, drawPane } from './ui/pane.tsx'
import { type TerminalElements, type pictures, viewportOf } from './ui/pictures.tsx'

const selected = atom({ plugin: 'figures', key: 'selected' } as const, null)

function ioOf($: EngineInterface): Io {
  return {
    run: (argv, init) => $.process.run(argv, init),
    exists: (path) => $.fs.exists(path),
    readText: (path) => $.fs.read(path),
    readBase64: async (path) => (await $.fs.read(path, { as: 'bytes' })).base64,
    write: (path, text) => $.fs.write(path, text),
    tmpdir: () => $.env.get('TMPDIR'),
    colorfgbg: () => $.env.get('COLORFGBG'),
    claudeTheme: async () => (await $.config.list()).find((row) => row.key === 'theme')?.value,
    messages: () => $.session.messages(),
    toast: (text) => $.ui.toast(text),
    pluginRoot: $.plugin.root,
  }
}

export const register: Register = (on, options) => {
  const config = parseConfig(options)
  const registry = createRegistry(config.renderers)
  const figures: Figures = { config, registry, pipeline: new Pipeline(registry), sent: new Memo() }

  on('session.start', async ($, e, next) => {
    const io = ioOf($)
    await expire(io, await cacheDir(io))
    await $.command.register({ name: PANE, description: 'Browse the diagrams and images drawn in this session' })
    if (registry.unknown.length > 0) {
      $.ui.toast(`figures: unknown renderer ${registry.unknown.join(', ')} in the renderers option`)
    }
    return next(e)
  })

  on('command.run', { command: PANE }, async ($) => {
    // The pane is where a picture too small inline is enlarged, so it asks for
    // all the height the layout can spare rather than max_rows.
    await $.ui.open({ id: PANE, title: 'Figures', focus: true, closeOnEscape: true, rows: 255 })
    return { text: 'Figures pane opened: p/n move, o opens in the system viewer.' }
  })

  // Only the person's own prompt dismisses it; a notification or peer
  // delivery is not the person moving on.
  on('prompt.submit', async ($, e, next) => {
    if (e.origin.kind === 'composer' || e.origin.kind === 'bridge') await $.ui.close({ id: PANE })
    return next(e)
  })

  on('ui.render', { component: 'Pane', requestId: PANE }, async ($, e, next) => {
    if (e.surface !== 'terminal') return next(e)
    const selection = { index: await read($, selected), set: (index: number) => update($, selected, () => index) }
    return drawPane(ioOf($), figures, $.ui.resolve(e), e.props, viewportOf(e), selection)
  })

  on('ui.render', { component: 'AssistantMessage' }, async ($, e, next) => {
    if (e.surface !== 'terminal') return next(e)
    const el = $.ui.resolve(e)
    return under(el, () => next(e), await replyPictures(ioOf($), figures, el, e.props.text, viewportOf(e)))
  })

  // SendUserFile's ToolUse row draws nothing of its own, so a picture hung
  // under it lands above the attachment line its ToolResult draws.
  on('ui.render', { component: 'ToolResult' }, async ($, e, next) => {
    if (e.surface !== 'terminal' || e.props.tool !== 'SendUserFile' || e.props.isErrored) return next(e)
    const el = $.ui.resolve(e)
    return under(el, () => next(e), await toolUsePictures(ioOf($), figures, el, e.props, viewportOf(e)))
  })

  on('ui.render', { component: 'ToolUse' }, async ($, e, next) => {
    if (e.surface !== 'terminal' || e.props.isRunning || e.props.output === undefined) return next(e)
    if (e.props.tool === 'SendUserFile') return next(e)
    const el = $.ui.resolve(e)
    return under(el, () => next(e), await toolUsePictures(ioOf($), figures, el, e.props, viewportOf(e)))
  })

  on('ui.render', { component: 'ToolGroup' }, async ($, e, next) => {
    if (e.surface !== 'terminal' || e.props.isExpanded) return next(e)
    const el = $.ui.resolve(e)
    return under(el, () => next(e), await toolGroupPictures(ioOf($), figures, el, e.props.calls, viewportOf(e)))
  })
}

async function under<Row extends RenderChildren>(
  { Box }: TerminalElements,
  row: () => Promise<Row>,
  drawn: ReturnType<typeof pictures> | undefined,
) {
  if (drawn === undefined) return row()
  return (
    <Box flexDirection="column">
      {await row()}
      {drawn}
    </Box>
  )
}
