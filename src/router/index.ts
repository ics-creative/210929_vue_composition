import { createRouter, createWebHashHistory } from 'vue-router'
import Top from '@/pages/TopPage.vue'

// ルートの定義
const routes = [
  { name: 'app', path: '/', component: Top },
]

// ルーターの作成
export const router = createRouter({
  // GitHub Pages用にWebHashHistoryを使用する
  history: createWebHashHistory(),
  routes
})