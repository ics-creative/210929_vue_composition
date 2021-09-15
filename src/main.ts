import { createApp } from 'vue'
import App from './App.vue'
import { store } from './store'
import { router } from './router'

createApp(App)
  .use(store) // 作成したストアを読み込み
  .use(router) // 作成したルーターを読み込み
  .mount('#app')
