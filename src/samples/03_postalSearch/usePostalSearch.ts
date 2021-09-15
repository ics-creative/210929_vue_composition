import { computed, readonly, ref, watch } from 'vue'
import { postalApi } from './postalApi'

export const usePostalSearch = () => {
  // 入力：郵便番号
  const postalCode = ref('')
  // 出力：住所一覧
  const addresses = ref<string[]>([])
  // 受信待ちのリクエスト数
  const waitingCount = ref(0)
  // 受信待ち状態かどうか？
  const isWaiting = computed(() => waitingCount.value > 0)

  // 入力の変更を監視する
  watch(postalCode, async () => {
    waitingCount.value++
    // 結果をクリアして検索APIを実行
    addresses.value.length = 0
    addresses.value.push(...(await postalApi(postalCode.value)))
    waitingCount.value--
  })

  return {
    postalCode,
    // 誤代入できないようにreadonlyにする（computedを使ってもOK）
    addresses: readonly(addresses),
    isWaiting,
  }
}
