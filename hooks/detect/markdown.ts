export type Block = { lang: string; source: string }

/** What the renderers know: which fence tags they draw, and which sources they take. */
export type Catalog = {
  langOf(tag: string): string | undefined
  accepts(lang: string, source: string): boolean
}

const FENCE = /^```([^\n`]*)\n([\s\S]*?)^```[ \t]*$/gm
const DISPLAY_MATH = /\$\$([\s\S]+?)\$\$|\\\[([\s\S]+?)\\\]/g

// Display math is looked for only between fences, so a `$$` in a shell
// snippet is left alone; inline `$x$` is not drawn, since a picture cannot
// sit inside a line of text.
export function blocksIn(text: string, catalog: Catalog): Block[] {
  const found: Block[] = []
  const add = (lang: string | undefined, source: string) => {
    if (lang !== undefined && catalog.accepts(lang, source)) found.push({ lang, source })
  }
  const prose = (from: number, to: number) => {
    for (const m of text.slice(from, to).matchAll(DISPLAY_MATH)) {
      const source = (m[1] ?? m[2] ?? '').trim()
      if (source) add(catalog.langOf('math'), source)
    }
  }
  let end = 0
  for (const m of text.matchAll(FENCE)) {
    prose(end, m.index)
    end = m.index + m[0].length
    add(catalog.langOf(m[1]?.trim().toLowerCase() ?? ''), m[2] ?? '')
  }
  prose(end, text.length)
  return found
}
