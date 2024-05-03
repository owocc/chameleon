// 默认布局,使用 macos 风格, 适合桌面应用
import { JSX, useState } from 'react'
import { IconContext } from 'react-icons'
import Header from '../../components/ui/macos/Header/Header'
import Sidebar from '../../components/ui/macos/Sidebar/Sidebar'
import { type SidebarStatus } from '../../../shared/types/layout'
import SideBarSplitLine from '../../components/common/SideBarSplitLine/SideBarSplitLine'
type DefaultLayoutProps = {
  children?: JSX.Element
}
//创建状态存储布局信息,只有在关闭和或者显示隐藏侧边栏的时候会更新宽度到redux,防止一直在存储宽度信息
// const LayouContext = createContext<SidebarStatus>()

function MacosLayout({ children }: DefaultLayoutProps): JSX.Element {
  // 默认侧边栏宽度, 可以存到本地, 方便下次打开ƒ
  const [sidebarStatus, setSidebarStatus] = useState<SidebarStatus>({
    width: 200,
    maxWidth: 300,
    minWidth: 140,
    visible: true
  })

  return (
    <IconContext.Provider value={{ size: '1.25rem' }}>
      <div className="h-screen w-screen flex overflow-hidden scrollbar-thumb-black/25 scrollbar-track-transparent">
        <Header sidebarStatus={sidebarStatus} />
        <Sidebar sidebarStatus={sidebarStatus} setSidebarStatus={setSidebarStatus} />
        <main className="flex-1 bg-white pt-nav  w-full">
          <div className="h-full w-full relative">{children}</div>
        </main>
      </div>
    </IconContext.Provider>
  )
}

export default MacosLayout
