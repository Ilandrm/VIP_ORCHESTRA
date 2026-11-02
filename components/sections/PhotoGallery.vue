<template>
  <section :class="fullWidth ? 'py-10 md:py-16' : 'px-6 py-10 md:px-10 md:py-16'">
    <h2 v-if="title" class="sign mb-8 text-center text-xl tracking-wide text-gold md:mb-10 md:text-3xl">{{ title }}</h2>
    <div ref="gridRef" :class="[fullWidth ? '' : 'mx-auto max-w-6xl', 'grid auto-rows-[9rem] grid-flow-dense grid-cols-2 gap-2 md:auto-rows-[13rem] md:grid-cols-4 md:gap-3']">
      <div
        v-for="(photo, index) in photos"
        :key="photo"
        class="mosaic-item group cursor-pointer overflow-hidden"
        :class="spanClass(index)"
        :style="{ transitionDelay: `${(index % 4) * 90}ms` }"
        @click="openLightbox(index)"
      >
        <img
          :src="photo"
          :alt="`VIP Orchestra ${index + 1}`"
          loading="lazy"
          class="h-full w-full object-cover transition duration-700 group-hover:scale-110"
        />
      </div>
    </div>

    <Teleport to="body">
      <Transition name="lightbox">
        <div
          v-if="lightboxIndex !== null"
          class="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 p-4"
          @click="closeLightbox"
        >
          <button
            type="button"
            class="absolute right-4 top-4 z-10 flex h-10 w-10 items-center justify-center text-text/70 transition-colors hover:text-text"
            aria-label="Close"
            @click.stop="closeLightbox"
          >
            <svg class="h-7 w-7" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
              <path d="M4 4l16 16M20 4L4 20" />
            </svg>
          </button>

          <button
            v-if="photos.length > 1"
            type="button"
            class="absolute left-4 top-1/2 z-10 flex h-10 w-10 -translate-y-1/2 items-center justify-center text-text/70 transition-colors hover:text-text"
            aria-label="Previous"
            @click.stop="prevPhoto"
          >
            <svg class="h-8 w-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
              <path d="M15 6l-6 6 6 6" />
            </svg>
          </button>

          <img
            :src="photos[lightboxIndex]"
            :alt="`VIP Orchestra ${lightboxIndex + 1}`"
            class="max-h-[90vh] max-w-[90vw] object-contain"
            @click.stop
          />

          <button
            v-if="photos.length > 1"
            type="button"
            class="absolute right-4 top-1/2 z-10 flex h-10 w-10 -translate-y-1/2 items-center justify-center text-text/70 transition-colors hover:text-text"
            aria-label="Next"
            @click.stop="nextPhoto"
          >
            <svg class="h-8 w-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
              <path d="M9 6l6 6-6 6" />
            </svg>
          </button>
        </div>
      </Transition>
    </Teleport>
  </section>
</template>

<script setup lang="ts">
import { onBeforeUnmount, onMounted, ref, watch } from 'vue'
import { useBodyScrollLock } from '~/composables/useBodyScrollLock'

interface PhotoGalleryProps {
  photos: string[]
  title?: string
  fullWidth?: boolean
}

const props = withDefaults(defineProps<PhotoGalleryProps>(), {
  title: undefined,
  fullWidth: false
})

const pattern = ['col-span-2 row-span-2', '', 'row-span-2', '', 'col-span-2', '', '', 'col-span-2 row-span-2']

const spanClass = (index: number) => pattern[index % pattern.length]

const lightboxIndex = ref<number | null>(null)
const { lock, unlock } = useBodyScrollLock()

const openLightbox = (index: number) => {
  lightboxIndex.value = index
}

const closeLightbox = () => {
  lightboxIndex.value = null
}

const nextPhoto = () => {
  if (lightboxIndex.value !== null) {
    lightboxIndex.value = (lightboxIndex.value + 1) % props.photos.length
  }
}

const prevPhoto = () => {
  if (lightboxIndex.value !== null) {
    lightboxIndex.value = (lightboxIndex.value - 1 + props.photos.length) % props.photos.length
  }
}

const handleKeydown = (e: KeyboardEvent) => {
  if (lightboxIndex.value === null) return
  if (e.key === 'Escape') closeLightbox()
  else if (e.key === 'ArrowRight') nextPhoto()
  else if (e.key === 'ArrowLeft') prevPhoto()
}

watch(lightboxIndex, (index) => {
  if (index !== null) lock()
  else unlock()
})

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
  window.addEventListener('keydown', handleKeydown)
})

onBeforeUnmount(() => {
  observer?.disconnect()
  window.removeEventListener('keydown', handleKeydown)
  unlock()
})
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
.lightbox-enter-active,
.lightbox-leave-active {
  transition: opacity 0.3s ease;
}
.lightbox-enter-from,
.lightbox-leave-to {
  opacity: 0;
}
</style>
