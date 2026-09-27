<template>
  <div class="relative h-screen w-full overflow-hidden">
    <video
      ref="videoRef"
      class="absolute inset-0 h-full w-full object-cover"
      :poster="poster"
      :autoplay="autoplay"
      :loop="loop"
      :muted="muted"
      playsinline
    >
      <source :src="src" type="video/mp4" />
    </video>
    <div class="absolute inset-0 bg-bg/30" />
    <div class="relative z-10 h-full w-full">
      <slot />
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'

interface VideoBackgroundProps {
  src: string
  poster?: string
  autoplay?: boolean
  loop?: boolean
  muted?: boolean
}

const props = withDefaults(defineProps<VideoBackgroundProps>(), {
  poster: undefined,
  autoplay: true,
  loop: true,
  muted: true
})

const videoRef = ref<HTMLVideoElement | null>(null)

onMounted(() => {
  if (props.autoplay) {
    videoRef.value?.play().catch(() => {})
  }
})
</script>
