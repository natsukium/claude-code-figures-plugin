import { type Exec, MissingCommand, failure } from './exec.ts'

export async function rasterizeSvg(
  exec: Exec,
  svg: string,
  path: string,
  zoom: number,
): Promise<{ error: string } | undefined> {
  const png = await exec(['resvg', '--zoom', String(zoom), '-', path], svg)
  return png.exitCode === 0 ? undefined : failure('resvg', png)
}

const CONVERTERS = (from: string, to: string) => [
  ['magick', from, to],
  ['sips', '-s', 'format', 'png', from, '--out', to],
]

export async function convertToPng(exec: Exec, from: string, to: string): Promise<{ error: string } | undefined> {
  for (const argv of CONVERTERS(from, to)) {
    try {
      const result = await exec(argv)
      return result.exitCode === 0 ? undefined : failure(argv[0]!, result)
    } catch (error) {
      if (!(error instanceof MissingCommand)) throw error
    }
  }
  return { error: 'converting to PNG needs magick or sips on PATH' }
}
