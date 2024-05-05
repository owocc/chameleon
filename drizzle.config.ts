import { defineConfig } from 'drizzle-kit'

export default defineConfig({
  schema: './src/shared/db/schema.ts',
  out: './drizzle',
  driver: 'better-sqlite'
})
