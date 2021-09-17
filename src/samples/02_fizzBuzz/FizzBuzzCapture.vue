<template>
  <div class="fizzBuzzView">
    <div class="count">数値：{{ count }}</div>
    <div class="result">解答：{{ result }}</div>
    <button @click="up">カウントアップ</button>
    <button @click="reset">リセット</button>
  </div>
</template>

<script lang="ts">
import { defineComponent, computed, ref } from 'vue'
export default defineComponent({
  setup() {
    const count = ref(1)
    const result = computed(() => {
      if (count.value % 15 === 0) {
        return 'FizzBuzz'
      }
      if (count.value % 5 === 0) {
        return 'Buzz'
      }
      if (count.value % 3 === 0) {
        return 'Fizz'
      }
      return String(count.value)
    })

    const up = () => {
      count.value++
    }
    const reset = () => {
      count.value = 1
    }

    return { count, result, up, reset }
  },
})
</script>

<style lang="scss" scoped>
.fizzBuzzView {
  width: 40%;
  font-size: 28px;
  .count, .result {
    padding-bottom: 10px;
  }
}
</style>