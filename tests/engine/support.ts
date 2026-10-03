import type { ConfigRow, On, RenderElement } from 'claude-code'
import type { Engine } from 'claude-code/testing'

// 1600x400 PNG: signature, IHDR length and type, then width and height.
export const PNG_1600x400 = 'iVBORw0KGgoAAAANSUhEUgAABkAAAAGQCAYAAAAAAAAA'
export const PNG_400x1600 = 'iVBORw0KGgoAAAANSUhEUgAAAZAAAAZACAYAAAA='

// The PNG signature, IHDR length and type, then the big-endian width and height.
export const pngHeader = (width: number, height: number) => {
  const bytes = [0x89, 0x50, 0x4e, 0x47, 0x0d, 0x0a, 0x1a, 0x0a, 0, 0, 0, 13, 0x49, 0x48, 0x44, 0x52]
  for (const n of [width, height]) bytes.push((n >>> 24) & 0xff, (n >>> 16) & 0xff, (n >>> 8) & 0xff, n & 0xff)
  return btoa(String.fromCharCode(...bytes, 8, 6, 0, 0, 0))
}

export type Run = {
  exitCode: number
  stdout: string
  stderr: string
  isStdoutTruncated: boolean
  isStderrTruncated: boolean
}
export const result = (exitCode: number, stdout = '', stderr = ''): { value: Run } => ({
  value: { exitCode, stdout, stderr, isStdoutTruncated: false, isStderrTruncated: false },
})
export const missing = (command: string) => ({ deny: `spawn ${command} ENOENT` })

export const themeRow = (value: string): ConfigRow => ({
  key: 'theme',
  label: 'Theme',
  kind: 'choice',
  value,
  provider: { plugin: 'engine', tier: 'core' },
  isLocked: false,
})

export const reply = 'Here is the flow:\n\n```mermaid\nflowchart LR\n  A --> B\n```\n'
export const fence = (lang: string, body: string) => `Diagram:\n\n\`\`\`${lang}\n${body}\n\`\`\`\n`

type Respond = (argv: readonly string[], stdin?: string) => { value: Run } | { deny: string } | undefined

export type Stubs = {
  claudeTheme?: string
  colorfgbg?: string
  png?: string
  exists?: (path: string) => boolean
  respond?: Respond
  read?: (path: string) => { value: { base64: string } | string } | { deny: string }
}

/**
 * Stands in for everything the plugin reaches outside itself: the engine's own
 * drawing, Claude Code's theme, the cache directory and the renderers. Returns
 * the argv of each process run and the stdin it was given, and each write.
 */
export function stubWorld(on: On, stubs: Stubs = {}) {
  const runs: string[][] = []
  const stdins: (string | undefined)[] = []
  const writes: { path: string; text: string }[] = []
  const png = stubs.png ?? PNG_1600x400
  on('ui.render', async () => h('Text', null, 'engine row') as RenderElement)
  on('config.list', async () => ({ value: [themeRow(stubs.claudeTheme ?? 'dark')] }))
  on('env.get', async (_, e) => ({ value: e.name === 'COLORFGBG' ? stubs.colorfgbg : '/tmp/x' }))
  on('fs.write', async (_, e) => {
    writes.push({ path: e.path, text: e.text })
    return { value: undefined }
  })
  on('fs.exists', async (_, e) => ({ value: stubs.exists?.(e.path) ?? false }))
  on('fs.read', async (_, e) => stubs.read?.(e.path) ?? { value: { base64: png } })
  on('process.run', async (_, e) => {
    runs.push([...e.argv])
    stdins.push(e.init?.stdin)
    if (e.argv[2]?.startsWith('head')) return result(0, png.slice(0, 32))
    return stubs.respond?.(e.argv, e.init?.stdin) ?? result(0, '<svg/>')
  })
  return { runs, stdins, writes }
}

export const mountReply = ($: Engine, text = reply) =>
  $.ui.mount({
    plugin: 'figures',
    surface: 'terminal',
    component: 'AssistantMessage',
    props: { text, isFirstOfReply: true },
    viewport: { columns: 200, rows: 50 },
  })

export const readImage = (mime: string, base64 = PNG_1600x400) => ({
  type: 'image',
  file: { base64, type: mime, originalSize: 1 },
})
