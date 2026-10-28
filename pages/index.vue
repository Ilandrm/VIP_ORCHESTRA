<template>
  <div class="flex min-h-[calc(100svh-4rem)] items-center md:block md:min-h-0">
    <VideoBackground src="videos/home.mp4" />
  </div>
</template>

<script setup lang="ts">
import VideoBackground from '~/components/media/VideoBackground.vue'

useSeoMeta({
  title: 'Vip Orchestra',
  description: "Let's dream together ! Live Music & Entertainment, Worldwide Agency."
})
</script>
