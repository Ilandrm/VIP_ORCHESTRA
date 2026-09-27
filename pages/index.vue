<template>
  <div>
    <VideoBackground src="/videos/home.mp4" poster="/images/poster-black.jpg">
      <div class="flex h-full flex-col items-center justify-center px-6 text-center">
        <div class="absolute inset-x-0 bottom-10 flex justify-center">
          <ScrollIndicator />
        </div>
      </div>
    </VideoBackground>
  </div>
</template>

<script setup lang="ts">
import VideoBackground from '~/components/media/VideoBackground.vue'
import ScrollIndicator from '~/components/ui/ScrollIndicator.vue'
import StatsCounter from '~/components/sections/StatsCounter.vue'
import AppButton from '~/components/ui/AppButton.vue'

useSeoMeta({
  title: 'Vip Orchestra',
  description: "Let's dream together ! Live Music & Entertainment, Worldwide Agency."
})
</script>
