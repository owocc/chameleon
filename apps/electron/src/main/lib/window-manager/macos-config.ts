/**
 * 对 Macos 的配置项
 * @returns macos 配置项
 */
export const macosConfig = (): Electron.BrowserWindowConstructorOptions => {
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
