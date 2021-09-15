<template>
  <div class="fizzBuzzView">
    数値：{{ count }}<br />
    解答：{{ result }}<br />
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
