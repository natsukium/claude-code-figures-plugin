import { expect, test } from 'vitest'

import { blocksIn } from '../../hooks/detect/markdown.ts'
import { imagesIn } from '../../hooks/detect/tool-output.ts'
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

test('imagesIn stops at its limit', () => {
  const output = Array.from({ length: 10 }, () => ({ type: 'image', data: 'A', mimeType: 'image/png' }))

  expect(imagesIn(output, 2)).toHaveLength(2)
})
