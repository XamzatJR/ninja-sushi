import { createApp } from 'vue'
import { createPinia } from 'pinia'
import 'virtual:windi.css'

import { VueQueryPlugin, type VueQueryPluginOptions } from '@tanstack/vue-query'
import { plugin as formkit, defaultConfig as formkitConfig } from '@formkit/vue'
import App from './App.vue'
import router from './router'

const vueQueryOptions: VueQueryPluginOptions = {
  queryClientConfig: {
    defaultOptions: {
      queries: {
        retry: 1,
        refetchOnWindowFocus: false,
        staleTime: 80000,
      },
    },
  },
}

const app = createApp(App)

app.use(createPinia())
app.use(router)
app.use(VueQueryPlugin, vueQueryOptions)
app.use(formkit, formkitConfig({
  config: {
    classes: {
      outer: '$reset',
      wrapper: '$reset',
      inner: '$reset',
      label: '$reset',
      input: '$reset',
      help: '',
      messages: '',
      message: '',
    },
  },
}))

app.mount('#app')
