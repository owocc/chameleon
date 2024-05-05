import { app, BrowserWindow, ipcMain } from 'electron'
import { electronApp, optimizer } from '@electron-toolkit/utils'
import { createWindow } from './lib/window-manager'
import * as ModulesManager from './lib/modules-manager'
import DevtoolsModule from './modules/DevtoolsModule'
import ApplicationMenuModule from './modules/ApplicationMenuModule'
import WindowLoadModuel from './modules/WindowLoadModuel'
import DatabaseModule from './modules/DatabaseModule'
// import icon from '../../resources/icon.png?asset'

let mainWindow: Electron.BrowserWindow | null = null
/**
const color = systemPreferences.getAccentColor()
console.log('color==============:', color)
nativeTheme.addListener('updated', () => {
  //这里在 macos 可以监听到主题色的变化
  console.log('改变了')
  console.log('color==============:', systemPreferences.getAccentColor())
})
 */

app.on('ready', async () => {
  electronApp.setAppUserModelId('owocc.ocolor')
  const databaseModule = new DatabaseModule()
  await ModulesManager.init(databaseModule)

  mainWindow = createWindow()

  ModulesManager.init(
    new WindowLoadModuel(mainWindow),
    new DevtoolsModule(mainWindow),
    new ApplicationMenuModule(mainWindow)
  )

  app.on('browser-window-created', (_, window) => {
    optimizer.watchWindowShortcuts(window)
  })

  app.on('activate', function () {
    if (BrowserWindow.getAllWindows().length === 0) createWindow()
  })
})

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit()
  }
})
