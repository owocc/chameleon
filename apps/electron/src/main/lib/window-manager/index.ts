import { BrowserWindow } from 'electron'
import { basicBrowserWindow } from './basic-config'
import { macosConfig } from './macos-config'
import { windowsConfig } from './windows-config'
import { linuxConfig } from './linux-config'

/**
 * 加载窗口配置
 * @returns
 */
const loadBrowserWindowConfig = (): Electron.BrowserWindowConstructorOptions => {
  let platformConfig: Electron.BrowserWindowConstructorOptions = {}
  switch (process.platform) {
    case 'darwin':
      platformConfig = macosConfig()
      break
    case 'win32':
      platformConfig = windowsConfig()
      break
    case 'linux':
      platformConfig = linuxConfig()
      break
  }
  return { ...basicBrowserWindow, ...platformConfig }
}

export const createWindow = (): BrowserWindow => {
  return new BrowserWindow(loadBrowserWindowConfig())
}
