import { JSX } from 'react'
import { FiSidebar, FiChevronLeft, FiSearch } from 'react-icons/fi'
import { IconButton } from '../Button/Button'
import { SidebarStatus } from 'src/shared/types/layout'
type Props = {
  sidebarStatus: SidebarStatus
}

function Header(props: Props): JSX.Element {
  const { sidebarStatus } = props
  return (
    <nav className="h-nav z-40 flex fixed top-0 left-0 items-center  drag w-screen ">
      <HeaderSideBar sidebarStatus={sidebarStatus} />
      <div className="flex items-center bg-white flex-1 justify-between px-2 border-b border-black/10 h-full py-2">
        <div className="flex items-center gap-2">
          <IconButton icon={<FiChevronLeft />} />
          <b>Title</b>
        </div>
        <div className="h-full">
          <div className="relative drag-none">
            <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none ">
              <FiSearch size="1rem" />
            </div>
            <input
              type="search"
              className="block  w-full h-full ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Search"
              required
            />
            {/* <button
              type="submit"
              className="text-white absolute end-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              Search
            </button> */}
          </div>
        </div>
      </div>
    </nav>
  )
}

function HeaderSideBar(props: Props): JSX.Element {
  const { sidebarStatus } = props
  const sidebarStyle: React.CSSProperties = {
    width: `${sidebarStatus.width}px`,
    minWidth: `${sidebarStatus.minWidth}px`,
    maxWidth: `${sidebarStatus.maxWidth}px`
  }
  return (
    <aside className="flex items-center h-full" style={sidebarStyle}>
      {/* 占位 */}
      <div className="w-24 h-full" />
      <div className="flex px-2 justify-end flex-1">
        <IconButton icon={<FiSidebar />} />
      </div>
    </aside>
  )
}

export default Header
