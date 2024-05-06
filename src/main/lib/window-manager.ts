import { BrowserWindow } from 'electron'
import { join } from 'path'
// import icon from '/../../resources/icon.png?asset'

/**
 * 浏览器窗口基本配置项
 */
const baseBrowserWindow: Electron.BrowserWindowConstructorOptions = {
  width: 900,
  height: 670,
  show: false,
  title: 'o-Color',
  titleBarStyle: 'hidden',
  // icon: icon,
  webPreferences: {
    preload: join(__dirname, '../preload/entrypoint.js'),
    sandbox: false
  }
}

/**
 * 对 Macos 特别处理的配置项
 * @returns macos 配置项
 */
const macosConfig = (): Electron.BrowserWindowConstructorOptions => {
  return {
    minHeight: 200,
    minWidth: 200,
    transparent: true,
    titleBarStyle: 'hiddenInset',
    vibrancy: 'sidebar',
    visualEffectState: 'followWindow',
    autoHideMenuBar: true,
    trafficLightPosition: {
      y: 20,
      x: 20
    }
  }
}

const windowsConfig = (): Electron.BrowserWindowConstructorOptions => {
  return {
    titleBarStyle: 'hidden',
    titleBarOverlay:true,
    backgroundMaterial:"mica"
  }
}

const loadBrowserWindowConfig = (): Electron.BrowserWindowConstructorOptions => {
  if (process.platform === 'darwin') {
    return { ...baseBrowserWindow, ...macosConfig() }
  }
  if (process.platform === 'win32') {
    return { ...baseBrowserWindow, ...windowsConfig() }
  }
  // 其它系统配置...

  // 如果不属于需要定制处理的平台,就返回基本的配置项
  return baseBrowserWindow
}

export const createWindow = (): BrowserWindow => {
  return new BrowserWindow(loadBrowserWindowConfig())
}
