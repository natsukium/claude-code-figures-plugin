import { defineConfig } from 'vite'

import { declarations } from './vendor/plugins/declarations.ts'
import { hooksLimits } from './vendor/plugins/hooks-limits.ts'
import { mathjaxFontRanges } from './vendor/plugins/mathjax-font-ranges.ts'

// Every file there but default.js and delimiters.js is one exported object
// literal; those two import the font and MathJax, so they stay with them.
const GLYPH_TABLE = /mathjax-newcm-font[\\/]mjs[\\/]svg[\\/](?!default\.js|delimiters\.js)[\w-]+\.js$/

export default defineConfig({
  build: {
    outDir: 'hooks/vendor',
    emptyOutDir: true,
    minify: true,
    license: { fileName: 'THIRD_PARTY_LICENSES.md' },
    lib: {
      entry: { mathjax: 'vendor/mathjax.ts', hash: 'vendor/hash.ts' },
      formats: ['es'],
    },
    rolldownOptions: {
      // Required by includeDependenciesRecursively: false below.
      preserveEntrySignatures: 'allow-extension',
      output: {
        entryFileNames: '[name].js',
        chunkFileNames: 'chunk-[name]-[hash].js',
        // The bundle is over the 1 MiB a hooks module may be, so the font's
        // glyph tables go to a chunk of their own. Splitting by size instead
        // would cut through MathJax's import cycles and run a subclass before
        // its superclass.
        codeSplitting: {
          includeDependenciesRecursively: false,
          // The tables import nothing, so cutting them by size is safe.
          groups: [{ name: 'mathjax-glyphs', test: GLYPH_TABLE, maxSize: 512 * 1024 }],
        },
      },
    },
  },
  plugins: [mathjaxFontRanges('mathjax-fonts'), declarations('vendor/types'), hooksLimits()],
})
