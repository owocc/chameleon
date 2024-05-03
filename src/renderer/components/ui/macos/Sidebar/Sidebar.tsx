import clsx from 'clsx'
import { JSX, useState } from 'react'
import { FiGrid, FiSettings, FiClock, FiCreditCard } from 'react-icons/fi'
import { IconContext } from 'react-icons'
import { SidebarStatus } from '../../../../../shared/types/layout'
import SideBarSplitLine from '../../../common/SideBarSplitLine/SideBarSplitLine'

type SidebarItemProps = {
  text: string
  icon?: JSX.Element
}

function SidebarItem(props: SidebarItemProps): JSX.Element {
  const { text, icon } = props
  const sidebarClasses = clsx(
    'text-gray-700 hover:bg-black/10 py-1 px-2 rounded-md flex items-center gap-2'
  )
  return (
    <li className={sidebarClasses}>
      {icon && icon}
      {text}
    </li>
  )
}

type SideBarListProps = {
  title: string
}

type Props = {
  sidebarStatus: SidebarStatus
  setSidebarStatus: (newSidebarStatus: SidebarStatus) => void
}

function SidebarList(props: SideBarListProps): JSX.Element {
  const { title } = props
  return (
    <ul>
      <li className="px-2 mb-1">
        <label className="text-black/30 font-medium text-xs">{title}</label>
      </li>
      <SidebarItem text="全部色卡" icon={<FiCreditCard />} />
      <SidebarItem text="全部分类" icon={<FiGrid />} />
      <SidebarItem text="最近使用" icon={<FiClock />} />
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
            <SidebarList title="资源库" />
            <SidebarList title="资源库" />
          </div>
          <SidebarItem text="设置" icon={<FiSettings />} />
        </div>
        <SideBarSplitLine sidebarStatus={sidebarStatus} setSidebarStatus={setSidebarStatus} />
      </aside>
    </IconContext.Provider>
  )
}
