<template>
  <div class="TimeView">{{ timeText }}</div>
</template>

<script lang="ts">
import { computed, defineComponent, onBeforeUnmount, ref } from 'vue'

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

    /** 現在時刻を更新する */
    const updateDate = () => {
      date.value = new Date()
    }

    // 更新用タイマーをセット
    let timer = window.setInterval(updateDate, 100)

    // 更新用タイマーを解除
    onBeforeUnmount(() => {
      window.clearInterval(timer)
    })

    return { timeText }
  },
})
</script>
