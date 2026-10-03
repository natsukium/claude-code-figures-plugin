import type { FoundImage } from '../detect/tool-output.ts'
import type { Io } from '../io.ts'
import type { Registry } from '../renderers/index.ts'
import type { Artifact, CodeRequest, Renderer } from '../renderers/types.ts'
import { Memo, cacheDir, cacheKey } from './cache.ts'
import { type Exec, MissingCommand, execWith, failure } from './exec.ts'
import { readPngHeader, readPngSize } from './png.ts'
import { convertToPng, rasterizeSvg } from './raster.ts'

/** A PNG on disk, with its size at 1x. */
export type Rendered = { path: string; width: number; height: number }
export type Outcome = Rendered | { error: string } | { skipped: true }

const settle = (pending: Promise<Outcome>): Promise<Outcome> =>
  pending.catch((error: unknown) => ({ error: error instanceof Error ? error.message : String(error) }))

export class Pipeline {
  readonly #registry: Registry
  readonly #code = new Memo<Outcome>()
  readonly #images = new Memo<Outcome>()
  #canRasterizeSvg = true
  #dir: Promise<string> | undefined

  constructor(registry: Registry) {
    this.#registry = registry
  }

  code(io: Io, request: CodeRequest): Promise<Outcome> {
    const key = cacheKey(request)
    return this.#code.get(key, () => settle(this.#renderCode(io, request, key)))
  }

  image(io: Io, image: FoundImage): Promise<Outcome> {
    return this.#images.get(image.base64, () => settle(this.#materialize(io, image)))
  }

  async #renderCode(io: Io, request: CodeRequest, key: string): Promise<Outcome> {
    const dir = await this.#cacheDir(io)
    const pathAt = (zoom: number) => `${dir}/${key}@${zoom}x.png`
    for (const zoom of new Set([Math.max(1, request.scale), 1])) {
      if (await io.exists(pathAt(zoom))) return this.#rendered(io, pathAt(zoom), zoom)
    }

    // A missing renderer hands the block to the next, and so does a failing
    // one, since mmdc runs mermaid.js itself and accepts what mmdr rejects.
    // The error shown is the first, from the renderer preferred. With none
    // installed the block stays code, as it reads well enough as text.
    const exec = execWith(io)
    let firstError: { error: string } | undefined
    for (const renderer of this.#registry.chain(request.lang)) {
      try {
        const outcome = await this.#tryRenderer(io, exec, renderer, request, dir, pathAt)
        if (!('error' in outcome)) return outcome
        firstError ??= outcome
      } catch (error) {
        if (!(error instanceof MissingCommand)) throw error
      }
    }
    return firstError ?? { skipped: true }
  }

  async #tryRenderer(
    io: Io,
    exec: Exec,
    renderer: Renderer,
    request: CodeRequest,
    dir: string,
    pathAt: (zoom: number) => string,
  ): Promise<Outcome> {
    const ctx = { io, exec, dir, outPath: pathAt, canRasterizeSvg: this.#canRasterizeSvg }
    const artifact: Artifact | { error: string } = await renderer.render(request, ctx)
    if ('error' in artifact) return artifact
    if (artifact.kind === 'png') return this.#rendered(io, artifact.path, artifact.zoom)

    const zoom = Math.max(1, request.scale)
    try {
      const failed = await rasterizeSvg(exec, artifact.svg, pathAt(zoom), zoom)
      return failed ?? this.#rendered(io, pathAt(zoom), zoom)
    } catch (error) {
      if (!(error instanceof MissingCommand) || !this.#canRasterizeSvg) throw error
      // The renderer may have a way without resvg (mmdr writes PNG itself).
      this.#canRasterizeSvg = false
      return this.#tryRenderer(io, exec, renderer, request, dir, pathAt)
    }
  }

  // resvg, mmdr and base64 -d do not create the directory they write to;
  // io.write does.
  #cacheDir(io: Io): Promise<string> {
    this.#dir ??= cacheDir(io).then(async (dir) => {
      await io.write(`${dir}/.keep`, '')
      return dir
    })
    return this.#dir
  }

  async #rendered(io: Io, path: string, zoom: number): Promise<Rendered> {
    const size = await readPngSize(io, path)
    return { path, width: size.width / zoom, height: size.height / zoom }
  }

  // io.write takes text only, so the picture's bytes reach disk through
  // base64 -d.
  async #materialize(io: Io, image: FoundImage): Promise<Outcome> {
    const exec = execWith(io)
    const dir = await this.#cacheDir(io)
    const key = cacheKey(image.base64)
    const path = `${dir}/img-${key}.png`
    if (!(await io.exists(path))) {
      const isPng = image.mime === 'image/png'
      const raw = isPng ? path : `${dir}/img-${key}.${image.mime.slice('image/'.length)}`
      const decoded = await exec(['sh', '-c', 'base64 -d > "$1"', 'sh', raw], image.base64)
      if (decoded.exitCode !== 0) return failure('base64', decoded)
      if (!isPng) {
        const failed = await convertToPng(exec, raw, path)
        await exec(['rm', '-f', raw]).catch(() => undefined)
        if (failed) return failed
      }
    }
    return { path, ...(await readPngHeader(exec, path)) }
  }
}
