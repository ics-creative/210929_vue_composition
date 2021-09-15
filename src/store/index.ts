import { createStore } from 'vuex'

// ストアの型
export type State = {}

// ストアを作成
// main.tsで利用するため、exportする
export const store = createStore<State>({
  state: {},
  mutations: {},
  actions: {},
})
