import type { Io } from '../io.ts'
import { sha256Hex } from '../vendor/hash.js'

// JSON.stringify keeps insertion order, so keys are sorted to make two equal
// requests hash alike however they were built.
const canonical = (value: unknown): string =>
  JSON.stringify(value, (_, v: unknown) =>
    v !== null && typeof v === 'object' && !Array.isArray(v)
      ? Object.fromEntries(Object.entries(v).sort(([a], [b]) => (a < b ? -1 : a > b ? 1 : 0)))
      : v,
  )

export const cacheKey = (request: unknown): string => sha256Hex(canonical(request))

export async function cacheDir(io: Io): Promise<string> {
  const tmp = ((await io.tmpdir()) ?? '/tmp').replace(/\/$/, '')
  return `${tmp}/claude-figures`
}

export async function expire(io: Io, dir: string, days = 7): Promise<void> {
  await io
    .run(['find', dir, '-name', '*.png', '-mtime', `+${days}`, '-delete'], { stdin: '', timeoutMs: 10_000 })
    .catch(() => undefined)
}

/** One promise per key, so a picture drawn again while rendering joins the first render. */
export class Memo<T> {
  readonly #entries = new Map<string, Promise<T>>()

  get(key: string, make: () => Promise<T>): Promise<T> {
    let entry = this.#entries.get(key)
    if (entry === undefined) {
      entry = make()
      this.#entries.set(key, entry)
    }
    return entry
  }
}
