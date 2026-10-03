import { expect, test } from 'claude-code/testing'

import { fence, mountReply, stubWorld } from './support.ts'

test('with theme=auto, a light Claude Code theme renders mermaid with the default theme and d2 light', async ($, on) => {
  const { runs } = stubWorld(on, { claudeTheme: 'light-daltonized' })

  await mountReply($, fence('mermaid', 'flowchart LR\n  A --> B') + fence('d2', 'a -> b'))

  expect(runs.find((argv) => argv[0] === 'mmdr')).toEqual(expect.arrayContaining(['-t', 'default']))
  expect(runs.find((argv) => argv[0] === 'd2')).toEqual(expect.arrayContaining(['--theme', '0']))
})

test('with Claude Code on auto, a light COLORFGBG background picks the light theme', async ($, on) => {
  const { runs } = stubWorld(on, { claudeTheme: 'auto', colorfgbg: '0;15' })

  await mountReply($)

  expect(runs.find((argv) => argv[0] === 'mmdr')).toEqual(expect.arrayContaining(['-t', 'default']))
})

test("an explicit theme option ignores Claude Code's theme", { options: { theme: 'dark' } }, async ($, on) => {
  const { runs } = stubWorld(on, { claudeTheme: 'light' })

  await mountReply($)

  expect(runs.find((argv) => argv[0] === 'mmdr')).toEqual(expect.arrayContaining(['-t', 'dark']))
})
