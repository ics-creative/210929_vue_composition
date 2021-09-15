<template>
  <div class="TimePage">
    <h1>定型処理をコンポジション関数に分割する：setIntervalの例</h1>
    <div class="description">
      setIntervalを使って時間を表示するシンプルなコンポーネントです。以下の2つは機能としては同一です。
      <a href="xxx" class="source">ソースコードを見る</a>
    </div>

    <h2>分割前（TimeViewBefore.vue）</h2>
    <div class="demo">
      <TimeViewBefore />
    </div>

    <h2>分割後（TimeViewAfter.vue）</h2>
    <div class="demo">
      <TimeViewAfter />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import TimeViewBefore from './TimeViewBefore.vue'
import TimeViewAfter from './TimeViewAfter.vue'

export default defineComponent({
  components: { TimeViewBefore, TimeViewAfter },
  setup() {},
})
</script>

<style lang="scss" scoped>
.demo {
  padding: 40px;
}
</style>
