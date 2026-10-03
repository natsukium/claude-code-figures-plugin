import { readdirSync, readFileSync } from 'node:fs'
import { createRequire } from 'node:module'
import { dirname, join } from 'node:path'
import type { Plugin } from 'vite'
import { H, V } from '@mathjax/src/js/output/common/Direction.js'

// Each dynamic range of the font is a module the hooks environment could only
// load with import(), which it refuses. The module is one dynamicSetup call
// over literal data, so running it here with a stub that records the
// arguments yields that data as JSON, which the plugin reads with $.fs.read.
export function mathjaxFontRanges(dir: string): Plugin {
  return {
    name: 'mathjax-font-ranges',
    apply: 'build',
    generateBundle() {
      const require = createRequire(import.meta.url)
      const font = dirname(require.resolve('@mathjax/mathjax-newcm-font/package.json'))
      const dynamic = join(font, 'mjs', 'svg', 'dynamic')
      for (const file of readdirSync(dynamic).filter((f) => f.endsWith('.js'))) {
        const source = readFileSync(join(dynamic, file), 'utf8').replace(/^import .*$/gm, '')
        let args: unknown[] | undefined
        Function('MathJaxNewcmFont', 'V', 'H', source)({ dynamicSetup: (...given: unknown[]) => (args = given) }, V, H)
        if (args === undefined) this.error(`${file} made no dynamicSetup call`)
        this.emitFile({
          type: 'asset',
          fileName: `${dir}/${file.replace(/\.js$/, '.json')}`,
          source: JSON.stringify(args),
        })
      }
    },
  }
}
