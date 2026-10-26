<template>
  <section class="px-6 py-16 md:px-10 md:py-24">
    <div class="mx-auto grid max-w-6xl grid-cols-2 gap-3 md:grid-cols-5 md:gap-4">
      <div v-for="tile in tiles" :key="tile.title" class="group relative aspect-square overflow-hidden">
        <img :src="tile.image" :alt="tile.title" loading="lazy" class="h-full w-full object-cover grayscale transition duration-700 group-hover:scale-105 group-hover:grayscale-0" />
        <div class="absolute inset-0 flex items-center justify-center bg-bg/40 p-4 text-center">
          <h3 class="text-sm font-light uppercase tracking-[0.25em] text-text md:text-base">{{ tile.title }}</h3>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
interface Tile {
  title: string
  image: string
}

interface SquareTilesProps {
  tiles: Tile[]
}

defineProps<SquareTilesProps>()
</script>
