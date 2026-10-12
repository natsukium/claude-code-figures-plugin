import { type Exec, MissingCommand, failure } from './exec.ts'

export async function rasterizeSvg(
  exec: Exec,
  svg: string,
  path: string,
  zoom: number,
  sansSerif: string | undefined,
): Promise<{ error: string } | undefined> {
  const font = sansSerif ? ['--sans-serif-family', sansSerif] : []
  const png = await exec(['resvg', ...font, '--zoom', String(zoom), '-', path], svg)
  return png.exitCode === 0 ? undefined : failure('resvg', png)
}

// resvg resolves font names without fontconfig and maps sans-serif to a font
// literally named Arial, which most Linux systems lack; text in a family it
// cannot find is dropped. Without fc-match (macOS), Arial is there anyway.
export async function sansSerifFamily(exec: Exec): Promise<string | undefined> {
  try {
    const result = await exec(['fc-match', '-f', '%{family[0]}', 'sans-serif'])
    return result.exitCode === 0 ? result.stdout.trim() || undefined : undefined
  } catch (error) {
    if (!(error instanceof MissingCommand)) throw error
    return undefined
  }
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
