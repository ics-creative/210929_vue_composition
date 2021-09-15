<template>
  <div class="TimeView">{{ timeText }}</div>
</template>

<script lang="ts">
import { computed, defineComponent, ref } from 'vue'
import { useInterval } from './useInterval'

export default defineComponent({
  setup() {
    /** 現在時刻 */
    const date = ref(new Date())

    /** 現在時刻の文字列表現（表示用） */
    const timeText = computed(() => {
      const d = date.value
      return [d.getHours() % 12, d.getMinutes(), d.getSeconds()]
        .map((n) => n.toString().padStart(2, '0'))
        .join(':')
    })

    /** 🌟 定期的に現在時刻を更新する */
    useInterval(() => {
      date.value = new Date()
    }, 100)

    return { timeText }
  },
})
</script>
