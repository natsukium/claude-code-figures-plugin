export type GalleryItem = {
  path: string
  width: number
  height: number
  label: string
  kind: 'diagram' | 'tool'
  origin: { source: string } | { toolUseId: string }
}

declare module 'claude-code' {
  interface PluginState {
    figures: { selected: number | null; opened: number }
  }
}
