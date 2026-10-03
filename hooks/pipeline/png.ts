import type { Io } from '../io.ts'
import type { Exec } from './exec.ts'

export type Size = { width: number; height: number }

const BASE64 = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/'

// Bytes 16..23 of a PNG are the IHDR width and height; 32 base64 characters
// decode to the first 24 bytes.
export function pngSize(base64: string): Size {
  const bytes: number[] = []
  for (let i = 0; i < 32; i += 4) {
    const n = [0, 1, 2, 3].reduce((acc, j) => (acc << 6) | BASE64.indexOf(base64[i + j] ?? 'A'), 0)
    bytes.push((n >> 16) & 0xff, (n >> 8) & 0xff, n & 0xff)
  }
  const u32 = (at: number) =>
    ((bytes[at]! << 24) | (bytes[at + 1]! << 16) | (bytes[at + 2]! << 8) | bytes[at + 3]!) >>> 0
  return { width: u32(16), height: u32(20) }
}

export async function readPngSize(io: Io, path: string): Promise<Size> {
  return pngSize(await io.readBase64(path))
}

// A screenshot can be megabytes; reading only its header keeps that out of
// the hooks environment.
export async function readPngHeader(exec: Exec, path: string): Promise<Size> {
  const head = await exec(['sh', '-c', 'head -c 24 "$1" | base64', 'sh', path])
  return pngSize(head.stdout.replace(/\s/g, ''))
}
