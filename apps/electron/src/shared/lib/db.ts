import DB, { Database } from 'better-sqlite3'
import { drizzle } from 'drizzle-orm/better-sqlite3'
import path from 'path'
import { app } from 'electron'
import * as schema from '../db/schema'

const getDBPath = (): string => {
  return import.meta.env.DEV ? 'sqlite.db' : path.join(app.getPath('userData'), 'data.db')
}

const sqlite: Database = new DB(getDBPath())
const db = drizzle(sqlite, { schema })

export { db, sqlite, getDBPath }
