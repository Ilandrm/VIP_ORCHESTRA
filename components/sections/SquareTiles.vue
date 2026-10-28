<template>
  <section class="px-6 py-10 md:px-10 md:py-16">
    <div class="mx-auto grid max-w-6xl grid-cols-1 gap-3 md:grid-cols-3 md:gap-4">
      <div
        v-for="tile in tiles"
        :key="tile.title"
        class="group relative aspect-[4/3] cursor-pointer overflow-hidden md:aspect-square"
        :class="{ 'is-active': active === tile.title }"
        @click="toggle(tile.title)"
      >
        <img :src="tile.image" :alt="tile.title" loading="lazy" class="h-full w-full object-cover grayscale transition duration-700 group-hover:scale-105 group-hover:grayscale-0 group-[.is-active]:scale-105 group-[.is-active]:grayscale-0" />
        <div class="absolute inset-0 flex flex-col items-center justify-center bg-bg/0 p-6 text-center transition-colors duration-500 group-hover:bg-bg/60 group-[.is-active]:bg-bg/60">
          <h3 class="text-sm opacity-0 transition-opacity duration-500 group-hover:opacity-100 group-[.is-active]:opacity-100 font-light uppercase tracking-[0.25em] text-text md:text-base">{{ tile.title }}</h3>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref } from 'vue'

interface Tile {
  title: string
  image: string
}

interface SquareTilesProps {
  tiles: Tile[]
}

defineProps<SquareTilesProps>()

const active = ref<string | null>(null)

const toggle = (title: string) => {
  active.value = active.value === title ? null : title
}
</script>
