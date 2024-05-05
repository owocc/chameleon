import { type BetterSQLite3Database } from 'drizzle-orm/better-sqlite3'
import { type Database } from 'better-sqlite3'
import * as schema from '../../shared/db/schema'
import { migrate } from 'drizzle-orm/better-sqlite3/migrator'
import { ipcMain } from 'electron'
import channels from '../../shared/lib/ipc-channels'
import fs from 'fs'
import path from 'path'
import Module from './BaseModule'
import logger from '../../shared/lib/logger'
import { db, sqlite, getDBPath } from '../../shared/lib/db'
import { seedInit } from '../../shared/db/seed'
export default class DatabaseModule extends Module {
  protected dbPath: string
  protected sqlite: Database
  protected db: BetterSQLite3Database<typeof schema>
  constructor() {
    super()
    this.dbPath = getDBPath()
    this.sqlite = sqlite
    this.db = db
  }

  async load(): Promise<void> {
    fs.mkdirSync(path.dirname(this.dbPath), { recursive: true })
    try {
      await this.runMigrate()
      ipcMain.handle(channels.DB_EXECUTE, this.execute)
    } catch (err) {
      logger.error('Migrate Fail', err)
    }
  }

  toDrizzleResult(row: Record<string, unknown>): unknown
  toDrizzleResult(rows: Record<string, unknown> | Array<Record<string, unknown>>): unknown {
    if (!rows) {
      return []
    }
    if (Array.isArray(rows)) {
      return rows.map((row) => {
        return Object.keys(row).map((key) => row[key])
      })
    } else {
      return Object.keys(rows).map((key) => rows[key])
    }
  }

  execute = async (e, sqlstr, params, method): Promise<unknown> => {
    const result = this.sqlite.prepare(sqlstr)
    const ret = result[method](...params)
    return this.toDrizzleResult(ret)
  }

  runMigrate = async (): Promise<void> => {
    migrate(this.db, { migrationsFolder: path.join(__dirname, '../../drizzle') })
    await seedInit()
  }

  getDBPath(): string | undefined {
    return this.dbPath
  }

  getDB(): BetterSQLite3Database<typeof schema> {
    return this.db
  }
}
