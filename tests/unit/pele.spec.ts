import { expect, test } from 'vitest'

import { MissingCommand } from '../../hooks/pipeline/exec.ts'
import { pele } from '../../hooks/renderers/pele.ts'
import type { CodeRequest, RenderContext } from '../../hooks/renderers/types.ts'

const request: CodeRequest = {
  lang: 'mermaid',
  source: 'flowchart LR\n  A[Start] --> B[End]',
  theme: 'dark',
  background: 'transparent',
  scale: 2,
  cellWidthPx: 8,
}

const ctx = { canRasterizeSvg: true } as RenderContext

const render = async (changes: Partial<CodeRequest> = {}) => {
  const artifact = await pele.render({ ...request, ...changes }, ctx)
  if (!('kind' in artifact) || artifact.kind !== 'svg') throw new Error(JSON.stringify(artifact))
  return artifact.svg
}

test('pele draws mermaid as SVG with its custom properties resolved, as resvg reads none', async () => {
  expect(await render()).not.toMatch(/var\(|--pele/)
})

test("on a dark theme, text and lines are in the theme's ink, and node boxes dark", async () => {
  const svg = await render()

  expect(svg).toMatch(/#d4d4d4/i)
  expect(svg).toMatch(/#2b2b2b/i)
  expect(svg).not.toMatch(/#1f1f1f/i)
})

test("on a light theme, pele's own palette is kept", async () => {
  expect(await render({ theme: 'default' })).toMatch(/#1f1f1f/i)
})

test('a background option is painted behind the diagram', async () => {
  expect(await render({ background: '#102030' })).toMatch(/^<svg[^>]*><rect [^>]*fill="#102030"/)
})

// An edge crossing a cluster's title has pele mix a halo for it with the background.
const CLUSTER = 'flowchart TB\n  X --> B\n  subgraph S [A very long subgraph title here]\n    A --> B --> C\n  end'

test('a cluster title mixed with the background comes out as a plain color', async () => {
  const svg = await render({ source: CLUSTER, background: '#102030' })

  expect(svg).toMatch(/="rgba\(/)
  expect(svg).not.toContain('color-mix(')
})

test('a background the color mixing does not cover is an error, so the next renderer is tried', async () => {
  expect(await pele.render({ ...request, source: CLUSTER, background: 'hsl(210 50% 10%)' }, ctx)).toEqual({
    error: expect.stringMatching(/unsupported SVG: color hsl/),
  })
})

test('a background option stays an attribute value, whatever markup it holds', async () => {
  const svg = await render({ background: '"/><x a="' })

  expect(svg).toContain('fill="&quot;/>&lt;x a=&quot;"')
  expect(svg).not.toContain('<x ')
})

test('node boxes keep their rounded corners as rx attributes, which resvg reads', async () => {
  const svg = await render()

  expect(svg).toMatch(/<rect [^>]*rx="4px"/)
  expect(svg).not.toMatch(/style="[^"]*\brx:/)
})

test("mermaid pele cannot parse is reported by pele's message", async () => {
  expect(await pele.render({ ...request, source: 'flowchart LR\n  A -->' }, ctx)).toEqual({
    error: expect.stringMatching(/Parse error on line/),
  })
})

test('without resvg, pele steps aside as if missing, since it draws SVG only', async () => {
  await expect(pele.render(request, { canRasterizeSvg: false } as RenderContext)).rejects.toThrow(MissingCommand)
})
