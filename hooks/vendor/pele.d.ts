export type RenderOptions = {
  fontSize?: number
  padding?: number
  maxEdges?: number
  links?: boolean
  images?: boolean
}

export function render(source: string, options?: RenderOptions): { svg: string; width: number; height: number }
