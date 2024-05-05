import ModuleWindow from './BaseWindowModule'
import { shell } from 'electron'
import { is } from '@electron-toolkit/utils'
import { join } from 'path'
export default class WindowLoadModuel extends ModuleWindow {
  async init(): Promise<void> {
    const { window } = this

    window.on('ready-to-show', () => {
      window.show()
    })

    window.webContents.setWindowOpenHandler((details) => {
      shell.openExternal(details.url)
      return { action: 'deny' }
    })

    if (is.dev && process.env['ELECTRON_RENDERER_URL']) {
      window.loadURL(process.env['ELECTRON_RENDERER_URL'])
    } else {
      window.loadFile(join(__dirname, '../renderer/index.html'))
    }

    window.setMenuBarVisibility(false)

    if (is.dev) {
      window.webContents.openDevTools({
        mode: 'detach'
      })
    }
  }
}
