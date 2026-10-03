import type { Config } from '../config.ts'
import { inline, thumbnail } from '../layout.ts'
import type { Placement } from './pictures.tsx'

export const fullSize = (config: Config): Placement => ({
  fit: (natural, viewport) => inline(natural, config, viewport),
  enlarge: '/figures to enlarge, o there to open',
})

// A collapsed group keeps its thumbnails; ctrl+o unfolds it into ToolUse
// rows, which draw at full size.
export const thumbnailSize = (config: Config): Placement => ({
  fit: (natural, viewport) => thumbnail(natural, config, viewport),
  enlarge: 'ctrl+o or /figures to enlarge',
})
