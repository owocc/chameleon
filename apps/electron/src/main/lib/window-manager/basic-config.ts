import { join } from 'path'
// import icon from '/../../resources/icon.png?asset'
/**
 * 浏览器窗口基本配置项
 */
export const basicBrowserWindow: Electron.BrowserWindowConstructorOptions = {
  width: 900,
  height: 670,
  show: false,
  title: 'o-Color',
  // icon: icon,
  webPreferences: {
    preload: join(__dirname, '../preload/entrypoint.js'),
    sandbox: false
  }
}
