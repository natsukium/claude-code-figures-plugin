import type { Catalog } from '../detect/markdown.ts'
import { d2 } from './d2.ts'
import { graphviz } from './graphviz.ts'
import { mathjax } from './mathjax.ts'
import { mmdc } from './mmdc.ts'
import { mmdr } from './mmdr.ts'
import { svg } from './svg.ts'
import type { Renderer } from './types.ts'

/** Every renderer, each lang's in default preference order. */
export const RENDERERS: readonly Renderer[] = [mmdr, mmdc, graphviz, d2, svg, mathjax]

export type Registry = Catalog & {
  chain(lang: string): readonly Renderer[]
  /** Ids in the `renderers` option that no renderer has. */
  unknown: readonly string[]
}

// A lang with any of its renderers in `order` uses only those, in that order;
// the others keep the default order. Ids are unique across langs, so the
// option needs no lang prefix.
export function createRegistry(order: readonly string[], all: readonly Renderer[] = RENDERERS): Registry {
  const langOfTag = new Map<string, string>()
  const chains = new Map<string, Renderer[]>()
  for (const renderer of all) {
    const [lang] = renderer.langs
    for (const tag of renderer.langs) langOfTag.set(tag, lang)
    chains.set(lang, [...(chains.get(lang) ?? []), renderer])
  }
  for (const [lang, chain] of chains) {
    const chosen = order.flatMap((id) => chain.filter((r) => r.id === id))
    if (chosen.length > 0) chains.set(lang, chosen)
  }
  const ids = new Set(all.map((r) => r.id))
  return {
    langOf: (tag) => langOfTag.get(tag),
    accepts: (lang, source) => (chains.get(lang) ?? []).some((r) => r.accepts?.(source) ?? true),
    chain: (lang) => chains.get(lang) ?? [],
    unknown: order.filter((id) => !ids.has(id)),
  }
}
