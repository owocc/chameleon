import { Outlet } from 'react-router-dom'
import MacosLayout from '@renderer/layouts/macos/MacosLayout'
function ViewRoot(): JSX.Element {
  return (
    <MacosLayout>
      <Outlet />
    </MacosLayout>
  )
}

export default ViewRoot
