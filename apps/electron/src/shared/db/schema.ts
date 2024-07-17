import { sqliteTable, text, integer } from 'drizzle-orm/sqlite-core'

export const config = sqliteTable('config', {
  id: integer('id').primaryKey().default(0),
  themeMode: text('them_mode', { enum: ['dark', 'light', 'auto'] }).default('auto')
})

export const Color = sqliteTable('color', {
  id: integer('id').primaryKey({ autoIncrement: true }),
  colors: text('colors', { mode: 'json' }).notNull()
})

export type ConfigType = typeof config.$inferSelect
