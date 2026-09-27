<template>
  <div
    class="group relative aspect-[4/5] w-full cursor-pointer overflow-hidden bg-bg"
    @mouseenter="playVideo"
    @mouseleave="resetVideo"
  >
    <video
      ref="videoRef"
      class="h-full w-full object-cover"
      :poster="poster"
      muted
      loop
      playsinline
      preload="metadata"
    >
      <source :src="src" type="video/mp4" />
    </video>

    <div v-if="src"
         class="absolute inset-0 flex flex-col items-center justify-end gap-4 bg-gradient-to-t from-black/70 via-black/20 to-transparent transition-opacity duration-300"
      :class="isPlaying ? 'opacity-0' : 'opacity-100'"
    >
      <button
        type="button"
        class="flex h-14 w-14 items-center justify-center rounded-full border border-text/60"
        aria-label="Play"
        @click.stop="playVideo"
      >
        <img :src="withBaseUrl('/images/icon-play.svg')" alt="" class="h-4 w-4" />
      </button>
      <h5 class="text-base uppercase tracking-widest text-gold">{{ title }}</h5>
    </div>
    <div v-else
         class="absolute inset-0 flex flex-col items-center justify-end gap-4 bg-gradient-to-t from-black/70 via-black/20 to-transparent transition-opacity duration-300"
         :class="isPlaying ? 'opacity-0' : 'opacity-100'"
    >
      <h5 class="text-base uppercase tracking-widest text-gold">{{ title }}</h5>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

interface HoverPlayVideoCardProps {
  src: string
  poster: string
  title: string
}

defineProps<HoverPlayVideoCardProps>()

const videoRef = ref<HTMLVideoElement | null>(null)
const isPlaying = ref(false)

const playVideo = () => {
  if (!videoRef.value) return
  isPlaying.value = true
  videoRef.value.play().catch(() => {})
}

const resetVideo = () => {
  if (!videoRef.value) return
  isPlaying.value = false
  videoRef.value.pause()
  videoRef.value.currentTime = 0
}
</script>
<style>
.text-gold {
  color: #bca45d;
}

</style>