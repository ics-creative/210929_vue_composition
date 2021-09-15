<template>
  <div class="StoreLengthView"><input type="text" v-model.number="length" />{{ unit }}</div>
</template>

<script lang="ts">
import { defineComponent, PropType, toRef } from 'vue'
import { useStoreLength } from './useStoreLength'

export default defineComponent({
  props: {
    unit: {
      type: String as PropType<'px' | 'inch' | 'mm'>,
      default: 'px',
    },
  },
  setup(props) {
    // 🌟 propsで指定された単位で長さを読み書きするcomputedを取得
    const length = useStoreLength(toRef(props, 'unit'))
    return { length }
  },
})
</script>
