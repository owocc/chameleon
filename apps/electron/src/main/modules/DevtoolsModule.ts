/**
 * 开发工具加载
 */

import installExtensions, {
  REDUX_DEVTOOLS,
  REACT_DEVELOPER_TOOLS
} from 'electron-devtools-installer'

import logger from '../../shared/lib/logger'
import ModuleWindow from './BaseWindowModule'

export default class DevtoolsModule extends ModuleWindow {
  async load(): Promise<void> {
    const isProduction = process.env.NODE_ENV === 'production'

    // 安装开发扩展
    if (!isProduction) {
      try {
        await installExtensions([REACT_DEVELOPER_TOOLS, REDUX_DEVTOOLS], {
          loadExtensionOptions: {
            allowFileAccess: true
          }
        })
        logger.info('Added devtools extensions')
      } catch (err) {
        logger.warn('An error occurred while trying to add extensions:\n', err)
      }
    }
  }
}
