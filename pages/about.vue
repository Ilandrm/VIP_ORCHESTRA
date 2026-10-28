<template>
  <section class="px-6 pb-8 pt-10 text-center md:px-10 md:pb-12 md:pt-16">
    <h1 class="sign mx-auto max-w-4xl text-3xl leading-tight tracking-wide text-gold md:text-5xl">
      More than music, an experience.
    </h1>
    <div class="mx-auto mt-8 max-w-3xl space-y-5 text-[13px] leading-loose tracking-wide text-text/90 md:text-sm">
      <p v-for="paragraph in paragraphs" :key="paragraph">{{ paragraph }}</p>
      <p class="font-playfair-italic text-base text-text md:text-lg">One stage. Endless energy. Unforgettable moments.</p>
    </div>
  </section>

  <PhotoGallery :photos="photos" class="!py-6 md:!py-8" />

  <section class="px-6 pb-10 pt-4 text-center md:px-10 md:pb-16 md:pt-6">
    <div class="mx-auto grid max-w-4xl gap-8 md:grid-cols-2">
      <article v-for="creator in creators" :key="creator.name">
        <img :src="creator.photo" :alt="creator.name" class="mx-auto h-48 w-48 rounded-2xl object-cover" />
        <h3 class="mt-4 text-base uppercase tracking-[0.25em] text-text">{{ creator.name }}</h3>
        <p class="font-playfair-italic mt-2 text-base text-text/70">{{ creator.role }}</p>
        <p class="mx-auto mt-3 max-w-sm text-[13px] leading-loose text-text/90 md:text-sm">{{ creator.bio }}</p>
      </article>
    </div>
  </section>
</template>

<script setup lang="ts">
import PhotoGallery from '~/components/sections/PhotoGallery.vue'

const photos: string[] = [1, 4, 7, 10, 13].map((n) => withBaseUrl(`/gallery/photo-${n}.jpg`))

const creators = [
  { name: 'Joseph', photo: withBaseUrl('/team/IMG_5210b-300x300.jpg'), role: 'Artistic Director', bio: 'Shapes the musical universe and creative vision of every VIP Orchestra performance.' },
  { name: 'Jonathan', photo: withBaseUrl('/team/IMG_5582-300x300.jpg'), role: 'Technical Director', bio: 'Oversees sound, lighting and production to ensure complete artistic and technical harmony.' }
]

const paragraphs: string[] = [
  'VIP Orchestra reimagines luxury entertainment, bringing together artistic creativity, musical excellence and a passion for extraordinary experiences.',
  'Founded and led by Joseph, Artistic Director, and Jonathan, Technical Director, VIP Orchestra was born from a shared vision: to transform every event into a unique and unforgettable celebration, where music, emotion and creativity come together.',
  'More than a live orchestra, VIP is a creative entertainment and event production company, designing fully bespoke experiences for prestigious weddings, exclusive private celebrations and corporate events around the world.',
  'From timeless classics to the latest international hits, our musical universe knows no boundaries. Combining exceptional live performers, contemporary arrangements and innovative artistic concepts, we create dynamic performances that transcend genres, cultures and generations.',
  'Every event is a new story to tell.',
  'From the first creative ideas to the final performance, our team works closely with each client to bring their vision to life, offering a seamless, tailor-made experience. With our own sound, lighting and visual production capabilities, we oversee every detail to ensure complete artistic and technical harmony.',
  "With over a decade of experience and performances across the world's most exclusive destinations, VIP Orchestra continues to push the boundaries of live entertainment, driven by creativity, passion and the belief that every celebration deserves to be extraordinary."
]

useSeoMeta({
  title: 'About us – VIP Orchestra',
  description: 'More than music, an experience. Discover VIP Orchestra, a creative entertainment and event production company.'
})
</script>
