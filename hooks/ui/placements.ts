import type { Config } from '../config'
import { inline, thumbnail } from '../layout'
import type { Placement } from './pictures'

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
