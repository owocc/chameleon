import { Outlet } from 'react-router-dom'
import MacosLayout from '@renderer/layouts/macos/macos-layout'
function ViewRoot(): JSX.Element {
  return (
    <MacosLayout>
      <Outlet />
    </MacosLayout>
  )
}

export default ViewRoot
