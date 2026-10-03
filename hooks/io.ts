import type { EngineInterface, SessionMessage } from 'claude-code'

export type RunResult = Awaited<ReturnType<EngineInterface['process']['run']>>

/**
 * Everything the plugin reaches outside itself. The engine refuses a module
 * that passes `$` across an import, so register.tsx builds this from `$` and
 * the rest of the plugin sees only it.
 */
export type Io = {
  run(argv: string[], init: { stdin: string; timeoutMs: number }): Promise<RunResult>
  exists(path: string): Promise<boolean>
  readText(path: string): Promise<string>
  readBase64(path: string): Promise<string>
  write(path: string, text: string): Promise<void>
  tmpdir(): Promise<string | undefined>
  /** The terminal's `fg;bg` colors, where it exports them. */
  colorfgbg(): Promise<string | undefined>
  /** Claude Code's own `theme` setting. */
  claudeTheme(): Promise<unknown>
  messages(): Promise<readonly SessionMessage[]>
  toast(text: string): unknown
  pluginRoot: string
}
