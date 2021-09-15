import { createRouter, createWebHashHistory } from 'vue-router'
import Top from '@/samples/TopPage.vue'
import Sample01_FatClock from '@/samples/01_fatComponent/FatClock.vue'
import Sample02_FizzBuzz from '@/samples/02_fizzBuzz/FizzBuzzPage.vue'
import Sample03_PostalSearch from '@/samples/03_postalSearch/PostalSearch.vue'
import Sample04_Time from '@/samples/04_time/TimeViewPage.vue'
import Sample05_Scroll from '@/samples/05_scroll/ScrollView.vue'
import Sample06_Store from '@/samples/06_store/StorePage.vue'

// ルートの定義
const routes = [
  { name: 'Top', path: '/', component: Top },
  { name: 'Fat', path: '/fat', component: Sample01_FatClock },
  { name: 'FizzBuzz', path: '/fizzbuzz', component: Sample02_FizzBuzz },
  { name: 'Postal', path: '/postal', component: Sample03_PostalSearch },
  { name: 'Time', path: '/time', component: Sample04_Time },
  { name: 'Scroll', path: '/scroll', component: Sample05_Scroll },
  { name: 'Store', path: '/store', component: Sample06_Store },
]

// ルーターの作成
export const router = createRouter({
  // GitHub Pages用にWebHashHistoryを使用する
  history: createWebHashHistory(),
  routes,
})
