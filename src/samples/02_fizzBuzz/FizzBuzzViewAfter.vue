<template>
  <div class="fizzBuzzView">
    数値：{{ count }}<br />
    解答：{{ result }}<br />
    <button @click="up">カウントアップ</button>
    <button @click="reset">リセット</button>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { useFizzBuzz } from './useFizzBuzz'
export default defineComponent({
  setup() {
    // 🌟 FizzBuzzの機能を利用
    const { count, result } = useFizzBuzz()

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
