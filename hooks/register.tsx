import { atom, read, update } from 'claude-code'
import type { EngineInterface, Register } from 'claude-code'

import { parseConfig } from './config.ts'
import type { Figures } from './figures.ts'
import type { Io } from './io.ts'
import { cacheDir, expire } from './pipeline/cache.ts'
import { Pipeline } from './pipeline/index.ts'
import { createRegistry } from './renderers/index.ts'
import { replyPictures, toolGroupPictures, toolUsePictures } from './ui/inline.tsx'
import { PANE, drawPane } from './ui/pane.tsx'
import { viewportOf } from './ui/pictures.tsx'

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
  const figures: Figures = { config, registry, pipeline: new Pipeline(registry) }

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

  on('ui.render', { component: 'Pane', requestId: PANE }, async ($, e, next) => {
    if (e.surface !== 'terminal') return next(e)
    const selection = { index: await read($, selected), set: (index: number) => update($, selected, () => index) }
    return drawPane(ioOf($), figures, $.ui.resolve(e), e.props, viewportOf(e), selection)
  })

  on('ui.render', { component: 'AssistantMessage' }, async ($, e, next) => {
    if (e.surface !== 'terminal') return next(e)
    const { Box, Image, Text } = $.ui.resolve(e)
    const drawn = await replyPictures(ioOf($), figures, { Box, Image, Text }, e.props.text, viewportOf(e))
    if (drawn === undefined) return next(e)
    return (
      <Box flexDirection="column">
        {await next(e)}
        {drawn}
      </Box>
    )
  })

  on('ui.render', { component: 'ToolUse' }, async ($, e, next) => {
    if (e.surface !== 'terminal' || e.props.isRunning || e.props.output === undefined) return next(e)
    const { Box, Image, Text } = $.ui.resolve(e)
    const drawn = await toolUsePictures(
      ioOf($),
      figures,
      { Box, Image, Text },
      e.props.tool,
      e.props.output,
      viewportOf(e),
    )
    if (drawn === undefined) return next(e)
    return (
      <Box flexDirection="column">
        {await next(e)}
        {drawn}
      </Box>
    )
  })

  on('ui.render', { component: 'ToolGroup' }, async ($, e, next) => {
    if (e.surface !== 'terminal' || e.props.isExpanded) return next(e)
    const { Box, Image, Text } = $.ui.resolve(e)
    const drawn = await toolGroupPictures(ioOf($), figures, { Box, Image, Text }, e.props.calls, viewportOf(e))
    if (drawn === undefined) return next(e)
    return (
      <Box flexDirection="column">
        {await next(e)}
        {drawn}
      </Box>
    )
  })
}
