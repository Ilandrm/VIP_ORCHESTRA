<template>
  <section class="relative h-screen w-full overflow-hidden bg-bg">
    <iframe
      :src="embedUrl"
      class="yt-bg-iframe"
      title="YouTube video background"
      frameborder="0"
      allow="autoplay; encrypted-media; fullscreen"
      allowfullscreen
      tabindex="-1"
    />
    <div class="absolute inset-0 bg-bg/30" />
    <div class="absolute inset-x-0 bottom-10 z-10 flex justify-center">
      <slot name="scroll-indicator" />
    </div>
  </section>
</template>

<script setup lang="ts">
import { computed } from 'vue'

interface YouTubeBackgroundProps {
  videoId: string
}

const props = defineProps<YouTubeBackgroundProps>()

const embedUrl = computed(
  () =>
    `https://www.youtube.com/embed/${props.videoId}?autoplay=1&mute=1&loop=1&playlist=${props.videoId}&controls=0&rel=0&playsinline=1&cc_load_policy=0&modestbranding=1&iv_load_policy=3&disablekb=1&fs=0`
)
</script>

<style scoped>
.yt-bg-iframe {
  position: absolute;
  top: 50%;
  left: 50%;
  width: 100vw;
  height: 56.25vw; /* 100vw * 9 / 16 */
  min-height: 100vh;
  min-width: 177.78vw; /* 100vh * 16 / 9 */
  transform: translate(-50%, -50%);
  pointer-events: none;
}
</style>
