import { createApp } from 'vue'
import { createMemoryHistory, createRouter } from 'vue-router'

import App from './App.vue'
import { createBootstrapperApp } from './boostrap'
import { modules } from './modules'
import { DLSPlugin } from '@/dls/plugin'

createBootstrapperApp(modules).then(({ routes }) => {
  const router = createRouter({
    history: createMemoryHistory(),
    routes,
  })

  const app = createApp(App)

  app.use(router)
  app.use(DLSPlugin)
  app.mount('#app')
}).catch((e) => console.log(e))
