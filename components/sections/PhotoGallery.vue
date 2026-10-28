<template>
  <section class="px-6 py-10 md:px-10 md:py-16">
    <h2 v-if="title" class="sign mb-8 text-center text-2xl tracking-wide text-gold md:mb-10 md:text-4xl">{{ title }}</h2>
    <div ref="gridRef" class="mx-auto grid max-w-6xl auto-rows-[9rem] grid-flow-dense grid-cols-2 gap-2 md:auto-rows-[13rem] md:grid-cols-4 md:gap-3">
      <div
        v-for="(photo, index) in photos"
        :key="photo"
        class="mosaic-item group overflow-hidden"
        :class="spanClass(index)"
        :style="{ transitionDelay: `${(index % 4) * 90}ms` }"
      >
        <img
          :src="photo"
          :alt="`VIP Orchestra ${index + 1}`"
          loading="lazy"
          class="h-full w-full object-cover transition duration-700 group-hover:scale-110"
        />
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { onBeforeUnmount, onMounted, ref } from 'vue'

interface PhotoGalleryProps {
  photos: string[]
  title?: string
}

withDefaults(defineProps<PhotoGalleryProps>(), {
  title: undefined
})

const pattern = ['col-span-2 row-span-2', '', 'row-span-2', '', 'col-span-2', '', '', 'col-span-2 row-span-2']

const spanClass = (index: number) => pattern[index % pattern.length]

const gridRef = ref<HTMLElement | null>(null)
let observer: IntersectionObserver | null = null

onMounted(() => {
  const items = gridRef.value?.querySelectorAll('.mosaic-item') ?? []
  observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible')
          observer?.unobserve(entry.target)
        }
      })
    },
    { threshold: 0.15 }
  )
  items.forEach(item => observer?.observe(item))
})

onBeforeUnmount(() => observer?.disconnect())
</script>

<style scoped>
.mosaic-item {
  opacity: 0;
  transform: translateY(24px) scale(0.96);
  transition: opacity 0.8s ease, transform 0.8s ease;
}
.mosaic-item.is-visible {
  opacity: 1;
  transform: none;
}
</style>
