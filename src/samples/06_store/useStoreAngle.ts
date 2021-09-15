import { computed, Ref } from 'vue'
import { useStore } from 'vuex'
import { State } from '../../store'

/** deg→radの換算値 */
const DEG2RAD = Math.PI / 180

export const useStoreAngle = (unit: Ref<'deg' | 'rad'>) => {
  // ストアを利用する（useStoreはVuexが提供しているコンポジション関数）
  const store = useStore<State>()

  // ストアとの入出力をcomputedで実装
  const angle = computed({
    // ストアの値をdegから指定された単位に変換・四捨五入してして返す
    get() {
      const deg = store.state.angle
      if (unit.value === 'rad') return Number((deg * DEG2RAD).toFixed(2))
      return Number.isFinite(deg) ? Math.round(deg) : 0
    },
    // 値の変更を指定された単位からpxに変換して、ストアの更新アクションをディスパッチ
    set(v: number) {
      let deg = v
      if (unit.value === 'rad') deg = v / DEG2RAD
      store.dispatch('changeAngle', deg)
    },
  })

  // 利用側コンポーネントにはただのcomputed変数として見せる
  return angle
}
