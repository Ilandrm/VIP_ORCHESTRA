<template>
  <section class="paddingTopBottom-s1 px-6 md:py-12">
    <div class="header-projects mb-12 text-center">
      <h3 class="text-3xl tracking-wide md:text-5xl sign">
        <slot name="title" />
      </h3>
      <h4 class="font-playfair-italic mt-10 text-sm uppercase tracking-widest text-text/70 md:text-2xl">
        {{ subtitle }}
      </h4>
    </div>
    <div class="mosaic-grid mx-auto grid max-w-6xl auto-rows-[220px] grid-cols-2 gap-4 md:auto-rows-[260px] md:grid-cols-4 md:gap-6">
      <div
        v-for="(video, index) in videos"
        :key="video.title"
        :class="spanClass(index)"
      >
        <HoverPlayVideoCard
          class="h-full w-full !aspect-auto"
          :src="video.src"
          :poster="video.poster"
        />
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import HoverPlayVideoCard from '~/components/media/HoverPlayVideoCard.vue'
import type { Project } from '~/components/sections/ProjectsGrid.vue'

interface VideoMosaicProps {
  subtitle: string
  videos: Project[]
}

defineProps<VideoMosaicProps>()

const pattern = [
  'col-span-2 row-span-2',
  'col-span-1 row-span-1',
  'col-span-1 row-span-1',
  'col-span-1 row-span-1',
  'col-span-1 row-span-1',
  'col-span-2 row-span-1'
]

const spanClass = (index: number) => pattern[index % pattern.length]
</script>

<style>
.sign {
  font-family: 'Brittany Signature', cursive;
}
</style>
