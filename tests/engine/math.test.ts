import { expect, test } from 'claude-code/testing'

import { mountReply, PNG_1600x400, result, stubWorld } from './support.ts'

test('display math is typeset in-process and handed to resvg inked for the theme, an ex to a cell width', async ($, on) => {
  const { runs, stdins } = stubWorld(on, { respond: () => result(0) })

  const ui = await mountReply($, 'So $$x^2$$ holds.')

  expect(await ui.find({ type: 'Image' })).toBeDefined()
  expect(runs.map((argv) => argv[0])).toEqual(['resvg'])
  // x^2 is 2.282ex by 2.025ex in MathJax's metrics.
  expect(stdins[0]).toMatch(/^<svg[^>]*width="18\.3" height="16\.2"/)
  expect(stdins[0]).toContain('fill="#d4d4d4"')
  expect(stdins[0]).not.toContain('currentColor')
})

test('a glyph outside the base font is looked up in the font range shipped with the plugin, and its absence is an error', async ($, on) => {
  const reads: string[] = []
  stubWorld(on, {
    read: (path) => {
      reads.push(path)
      return path.endsWith('.json') ? { deny: 'not in this test' } : { value: { base64: PNG_1600x400 } }
    },
  })

  const ui = await mountReply($, '$$\\mathbb{R}$$')

  expect(reads).toContainEqual(expect.stringMatching(/\/hooks\/vendor\/mathjax-fonts\/double-struck\.json$/))
  expect(await ui.find({ type: 'Image' })).toBeUndefined()
})

test('a TeX error is shown under the reply by its message', async ($, on) => {
  stubWorld(on, { respond: () => result(0) })

  const ui = await mountReply($, '$$\\frac{a$$')

  expect((await ui.findAll({ type: 'Text' })).map((t) => t.text)).toContain('math: Missing close brace')
})

test('a latex fence holding a whole document is left as code', async ($, on) => {
  const { runs } = stubWorld(on)

  await mountReply($, '```latex\n\\documentclass{article}\n\\begin{document}hi\\end{document}\n```\n')

  expect(runs).toHaveLength(0)
})
