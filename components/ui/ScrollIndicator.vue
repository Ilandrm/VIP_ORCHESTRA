<template>
  <div class="arrow-bottom flex flex-col items-center gap-2 transition-opacity duration-500" :class="visible ? 'opacity-100' : 'opacity-0'">
    <span class="text-xs uppercase tracking-widest text-text/80">Scroll</span>
    <img :src="withBaseUrl('/images/ico-arrow-bottom.svg')" alt="" class="h-4 w-4 animate-bounce" />
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, onBeforeUnmount } from 'vue'

const visible = ref(true)

const handleScroll = () => {
  visible.value = window.scrollY <= 10
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll, { passive: true })
})

onBeforeUnmount(() => {
  window.removeEventListener('scroll', handleScroll)
})
</script>
