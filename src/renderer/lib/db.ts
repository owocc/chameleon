import { drizzle } from 'drizzle-orm/sqlite-proxy'
import * as schema from '../../shared/db/schema'

export const database = drizzle(
  async (...args) => {
    try {
      const result = await window.api.execute(...args)
      return { rows: result }
    } catch (e) {
      console.error('Error from sqlite proxy server: ', e)
      return { rows: [] }
    }
  },
  {
    schema
  }
)
