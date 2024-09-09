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
  const platformConfigMap = new Map<string, () => Electron.BrowserWindowConstructorOptions>([
    ['darwin', macosConfig],
    ['win32', windowsConfig],
    ['linux', linuxConfig]
  ])
  const platformConfig = platformConfigMap.get(process.platform) || (() => ({}))
  return { ...basicBrowserWindow, ...platformConfig() }
}

export const createWindow = (): BrowserWindow => {
  return new BrowserWindow(loadBrowserWindowConfig())
}
