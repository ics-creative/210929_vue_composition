<template>
  <h1>Composition APIを活用したコンポーネント分割テクニック サンプル集</h1>

  <ol>
    <li><router-link to="fat">1コンポーネントにすべての機能を詰め込んだ例</router-link></li>
    <li><router-link to="fizzbuzz">ロジックをコンポジション関数に分割する：FizzBuzz</router-link></li>
    <li><router-link to="postal">ロジックをコンポジション関数に分割する：郵便番号検索</router-link></li>
    <li><router-link to="time">定型処理をコンポジション関数に分割する：setInterval</router-link></li>
    <li><router-link to="scroll">定型処理をコンポジション関数に分割する：Intersection Observer</router-link></li>
    <li><router-link to="store">Vuexストアの入出力を分割する</router-link></li>
  </ol>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  setup() {},
})
</script>

<style lang="scss" scoped></style>
