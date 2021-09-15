<template>
  <div class="StoreAngleView"><input type="text" v-model.number="angle" />{{ unit }}</div>
</template>

<script lang="ts">
import { defineComponent, PropType, toRef } from 'vue'
import { useStoreAngle } from './useStoreAngle'

export default defineComponent({
  props: {
    unit: {
      type: String as PropType<'deg' | 'rad'>,
      default: 'deg',
    },
  },
  setup(props) {
    // 🌟 propsで指定された単位で角度を読み書きするcomputedを取得
    const angle = useStoreAngle(toRef(props, 'unit'))
    return { angle }
  },
})
</script>
