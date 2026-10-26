<template>
  <section class="px-6 py-16 md:px-10 md:py-24">
    <h2 v-if="title" class="sign mb-12 text-center text-3xl tracking-wide text-gold md:text-5xl">{{ title }}</h2>
    <div class="mx-auto grid max-w-6xl grid-cols-2 gap-3 md:grid-cols-3 md:gap-4">
      <img
        v-for="(photo, index) in photos"
        :key="photo"
        :src="photo"
        :alt="`VIP Orchestra ${index + 1}`"
        loading="lazy"
        class="aspect-square w-full object-cover"
      />
    </div>
  </section>
</template>

<script setup lang="ts">
interface PhotoGalleryProps {
  photos: string[]
  title?: string
}

withDefaults(defineProps<PhotoGalleryProps>(), {
  title: undefined
})
</script>
