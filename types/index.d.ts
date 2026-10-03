export type GalleryItem = { path: string; width: number; height: number; label: string; kind: 'diagram' | 'tool' }

declare module 'claude-code' {
  interface PluginState {
    figures: { selected: number | null }
  }
}
