import { onBeforeUnmount, onMounted, ref, Ref } from 'vue'

/**
 * 要素の大きさをリアクティブに取得するためのコンポジションです
 * @param el 対象DOMのref
 */
export const useIntersection = (
  root: Ref<HTMLElement | undefined>,
  targets: Ref<HTMLElement | undefined>[],
  onEnter?: (el: HTMLElement) => void,
  onExit?: (el: HTMLElement) => void
) => {
  let observer: IntersectionObserver
  const intersected = ref<HTMLElement>()
  onMounted(() => {
    if (!root.value) return
    observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((ent) => {
          const targetElement = ent.target as HTMLElement
          if (ent.isIntersecting) {
            intersected.value = targetElement
          } else {
            if (intersected.value === targetElement) {
              intersected.value = undefined
            }
          }
          const callback = ent.isIntersecting ? onEnter : onExit
          if (!callback) return
          callback(targetElement)
        })
      },
      {
        root: root.value,
      }
    )
    targets.forEach((target) => {
      if (target.value) observer.observe(target.value)
    })
  })

  onBeforeUnmount(() => {
    observer.disconnect()
  })

  return { intersected }
}
