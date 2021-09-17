<template>
  <div class="FizzBuzzPage page">
    <h1>ロジックをコンポジション関数に分割する：FizzBuzz</h1>

    <div class="demo">
      <FizzBuzzViewCapture />
      <div class="note">
        FizzBuzzは元々簡単な言葉遊びのゲームです。<br>
        プレーヤーは1から順番に次のルールで数字を読み上げます：
        <ol>
          <li>数字が3の倍数なら数字の代わりに「Fizz」</li>
          <li>数字が5の倍数なら数字の代わりに「Buzz」</li>
          <li>数字が3と5両方の倍数なら数字の代わりに「FizzBuzz」</li>
          <li>上記のいずれでもなければ数字をそのまま</li>
        </ol>
        ごくシンプルなルールなので、プログラミングの入門課題としてよく登場します。
      </div>
    </div>

  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import FizzBuzzViewCapture from './FizzBuzzCapture.vue'

export default defineComponent({
  components: { FizzBuzzViewCapture },
  setup() {},
})
</script>

<style lang="scss" scoped>
.demo {
  display: flex;
  padding: 40px;
  gap: 20px;
  > * {
    flex-grow: 1;
  }
}
</style>
