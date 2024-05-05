import { createHashRouter, isRouteErrorResponse, Navigate, useRouteError } from 'react-router-dom'
import RootView from './Root'
import ViewLibrary from './ViewLibrary'
import ViewCategory from './ViewCategory'
import ViewRecentlyUsed from './ViewRecentlyUsed'
import ViewComplementary from './ViewComplementary'
import ViewTest from './ViewTest'
import { NavLink } from 'react-router-dom'
const router: ReturnType<typeof createHashRouter> = createHashRouter([
  {
    path: '/',
    id: 'root',
    element: <RootView />,
    ErrorBoundary: GlobalErrorBoundary,
    children: [
      {
        path: '',
        element: <Navigate to="library" replace={true} />
      },
      {
        path: 'library',
        id: 'library',
        element: <ViewLibrary />
      },
      {
        path: 'category',
        id: 'category',
        element: <ViewCategory />
      },
      {
        path: 'recently',
        id: 'recently',
        element: <ViewRecentlyUsed />
      },
      // 色卡工具
      {
        path: 'complementary',
        id: 'complementary',
        element: <ViewComplementary />
      },
      //测试页面
      {
        path: 'test',
        id: 'test',
        element: <ViewTest />
      }
    ]
  }
])

/**
 * Components helpers
 */

function GlobalErrorBoundary(): JSX.Element {
  const error = useRouteError()

  let errorMessage: string

  if (isRouteErrorResponse(error)) {
    errorMessage = error.statusText
  } else if (error instanceof Error) {
    errorMessage = error.message
  } else if (typeof error === 'string') {
    errorMessage = error
  } else {
    errorMessage = 'Unknown error'
  }

  return (
    <div className="absolute left-0 right-0 top-0 bottom-0 m-auto flex justify-center items-center flex-col drag gap-4 transition-all overflow-hidden scrollbar-none">
      <h1>{errorMessage}</h1>
      <NavLink
        to="/"
        className="border-2 border-white py-2 px-6 rounded-full bg-black text-white cursor-pointer drag-none"
      >
        Back
      </NavLink>
    </div>
  )
}

export default router
