<template>
  <div class="FizzBuzzPage">
    <h1>ロジックをコンポジション関数に分割する：FizzBuzzの例</h1>
    <div class="description">
      FizzBuzzを表示するシンプルなコンポーネントです。以下の2つは機能としては同一です。
      <a href="xxx" class="source">ソースコードを見る</a>
    </div>

    <h2>分割前（FizzBuzzViewBefore.vue）</h2>
    <div class="demo">
      <FizzBuzzViewBefore />
    </div>

    <h2>分割後（FizzBuzzViewAfter.vue）</h2>
    <div class="demo">
      <FizzBuzzViewAfter />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import FizzBuzzViewBefore from './FizzBuzzViewBefore.vue'
import FizzBuzzViewAfter from './FizzBuzzViewAfter.vue'

export default defineComponent({
  components: { FizzBuzzViewBefore, FizzBuzzViewAfter },
  setup() {},
})
</script>

<style lang="scss" scoped>
.demo {
  padding: 40px;
}
</style>
