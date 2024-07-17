import clsx from 'clsx'
import { JSX } from 'react'
import { NavLink } from 'react-router-dom'
import { FiGrid, FiSettings, FiClock, FiCreditCard } from 'react-icons/fi'
import { IconContext } from 'react-icons'
import { SidebarStatus } from '../../../../shared/types/layout'
import SideBarSplitLine from '../../../components/SideBarSplitLine/SideBarSplitLine'

type SidebarItemProps = {
  icon?: JSX.Element
  text: string
  to: string
}

type NavLinkRenderProps = {
  isActive: boolean
  isPending: boolean
  isTransitioning: boolean
}

function SidebarItem(props: SidebarItemProps): JSX.Element {
  const { text, icon, to } = props
  const sidebarClasses = ({ isActive }: NavLinkRenderProps): string => {
    return clsx(
      'py-1 px-2 rounded-md flex items-center gap-2 ',
      isActive ? 'text-white bg-blue-500' : 'dark:text-white text-gray-700 hover:bg-black/10'
    )
    // sidebarClasses
  }
  return (
    <li className="list-none">
      <NavLink className={sidebarClasses} to={to}>
        {icon && icon}
        {text}
      </NavLink>
    </li>
  )
}

type Props = {
  sidebarStatus: SidebarStatus
  setSidebarStatus: (newSidebarStatus: SidebarStatus) => void
}

type SideBarListProps = {
  title: string
  children?: JSX.Element | JSX.Element[]
}
function SidebarList(props: SideBarListProps): JSX.Element {
  const { title, children } = props
  return (
    <ul>
      <li className="px-2 mb-1">
        <label className="text-black/30 font-medium text-xs">{title}</label>
      </li>
      {children}
    </ul>
  )
}

export default function Sidebar(props: Props): JSX.Element {
  const { sidebarStatus, setSidebarStatus } = props

  const sidebarStyle: React.CSSProperties = {
    width: `${sidebarStatus.width}px`,
    minWidth: `${sidebarStatus.minWidth}px`,
    maxWidth: `${sidebarStatus.maxWidth}px`
  }

  return (
    <IconContext.Provider value={{ size: '0.95rem' }}>
      <aside className="sticky top-0 left-0 h-full px-1 pt-nav" style={sidebarStyle}>
        <div className="p-2 text-sm justify-between flex flex-col h-full overflow-x-hidden overflow-y-auto scrollbar-thumb-rounded-full scrollbar-thin">
          <div className="flex flex-col gap-4">
            <SidebarList title="资源库">
              <SidebarItem icon={<FiCreditCard />} text="全部" to="/library" />
              <SidebarItem icon={<FiGrid />} text="分类" to="/category" />
              <SidebarItem icon={<FiClock />} text="最近使用" to="/recently" />
            </SidebarList>

            <SidebarList title="颜色工具">
              <SidebarItem icon={<FiCreditCard />} text="互补色" to="/complementary" />
              <SidebarItem icon={<FiGrid />} text="类比" to="/category" />
              <SidebarItem icon={<FiClock />} text="单色" to="/dsd" />
            </SidebarList>

            <SidebarList title="测试">
              <SidebarItem icon={<FiCreditCard />} text="测试页面" to="/test" />
            </SidebarList>
          </div>
          <SidebarItem text="设置" icon={<FiSettings />} to="/setting" />
        </div>
        <SideBarSplitLine sidebarStatus={sidebarStatus} setSidebarStatus={setSidebarStatus} />
      </aside>
    </IconContext.Provider>
  )
}
