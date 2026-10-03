import type { Plugin } from 'vite'

const MODULE_LIMIT = 1024 * 1024
const READ_LIMIT = 4 * 1024 * 1024

// The hooks environment imports no module of 1 MiB or more, and $.fs.read
// reads no file over 4 MiB; either fails only at run time, so the build fails
// first.
export function hooksLimits(): Plugin {
  return {
    name: 'hooks-limits',
    apply: 'build',
    generateBundle(_, bundle) {
      for (const [name, output] of Object.entries(bundle)) {
        const size = Buffer.byteLength(output.type === 'chunk' ? output.code : output.source)
        if (output.type === 'chunk' && size >= MODULE_LIMIT) {
          this.error(`${name} is ${size} bytes; a hooks module must be under ${MODULE_LIMIT}`)
        }
        if (output.type === 'asset' && size > READ_LIMIT) {
          this.error(`${name} is ${size} bytes; $.fs.read reads at most ${READ_LIMIT}`)
        }
      }
    },
  }
}
