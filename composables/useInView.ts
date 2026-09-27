import { ref, onMounted, onBeforeUnmount, type Ref } from 'vue'

export const useInView = (target: Ref<HTMLElement | null>, threshold = 0.2) => {
  const isVisible = ref(false)
  let observer: IntersectionObserver | null = null

  onMounted(() => {
    if (!target.value) return

    observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            isVisible.value = true
          }
        })
      },
      { threshold }
    )

    observer.observe(target.value)
  })

  onBeforeUnmount(() => {
    observer?.disconnect()
  })

  return { isVisible }
}
