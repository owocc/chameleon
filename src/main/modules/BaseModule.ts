import os from 'os'
import logger from '../../shared/lib/logger'

/**
 * 基础模块,其它模块扩展该模块
 */
export default class Module {
  protected loaded: boolean
  protected platforms: NodeJS.Platform[]

  constructor() {
    this.loaded = false
    this.platforms = ['win32', 'linux', 'darwin']
  }

  async init(): Promise<void> {
    if (this.loaded) throw new TypeError(`Module ${this.constructor.name} is already loaded`)

    if (this.platforms.includes(os.platform())) {
      await this.load().catch((err) => {
        throw err
      })
      this.loaded = true
      logger.info(`Loaded ${this.constructor.name}`)
    } else {
      logger.info(
        `Skipping load of ${
          this.constructor.name
        } (supported platform: ${this.platforms.join(', ')})`
      )
    }
  }

  // 加载方法
  async load(): Promise<void> {
    throw new TypeError(`Module ${this.constructor.name} should have a load() method`)
    // Do whatever you want here :)
  }
}
