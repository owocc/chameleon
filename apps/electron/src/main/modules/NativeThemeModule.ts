import { ipcMain, nativeTheme } from 'electron'
import channels from '../../shared/lib/ipc-channels'
import ModuleWindow from './BaseWindowModule'

export default class NativeThemeModule extends ModuleWindow {}
