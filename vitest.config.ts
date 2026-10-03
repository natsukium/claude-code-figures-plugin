import { defineConfig } from 'vitest/config'

// `claude plugin test` runs every *.test.ts in the plugin, so Vitest's own
// files are named *.spec.ts to keep the two runners apart.
export default defineConfig({
  test: { include: ['tests/unit/**/*.spec.ts'] },
})
