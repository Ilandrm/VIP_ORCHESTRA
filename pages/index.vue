<template>
  <div class="flex min-h-[calc(100dvh-12rem)] items-center md:block md:min-h-[calc(100vh-4rem)]">
    <div class="mx-auto w-full max-w-5xl px-4 md:mt-3 md:px-6">
      <VideoBackground src="videos/home.mp4" />
    </div>
  </div>
</template>

<script setup lang="ts">
import AppButton from '~/components/ui/AppButton.vue'
import VideoBackground from '~/components/media/VideoBackground.vue'

useSeoMeta({
  title: 'Vip Orchestra',
  description: "Let's dream together ! Live Music & Entertainment, Worldwide Agency."
})
</script>
