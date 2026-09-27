<template>
  <section ref="statsRef" class="wrap-stats hidden px-6 py-16 md:py-24">
    <div class="mx-auto grid max-w-5xl grid-cols-2 gap-10 text-center md:grid-cols-5">
      <div v-for="stat in displayedStats" :key="stat.label" class="flex flex-col items-center gap-2">
        <span class="text-4xl font-semibold text-accent md:text-5xl">{{ stat.current }}</span>
        <span class="text-xs uppercase tracking-widest text-text/70">{{ stat.label }}</span>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref, reactive, watch } from 'vue'
import { useInView } from '~/composables/useInView'

interface Stat {
  label: string
  target: number
  current: number
}

const statsRef = ref<HTMLElement | null>(null)
const { isVisible } = useInView(statsRef)

const displayedStats = reactive<Stat[]>([
  { label: 'Private Shows', target: 140, current: 0 },
  { label: 'Corporate Events', target: 80, current: 0 },
  { label: 'Special Projects', target: 20, current: 0 },
  { label: 'Talents', target: 250, current: 0 },
  { label: 'Staff', target: 60, current: 0 }
])

let hasAnimated = false

const animateNumbers = () => {
  if (hasAnimated) return
  hasAnimated = true
  displayedStats.forEach((stat) => {
    const step = Math.max(1, Math.round(stat.target / 40))
    const interval = setInterval(() => {
      stat.current = Math.min(stat.current + step, stat.target)
      if (stat.current >= stat.target) {
        clearInterval(interval)
      }
    }, 50)
  })
}

watch(isVisible, (visible) => {
  if (visible) {
    animateNumbers()
  }
})
</script>
