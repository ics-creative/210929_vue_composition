<template>
  <h1>Composition APIを活用したコンポーネント分割テクニック サンプル集</h1>

  <ol>
    <li><a href="#/fat">1コンポーネントにすべての機能を詰め込んだ例</a></li>
    <li><a href="#/fizzbuzz">ロジックをコンポジション関数に分割する：FizzBuzz</a></li>
    <li><a href="#/postal">ロジックをコンポジション関数に分割する：郵便番号検索</a></li>
    <li><a href="#/time">定型処理をコンポジション関数に分割する：setInterval</a></li>
    <li><a href="#/scroll">定型処理をコンポジション関数に分割する：Intersection Observer</a></li>
    <li><a href="#/store">Vuexストアの入出力を分割する</a></li>
  </ol>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  setup() {},
})
</script>

<style lang="scss" scoped></style>
