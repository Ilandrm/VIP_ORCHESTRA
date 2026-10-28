<template>
  <section class="bg-bg px-6 py-10 text-center md:py-16">
    <h2 class="sign text-2xl tracking-wide text-gold md:text-4xl">{{ title }}</h2>
    <div class="relative mx-auto mt-6 h-28 w-full max-w-[14rem] md:h-40 md:max-w-xs">
      <Transition name="logo-fade" mode="out-in">
        <img
          :key="current"
          :src="logos[current]"
          alt=""
          class="absolute inset-0 h-full w-full object-contain"
        />
      </Transition>
    </div>
  </section>
</template>

<script setup lang="ts">
import { onBeforeUnmount, onMounted, ref } from 'vue'

interface LogoVideoSectionProps {
  title: string
  logos: string[]
}

const props = defineProps<LogoVideoSectionProps>()

const current = ref(0)
let timer: ReturnType<typeof setInterval> | undefined

onMounted(() => {
  timer = setInterval(() => {
    current.value = (current.value + 1) % props.logos.length
  }, 2500)
})

onBeforeUnmount(() => {
  if (timer) clearInterval(timer)
})
</script>

<style scoped>
.logo-fade-enter-active,
.logo-fade-leave-active {
  transition: opacity 0.8s ease;
}

.logo-fade-enter-from,
.logo-fade-leave-to {
  opacity: 0;
}
</style>
