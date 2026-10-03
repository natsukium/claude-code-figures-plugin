import { expect, test } from 'vitest'

import { blocksIn } from '../../hooks/detect/markdown.ts'
import { imagesIn, readSvgIn, sentFilesIn } from '../../hooks/detect/tool-output.ts'
import { createRegistry } from '../../hooks/renderers/index.ts'

const fence = (lang: string, body: string) => `\`\`\`${lang}\n${body}\n\`\`\`\n`

test('blocksIn finds display math and figure fences in reply order, resolving aliases, but not math inside other fences', () => {
  const text = [
    'Energy: $$E = mc^2$$ and inline $x$ stays text.',
    fence('sh', 'echo "$$ not math $$"'),
    '\\[ a^2 + b^2 = c^2 \\]',
    fence('latex', '\\sum_i x_i'),
    fence('latex', '\\documentclass{article}\n\\begin{document}hi\\end{document}'),
    fence('graphviz', 'digraph { a -> b }'),
    fence('Mermaid', 'flowchart LR'),
  ].join('\n')

  expect(blocksIn(text, createRegistry([]))).toEqual([
    { lang: 'math', source: 'E = mc^2' },
    { lang: 'math', source: 'a^2 + b^2 = c^2' },
    { lang: 'math', source: '\\sum_i x_i\n' },
    { lang: 'dot', source: 'digraph { a -> b }\n' },
    { lang: 'mermaid', source: 'flowchart LR\n' },
  ])
})

test('imagesIn reads the Read, MCP content, and API image shapes and skips other types', () => {
  const output = [
    { type: 'image', file: { base64: 'AAA', type: 'image/png' } },
    { type: 'text', text: 'caption' },
    { content: [{ type: 'image', data: 'BBB', mimeType: 'image/jpeg' }] },
    { type: 'image', source: { type: 'base64', data: 'CCC', media_type: 'image/webp' } },
    { type: 'image', data: 'DDD', mimeType: 'image/svg+xml' },
  ]

  expect(imagesIn(output)).toEqual([
    { base64: 'AAA', mime: 'image/png' },
    { base64: 'BBB', mime: 'image/jpeg' },
    { base64: 'CCC', mime: 'image/webp' },
  ])
})

test('sentFilesIn takes the raster images and SVGs SendUserFile sent by media type, inferring a missing one from the extension', () => {
  const output = {
    attachments: [
      { path: '/repo/shot.png', size: 1, isImage: true, media_type: 'image/png' },
      { path: '/repo/report.pdf', size: 1, isImage: false, media_type: 'application/pdf' },
      { path: '/repo/photo.JPG', size: 1, isImage: true },
      { path: '/repo/diagram.svg', size: 1, isImage: false, media_type: 'image/svg+xml' },
      { path: '/repo/photo.heic', size: 1, isImage: true, media_type: 'image/heic' },
    ],
  }

  expect(sentFilesIn('SendUserFile', output)).toEqual([
    { path: '/repo/shot.png', mime: 'image/png' },
    { path: '/repo/photo.JPG', mime: 'image/jpeg' },
    { path: '/repo/diagram.svg', mime: 'image/svg+xml' },
  ])
})

test('sentFilesIn ignores attachments from tools other than SendUserFile', () => {
  const output = { attachments: [{ path: '/repo/shot.png', size: 1, isImage: true, media_type: 'image/png' }] }

  expect(sentFilesIn('SomeMcpTool', output)).toEqual([])
})

test('imagesIn stops at its limit', () => {
  const output = Array.from({ length: 10 }, () => ({ type: 'image', data: 'A', mimeType: 'image/png' }))

  expect(imagesIn(output, 2)).toHaveLength(2)
})

const readText = (filePath: string, content: string, lines: { startLine?: number; numLines?: number } = {}) => ({
  type: 'text',
  file: { filePath, content, startLine: lines.startLine ?? 1, numLines: lines.numLines ?? 3, totalLines: 3 },
})

test('readSvgIn takes the source of an SVG Read returned whole', () => {
  expect(readSvgIn('Read', readText('/repo/Diagram.SVG', '<svg/>'))).toBe('<svg/>')
})

test('readSvgIn skips a partial read, other files, and other tools', () => {
  expect(readSvgIn('Read', readText('/repo/diagram.svg', '<svg', { numLines: 1 }))).toBeUndefined()
  expect(readSvgIn('Read', readText('/repo/diagram.svg', '</svg>', { startLine: 3, numLines: 1 }))).toBeUndefined()
  expect(readSvgIn('Read', readText('/repo/notes.txt', '<svg/>'))).toBeUndefined()
  expect(readSvgIn('Grep', readText('/repo/diagram.svg', '<svg/>'))).toBeUndefined()
})
