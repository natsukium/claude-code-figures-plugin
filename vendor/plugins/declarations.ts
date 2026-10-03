import { readdirSync, readFileSync } from 'node:fs'
import { join } from 'node:path'
import type { Plugin } from 'vite'

// Library mode emits no typings, and emptyOutDir would remove hand-written
// ones placed in the output, so they are kept beside the entries and copied.
export function declarations(dir: string): Plugin {
  return {
    name: 'declarations',
    apply: 'build',
    generateBundle() {
      for (const file of readdirSync(dir).filter((f) => f.endsWith('.d.ts'))) {
        this.emitFile({ type: 'asset', fileName: file, source: readFileSync(join(dir, file), 'utf8') })
      }
    },
  }
}
