<template>
  <section :class="fullWidth ? 'py-10 md:py-16' : 'px-6 py-10 md:px-10 md:py-16'">
    <div :class="[fullWidth ? '' : 'mx-auto max-w-6xl', 'grid grid-cols-1 gap-3 md:grid-cols-3 md:gap-4']">
      <div
        v-for="tile in tiles"
        :key="tile.title"
        class="group relative aspect-[4/3] cursor-pointer overflow-hidden md:aspect-square"
        :class="{ 'is-active': active === tile.title }"
        @click="toggle(tile.title)"
      >
        <img :src="tile.image" :alt="tile.title" loading="lazy" class="h-full w-full object-cover grayscale transition duration-700 group-hover:scale-105 group-hover:grayscale-0 group-[.is-active]:scale-105 group-[.is-active]:grayscale-0" />
        <div class="absolute inset-0 flex flex-col items-center justify-center bg-bg/40 p-6 text-center transition-colors duration-500 group-hover:bg-bg/70 group-[.is-active]:bg-bg/70">
          <h3 class="font-light uppercase tracking-[0.25em] text-text text-sm transition-colors duration-500 group-hover:text-gold group-[.is-active]:text-gold md:text-base">{{ tile.title }}</h3>
          <p v-if="tile.description" class="mt-3 max-w-xs text-xs leading-relaxed opacity-0 transition-opacity duration-500 group-hover:opacity-100 group-[.is-active]:opacity-100 text-text/80 md:text-base">{{ tile.description }}</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref } from 'vue'

interface Tile {
  title: string
  description?: string
  image: string
}

interface SquareTilesProps {
  tiles: Tile[]
  fullWidth?: boolean
}

withDefaults(defineProps<SquareTilesProps>(), {
  fullWidth: false
})

const active = ref<string | null>(null)

const toggle = (title: string) => {
  active.value = active.value === title ? null : title
}
</script>
