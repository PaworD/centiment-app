import { App } from 'vue'
import { dlsComponents } from './components/registry'
import { IconRegistryKey, iconsRegistry } from './icons/registry'

export const DLSPlugin = {
  install (app: App) {
    for (const [name, component] of Object.entries(dlsComponents)) {
      app.component(`Ui${name}`, component)
    }

    app.provide(IconRegistryKey, iconsRegistry)
  }
}