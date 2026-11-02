<template>
  <div class="md:block">
    <div class="mx-auto mt-3 max-w-5xl px-4 md:px-6">
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
