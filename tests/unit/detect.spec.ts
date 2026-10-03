import { expect, test } from 'vitest'

import { blocksIn } from '../../hooks/detect/markdown.ts'
import { imagesIn, sentImagesIn } from '../../hooks/detect/tool-output.ts'
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

test('sentImagesIn takes the raster images SendUserFile sent, inferring a missing media type from the extension', () => {
  const output = {
    attachments: [
      { path: '/repo/shot.png', size: 1, isImage: true, media_type: 'image/png' },
      { path: '/repo/report.pdf', size: 1, isImage: false, media_type: 'application/pdf' },
      { path: '/repo/photo.JPG', size: 1, isImage: true },
      { path: '/repo/diagram.svg', size: 1, isImage: true, media_type: 'image/svg+xml' },
    ],
  }

  expect(sentImagesIn('SendUserFile', output)).toEqual([
    { path: '/repo/shot.png', mime: 'image/png' },
    { path: '/repo/photo.JPG', mime: 'image/jpeg' },
  ])
})

test('sentImagesIn ignores attachments from tools other than SendUserFile', () => {
  const output = { attachments: [{ path: '/repo/shot.png', size: 1, isImage: true, media_type: 'image/png' }] }

  expect(sentImagesIn('SomeMcpTool', output)).toEqual([])
})

test('imagesIn stops at its limit', () => {
  const output = Array.from({ length: 10 }, () => ({ type: 'image', data: 'A', mimeType: 'image/png' }))

  expect(imagesIn(output, 2)).toHaveLength(2)
})
