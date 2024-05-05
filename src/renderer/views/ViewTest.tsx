import { useEffect, useState } from 'react'
import { database } from '../lib/db'
import { ConfigType } from '../../shared/db/schema'
export default function ViewTest(): JSX.Element {
  const [configData, setConfigData] = useState<ConfigType>()
  useEffect(() => {
    database.query.config.findFirst().then((result) => {
      setConfigData(result)
    })
  }, [])

  return (
    <div>
      <button>Hello</button>
      {configData?.themeMode}
    </div>
  )
}
