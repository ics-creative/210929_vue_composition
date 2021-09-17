<template>
  <div class="TimePage page">
    <h1>Vuexストアの入出力を分割する例</h1>

    <div class="demo">
      <div class="store">
        <h2>何かの長さ</h2>
        <StoreLength unit="px" />
        <StoreLength unit="inch" />
        <StoreLength unit="mm" />
        <h2>何かの角度</h2>
        <StoreAngle unit="deg" />
        <StoreAngle unit="rad" />
      </div>
      <div class="note">
        <p>
          Vuexストアに格納された長さ(length)と角度(angle)の<br>
          2つの値をそれぞれ複数の単位で表示・更新する例です。<br>
          ひとつのテキストボックスを編集すると、ストアの値が<br>
          更新され他の単位のテキストボックスも値が変わります。
        </p>
        <p>
          ストアの値を表示側の単位にあわせて変換する処理を<br>
          コンポジション関数が担うことで、コンポーネントと<br>
          ストア両方の肥大化を防いでいます。
        </p>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import StoreLength from './StoreLength.vue'
import StoreAngle from './StoreAngle.vue'

export default defineComponent({
  components: { StoreLength, StoreAngle },
  setup() {},
})
</script>

<style lang="scss" scoped>
.demo {
  display: flex;
  padding: 40px;
  gap: 20px;
  h2 {
    font-size: 20px;
  }
  .store {
    width: 50%;
    font-size: 24px;
  }
  .note {
    width: 50%;
  }
}
</style>
