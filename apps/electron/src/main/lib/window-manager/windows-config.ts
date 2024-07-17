/**
 * 对于 windows 平台的特别处理
 * @returns
 */
export const windowsConfig = (): Electron.BrowserWindowConstructorOptions => {
  return {
    titleBarStyle: 'hidden',
    titleBarOverlay: true,
    backgroundMaterial: 'mica'
  }
}
