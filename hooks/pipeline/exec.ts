import type { Io, RunResult } from '../io.ts'

export class MissingCommand extends Error {
  readonly command: string

  constructor(command: string) {
    super(`${command} not found on PATH`)
    this.command = command
  }
}

export type Exec = (argv: string[], stdin?: string, timeoutMs?: number) => Promise<RunResult>

export const execWith =
  (io: Io): Exec =>
  async (argv, stdin = '', timeoutMs = 10_000) => {
    try {
      return await io.run(argv, { stdin, timeoutMs })
    } catch (error) {
      throw /ENOENT/.test(String(error)) ? new MissingCommand(argv[0]!) : error
    }
  }

export const failure = (name: string, result: { exitCode: number; stderr: string }) => ({
  error: result.stderr.trim() || `${name} exited ${result.exitCode}`,
})
