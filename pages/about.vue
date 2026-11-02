<template>
  <div>
    <section class="px-6 py-10 text-center md:px-10 md:py-16">
      <h1 class="sign text-xl leading-tight tracking-wide text-gold md:text-2xl">MORE THAN MUSIC. AN EXPERIENCE.</h1>
      <div class="mx-auto mt-6 max-w-2xl space-y-5 text-[13px] leading-loose tracking-wide text-text/90 md:text-sm">
        <p>{{ paragraphs[0] }}</p>
        <p v-for="(paragraph, i) in firstSectionParagraphs" :key="i" :class="{ 'font-bold': i % 2 === 0 }">{{ paragraph }}</p>
      </div>
      <div class="mt-8 text-center">
        <AppButton to="/contact" label="Contact us" variant="text" class="inline-flex" />
      </div>
    </section>

    <section class="relative h-[50vh] w-full overflow-hidden">
      <video autoplay loop muted playsinline class="absolute inset-0 h-full w-full object-cover">
        <source :src="withBaseUrl('/videos/about_video.mp4')" type="video/mp4" />
      </video>
      <div class="absolute inset-0 bg-bg/40" />
    </section>

    <section class="grid md:grid-cols-2">
      <div class="order-2 flex flex-col justify-center px-10 py-10 text-center md:order-1 md:px-24 md:py-16">
        <div class="space-y-5 text-[13px] leading-loose tracking-wide text-text/90 md:text-sm">
          <p class="font-bold text-accent">{{ paragraphs[4] }}</p>
          <p v-for="(paragraph, i) in secondSectionParagraphs" :key="i" :class="{ 'font-bold': i % 2 === 0 }">{{ paragraph }}</p>
          <p class="font-playfair-italic text-sm text-text md:text-base">One stage. Endless energy. Unforgettable moments.</p>
        </div>
        <div class="mt-8 text-center">
          <AppButton to="/contact" label="Contact us" variant="text" class="inline-flex" />
        </div>
      </div>
      <img :src="withBaseUrl('/gallery/photo-5.jpg')" alt="VIP Orchestra" loading="lazy" class="order-1 h-80 w-full object-cover md:order-2 md:h-full" />

    </section>

    <section class="px-6 py-10 text-center md:px-10 md:py-16">
      <div class="mx-auto grid max-w-4xl gap-10 md:grid-cols-2">
        <article v-for="creator in creators" :key="creator.name">
          <img :src="creator.photo" :alt="creator.name" class="mx-auto h-64 w-64 rounded-2xl object-cover" />
          <h3 class="mt-4 text-sm uppercase tracking-[0.25em] text-text">{{ creator.name }}</h3>
          <p class="font-playfair-italic mt-2 text-sm text-text/70">{{ creator.role }}</p>
          <p class="mx-auto mt-3 max-w-sm text-[13px] leading-loose text-text/90 md:text-sm">{{ creator.bio }}</p>
        </article>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import AppButton from '~/components/ui/AppButton.vue'

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

const firstSectionParagraphs = paragraphs.slice(1, 4)
const secondSectionParagraphs = paragraphs.slice(5)

useSeoMeta({
  title: 'About us – VIP Orchestra',
  description: 'More than music, an experience. Discover VIP Orchestra, a creative entertainment and event production company.'
})
</script>
