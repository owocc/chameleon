import { JSX } from 'react'
import { motion, type PanInfo } from 'framer-motion'
import type { SidebarStatus } from '../../../../shared/types/layout'

type SideBarSplitLineProps = {
  sidebarStatus: SidebarStatus
  setSidebarStatus: (newSidebarStatus: SidebarStatus) => void
}

export default function SideBarSplitLine(props: SideBarSplitLineProps): JSX.Element {
  const { sidebarStatus, setSidebarStatus } = props

  const setSidebarWidth = (_event: PointerEvent, info: PanInfo): void => {
    setSidebarStatus({
      ...sidebarStatus,
      width: Math.floor(info.point.x)
    })
  }
  return (
    <motion.div
      onPan={setSidebarWidth}
      className="h-full w-1 border-r border-black/10 absolute z-50  right-0 top-0 cursor-col-resize hover:bg-blue-500 transition-colors active:bg-blue-500 active:cursor-col-resize"
    />
  )
}
