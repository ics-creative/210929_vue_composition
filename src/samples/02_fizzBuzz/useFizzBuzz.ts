import { computed, ref } from 'vue'

export const useFizzBuzz = () => {
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

  return { count, result }
}
