import { createStore } from 'vuex'

// ストアの型
export type State = {
  length: number
  angle: number
}

// ストアを作成
// main.tsで利用するため、exportする
export const store = createStore<State>({
  state: {
    length: 300,
    angle: 60,
  },
  mutations: {
    /** Lengthを変更 */
    setLength(state, payload: number) {
      state.length = payload
    },
    /** Angleを変更 */
    setAngle(state, payload: number) {
      state.angle = payload
    },
  },
  actions: {
    /** Lengthを変更 */
    changeLength({ commit, state }, value: number) {
      commit('setLength', value)
    },
    /** Angleを変更 */
    changeAngle({ commit, state }, value: number) {
      commit('setAngle', value)
    },
    /** リセット */
    reset({ commit }) {
      commit('setLength', 0)
      commit('setAngle', 0)
    },
  },
})
