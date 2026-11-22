import type { Renderer } from './types'

export const svg: Renderer = {
  id: 'svg',
  langs: ['svg'],
  async render(request) {
    return { kind: 'svg', svg: request.source }
  },
}
