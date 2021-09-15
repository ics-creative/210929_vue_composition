<template>
  <h1>定型処理をコンポジション関数に分割する：Intersection Observerの例</h1>
  <div class="description">
    Intersection Observerを使って、スクロール時の要素の交差を検出し、表示を変える例です。
    Intersection Observerは多機能で利用するための手順が少々複雑ですが、
    コンポジション関数に追い出して必要な機能のみを提供することで、
    コンポーネントから簡単に利用できるようにしています。
    <a href="xxx" class="source">ソースコードを見る</a>
  </div>

  <div class="ScrollView">
    <div class="outer" ref="outerRef" :style="{ backgroundColor: currentColor }">
      SCROLL ME ▼
      <div class="inner">1</div>
      <div class="inner">2</div>
      <div class="inner">3</div>
      <div class="inner">4</div>
      <div class="inner" ref="targetRef1" style="background-color: gold">5</div>
      <div class="inner">6</div>
      <div class="inner">7</div>
      <div class="inner">8</div>
      <div class="inner">9</div>
      <div class="inner" ref="targetRef2" style="background-color: powderblue">10</div>
      <div class="inner">11</div>
      <div class="inner">12</div>
    </div>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent, ref } from 'vue'
import { useIntersection } from './useIntersection'

export default defineComponent({
  setup() {
    /** 交差を検出する領域の要素 */
    const outerRef = ref<HTMLElement>()
    /** 交差を検出する子要素1 */
    const targetRef1 = ref<HTMLElement>()
    /** 交差を検出する子要素2 */
    const targetRef2 = ref<HTMLElement>()

    // 🌟 交差している要素をリアクティブに取得
    const { intersected } = useIntersection(outerRef, [targetRef1, targetRef2])
    /** 現在の色： 「交差している要素」があれば、その背景色を「現在の色」にする */
    const currentColor = computed(() => intersected.value?.style.backgroundColor ?? '')

    return { currentColor, outerRef, targetRef1, targetRef2 }
  },
})
</script>

<style lang="scss" scoped>
.ScrollView {
  .outer {
    position: relative;
    display: flex;
    flex-direction: column;
    padding: 10px;
    gap: 10px;
    height: 60vh;
    border: 2px solid currentColor;
    background-color: #fff;
    overflow: scroll;
    transition: background-color 0.3s 0.5s;
    .inner {
      height: 45%;
      flex-shrink: 0;
      background-color: #e5f4f83a;
      border: 1px solid currentColor;
      display: flex;
      justify-content: center;
      align-items: center;
      color: #00000080;
      font-size: 5vw;
    }
  }
}
</style>
