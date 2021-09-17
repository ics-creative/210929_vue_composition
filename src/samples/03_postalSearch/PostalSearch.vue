<template>
  <div class="page">
    <h1>ロジックをコンポジション関数に分割する：郵便番号検索</h1>

    <div class="demo">
      <div class="PostalSearch">
        <div class="postal">郵便番号： <input type="text" v-model="postalCode" /></div>
        <div class="msg">{{ resultMessage }}</div>
        <ol class="addressList">
          <li v-for="address in addresses" :key="address">{{ address }}</li>
        </ol>
      </div>

      <div class="note">
        <p>
          郵便番号から住所を検索して表示するコンポーネントです。
        </p>
        <p>
          API通信等の非同期処理は、正しく作り込むとコードが長くなりがちです。
          コンポジション関数を使うことで、Vueのリアクティブ性を保ったまま、
          複雑なコードを使いやすく分割できます。
        </p>
        <small> ※ 検索には株式会社アイビスが公開している郵便番号検索APIを使用しています </small>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent } from 'vue'
import { usePostalSearch } from './usePostalSearch'
export default defineComponent({
  setup() {
    // 🌟 「郵便番号→住所の検索」コンポジション関数を使う
    const { postalCode, addresses, isWaiting } = usePostalSearch()

    // 状態を元にメッセージを生成
    const resultMessage = computed(() => {
      const resultCount = addresses.value.length
      if (isWaiting.value) return '...取得中'
      if (!postalCode.value) return '郵便番号（7桁）を入力してください'
      if (!resultCount) return '見つかりませんでした'
      return resultCount + '件見つかりました'
    })
    return {
      postalCode, // 郵便番号入力欄にv-modelでバインドする
      addresses,
      isWaiting,
      resultMessage,
    }
  },
})
</script>

<style lang="scss" scoped>
.demo {
  display: flex;
  padding: 40px;
  gap: 20px;
  .PostalSearch {
    position: relative;
    width: 60%;
  }
  .note {
    width: 40%;
  }
  small {
    padding-top: 20px;
    display: block;
  }
}
.PostalSearch {
  font-size: 24px;
  width: 50%;
  input {
    font-size: 24px;
    display: inline-block;
    margin-right: 4px;
    border: 2px solid currentColor;
    border-radius: 4px;
  }
  .msg {
    font-size: 20px;
    color: gray;
    text-align: left;
  }
}
</style>
