import type { Io } from './io.ts'

// Mods cannot read the terminal's background, so Claude Code's own theme
// stands in for it. Its auto setting is resolved inside the engine and not
// exposed, so COLORFGBG, which some terminals export, decides then.
export async function resolveTheme(io: Io, configured: string): Promise<string> {
  if (configured !== 'auto') return configured
  const claude = await io.claudeTheme()
  let light = typeof claude === 'string' && claude.startsWith('light')
  if (claude === 'auto') {
    const background = (await io.colorfgbg())?.split(';').at(-1)
    light = background === '7' || background === '15'
  }
  return light ? 'default' : 'dark'
}

export const isDark = (theme: string) => theme === 'dark'
