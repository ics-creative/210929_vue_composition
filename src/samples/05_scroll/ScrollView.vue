<template>
  <div class="page">
    <h1>定型処理をコンポジション関数にする：Intersection Observer</h1>

    <div class="demo">
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

      <div class="note">
        <p>
        Intersection Observerは複数の要素の交差（重なり）を監視するAPIです。
        この例では、子要素がスクロールして表示領域に入ったときに、親要素の背景色を切り替えています。
        </p>
        <p>
        Intersection Observerは多機能で利用するための手順が少々複雑で、コードを肥大化させがちです。
        コンポジション関数に追い出して必要な機能のみを提供することで、
        コンポーネントから簡単に利用できるようになります。
        </p>
      </div>
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
.demo {
  display: flex;
  padding: 40px;
  gap: 20px;
  .ScrollView {
    position: relative;
    width: 60%;
  }
  .note {
    width: 40%;
  }
  small {
    padding-top: 20px;
    display: block;
  }
}
.ScrollView {
  .outer {
    position: relative;
    display: flex;
    flex-direction: column;
    padding: 10px;
    gap: 10px;
    height: 350px;
    border: 2px solid currentColor;
    background-color: #fff;
    overflow: scroll;
    transition: background-color 0.3s 0.1s;
    .inner {
      height: 55%;
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
