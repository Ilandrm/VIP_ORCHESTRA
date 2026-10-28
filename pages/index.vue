<template>
  <div class="flex min-h-[calc(100svh-4rem)] items-center md:block md:min-h-0">
    <VideoBackground src="videos/home.mp4">
      <div class="absolute inset-x-0 bottom-4 flex justify-center md:bottom-12">
        <AppButton to="/contact" label="Contact us" variant="outline" />
      </div>
    </VideoBackground>
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
