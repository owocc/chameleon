/**
 * Module in charge of the app menu
 * Litteraly stolen from: https://electronjs.org/docs/api/menu#examples
 */

import { Menu, shell } from 'electron'

// import channels from '../../shared/lib/ipc-channels'

import ModuleWindow from './BaseWindowModule'

export default class ApplicationMenuModule extends ModuleWindow {
  async load(): Promise<void> {
    const template: Electron.MenuItemConstructorOptions[] = [
      { role: 'appMenu' },
      { role: 'fileMenu' },
      { role: 'editMenu' },
      {
        label: 'View',
        submenu: [
          { role: 'reload' },
          { role: 'forceReload' },
          { role: 'toggleDevTools' },
          { type: 'separator' },
          { role: 'togglefullscreen' }
        ]
      },
      { role: 'windowMenu' }
    ]

    const menu = Menu.buildFromTemplate(template)
    Menu.setApplicationMenu(menu)
  }
}
