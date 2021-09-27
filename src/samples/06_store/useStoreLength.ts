import { computed, Ref } from 'vue'
import { useStore } from 'vuex'
import { State } from '../../store'

/** Px/Inchの値。この例では72dpi固定とします */
const DPI = 72
/** Inch→mmの換算値 */
const INCH2MM = 25.4

export const useStoreLength = (unit: Ref<'px' | 'inch' | 'mm'>) => {
  // ストアを利用する（useStoreはVuexが提供しているコンポジション関数）
  const store = useStore<State>()

  // ストアとの入出力をcomputedで実装
  const length = computed({
    // ストアの値をpxから指定された単位に変換・四捨五入してして返す
    get() {
      const px = store.state.length
      if (unit.value === 'inch') return Math.round((px / DPI) * 10) / 10
      if (unit.value === 'mm') return Math.round((px / DPI) * INCH2MM)
      return Number.isFinite(px) ? Math.round(px) : 0
    },
    // 値の変更を指定された単位からpxに変換して、ストアの更新アクションをディスパッチ
    set(v: number) {
      let px = v
      if (unit.value === 'inch') px = v * DPI
      if (unit.value === 'mm') px = (v / INCH2MM) * DPI
      store.dispatch('changeLength', px)
    },
  })

  // 利用側コンポーネントにはただのcomputed変数として見せる
  return length
}
