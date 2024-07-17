import { db } from '../lib/db'
import { config } from './schema'
import { getDBPath } from '../lib/db'
const initSettings = async (): Promise<void> => {
  await db.insert(config).values({})
}

//判断 sqlit 文件是否存在
export const seedInit = async (): Promise<void> => {
  const dbPath = getDBPath()
  if (!dbPath) {
    throw new Error('db path not found')
  }

  await initSettings()
}
