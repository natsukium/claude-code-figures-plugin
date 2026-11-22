import { defineConfig } from 'vitest/config'

// `claude plugin test` runs every *.test.ts in the plugin, so Vitest's own
// files are named *.spec.ts to keep the two runners apart. They live outside
// tests/ because `claude plugin validate` type-checks that directory without
// the project's node_modules and cannot resolve 'vitest'.
export default defineConfig({
  test: { include: ['spec/**/*.spec.ts'] },
})
