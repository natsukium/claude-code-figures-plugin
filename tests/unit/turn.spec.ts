import { expect, test } from 'vitest'

import { turnedFlowchart } from '../../hooks/figures.ts'

test('turnedFlowchart turns LR top to bottom and RL bottom to top, and leaves every other diagram', () => {
  expect(turnedFlowchart('flowchart LR\n  A --> B')).toBe('flowchart TD\n  A --> B')
  expect(turnedFlowchart('%%{init: {}}%%\ngraph RL\n  A --> B')).toBe('%%{init: {}}%%\ngraph BT\n  A --> B')
  expect(turnedFlowchart('flowchart TD\n  subgraph s\n  direction LR\n  end')).toBeUndefined()
  expect(turnedFlowchart('sequenceDiagram\n  A->>B: hi')).toBeUndefined()
})
