import { expect, test } from 'vitest'

import type { Io, RunResult } from '../../hooks/io.ts'
import { Pipeline } from '../../hooks/pipeline/index.ts'
import { type Registry, createRegistry } from '../../hooks/renderers/index.ts'
import type { CodeRequest, Renderer } from '../../hooks/renderers/types.ts'

const PNG_1600x400 = 'iVBORw0KGgoAAAANSUhEUgAABkAAAAGQCAYAAAAAAAAA'
const ok = (stdout = ''): RunResult => ({
  exitCode: 0,
  stdout,
  stderr: '',
  isStdoutTruncated: false,
  isStderrTruncated: false,
})

const fakeIo = (missing: string[] = []) => {
  const runs: string[][] = []
  const io: Io = {
    run: async (argv) => {
      runs.push(argv)
      if (missing.includes(argv[0]!)) throw new Error(`spawn ${argv[0]} ENOENT`)
      return ok()
    },
    exists: async () => false,
    readText: async () => '',
    readBase64: async () => PNG_1600x400,
    write: async () => undefined,
    tmpdir: async () => '/tmp',
    colorfgbg: async () => undefined,
    claudeTheme: async () => 'dark',
    messages: async () => [],
    toast: () => undefined,
    pluginRoot: '/plugin',
  }
  return { io, runs }
}

const request: CodeRequest = {
  lang: 'fake',
  source: 'x',
  theme: 'dark',
  background: 'transparent',
  scale: 2,
  cellWidthPx: 8,
}

const fake = (id: string, render: Renderer['render']): Renderer => ({ id, langs: ['fake'], render })
const registryOf = (...renderers: Renderer[]): Registry => createRegistry([], renderers)

test('an SVG artifact is rasterized by resvg at the scale and measured at 1x', async () => {
  const { io, runs } = fakeIo()
  const pipeline = new Pipeline(registryOf(fake('a', async () => ({ kind: 'svg', svg: '<svg/>' }))))

  const outcome = await pipeline.code(io, request)

  expect(outcome).toMatchObject({
    path: expect.stringMatching(/^\/tmp\/claude-figures\/[0-9a-f]{64}@2x\.png$/),
    width: 800,
    height: 200,
  })
  expect(runs[0]).toEqual(['resvg', '--zoom', '2', '-', expect.any(String)])
})

test('when every renderer of a lang is missing, the block is skipped', async () => {
  const { io } = fakeIo(['a', 'b'])
  const missingCommand = (id: string) => fake(id, async (_, ctx) => (await ctx.exec([id]), { error: 'unreachable' }))
  const pipeline = new Pipeline(registryOf(missingCommand('a'), missingCommand('b')))

  expect(await pipeline.code(io, request)).toEqual({ skipped: true })
})

test('a failing renderer hands over to the next, and the first error is kept when all fail', async () => {
  const { io } = fakeIo()
  const pipeline = new Pipeline(
    registryOf(
      fake('a', async () => ({ error: 'first' })),
      fake('b', async () => ({ error: 'second' })),
    ),
  )

  expect(await pipeline.code(io, request)).toEqual({ error: 'first' })
})

test('without resvg, a renderer is asked again with canRasterizeSvg off', async () => {
  const { io } = fakeIo(['resvg'])
  const seen: boolean[] = []
  const pipeline = new Pipeline(
    registryOf(
      fake('a', async (_, ctx) => {
        seen.push(ctx.canRasterizeSvg)
        return ctx.canRasterizeSvg ? { kind: 'svg', svg: '<svg/>' } : { kind: 'png', path: ctx.outPath(1), zoom: 1 }
      }),
    ),
  )

  expect(await pipeline.code(io, request)).toMatchObject({ path: expect.stringMatching(/@1x\.png$/), width: 1600 })
  expect(seen).toEqual([true, false])
})

test('the same request renders once', async () => {
  const { io } = fakeIo()
  let renders = 0
  const pipeline = new Pipeline(registryOf(fake('a', async () => (renders++, { kind: 'svg', svg: '<svg/>' }))))

  await Promise.all([pipeline.code(io, request), pipeline.code(io, { ...request })])

  expect(renders).toBe(1)
})
