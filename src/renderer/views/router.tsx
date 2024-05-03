import { createHashRouter } from 'react-router-dom'
import RootView from './Root'
const router: ReturnType<typeof createHashRouter> = createHashRouter([
  {
    path: '/',
    id: 'root',
    Component: RootView
  }
])

export default router
