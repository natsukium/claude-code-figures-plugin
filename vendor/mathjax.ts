import { mathjax } from '@mathjax/src/js/mathjax.js'
import { TeX } from '@mathjax/src/js/input/tex.js'
import { SVG } from '@mathjax/src/js/output/svg.js'
import { liteAdaptor } from '@mathjax/src/js/adaptors/liteAdaptor.js'
import { RegisterHTMLHandler } from '@mathjax/src/js/handlers/html.js'
import '@mathjax/src/js/input/tex/base/BaseConfiguration.js'
import '@mathjax/src/js/input/tex/ams/AmsConfiguration.js'
import '@mathjax/src/js/input/tex/newcommand/NewcommandConfiguration.js'
import '@mathjax/src/js/input/tex/boldsymbol/BoldsymbolConfiguration.js'
import '@mathjax/src/js/input/tex/mathtools/MathtoolsConfiguration.js'
import '@mathjax/src/js/input/tex/cases/CasesConfiguration.js'
import '@mathjax/src/js/input/tex/cancel/CancelConfiguration.js'
import '@mathjax/src/js/input/tex/color/ColorConfiguration.js'
import '@mathjax/src/js/input/tex/braket/BraketConfiguration.js'
import { MathJaxNewcmFont } from '@mathjax/mathjax-newcm-font/js/svg.js'

export type LoadRange = (range: string) => Promise<unknown[] | undefined>

const adaptor = liteAdaptor()
RegisterHTMLHandler(adaptor)
const doc = mathjax.document('', {
  InputJax: new TeX({
    packages: ['base', 'ams', 'newcommand', 'boldsymbol', 'mathtools', 'cases', 'cancel', 'color', 'braket'],
    // Without this a TeX error is drawn into the SVG as red text.
    formatError: (_: unknown, error: unknown) => {
      throw error
    },
  }),
  OutputJax: new SVG({ fontData: MathJaxNewcmFont, fontCache: 'none' }),
})

let loadRange: LoadRange = async () => undefined

// The font asks for a glyph range (Greek, script, arrows, ...) by its module
// path the first time a formula uses it. The hooks environment cannot import
// modules at run time, so each range ships as the JSON of its one
// dynamicSetup call, read through the loader the caller hands in.
mathjax.asyncLoad = async (name: string) => {
  const range = /dynamic\/([\w-]+)\.js$/.exec(name)?.[1]
  const args = range === undefined ? undefined : await loadRange(range)
  if (args === undefined) throw new Error(`no glyphs for ${range ?? name}`)
  ;(MathJaxNewcmFont.dynamicSetup as (...args: unknown[]) => void)(...args)
}

export async function tex2svg(source: string, loader: LoadRange): Promise<string> {
  loadRange = loader
  const node = await doc.convertPromise(source, { display: true })
  return adaptor.serializeXML(adaptor.firstChild(node) as never)
}
