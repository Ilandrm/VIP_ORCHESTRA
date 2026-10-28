<template>
  <div>
    <section class="grid md:grid-cols-2">
      <img :src="withBaseUrl('/gallery/photo-2.jpg')" alt="VIP Orchestra" loading="lazy" class="h-80 w-full object-cover md:h-full" />
      <div class="flex flex-col justify-center px-10 py-10 text-center md:px-24 md:py-16">
        <h1 class="sign text-3xl leading-tight tracking-wide text-gold md:text-5xl">More than music, an experience.</h1>
        <div class="mt-6 space-y-5 text-[13px] leading-loose tracking-wide text-text/90 md:text-sm">
          <p v-for="paragraph in firstHalf" :key="paragraph">{{ paragraph }}</p>
        </div>
      </div>
    </section>

    <section class="grid md:grid-cols-2">
      <div class="order-2 flex flex-col justify-center px-10 py-10 text-center md:order-1 md:px-24 md:py-16">
        <div class="space-y-5 text-[13px] leading-loose tracking-wide text-text/90 md:text-sm">
          <p v-for="paragraph in secondHalf" :key="paragraph">{{ paragraph }}</p>
          <p class="font-playfair-italic text-base text-text md:text-lg">One stage. Endless energy. Unforgettable moments.</p>
        </div>
      </div>
      <img :src="withBaseUrl('/gallery/photo-5.jpg')" alt="VIP Orchestra" loading="lazy" class="order-1 h-80 w-full object-cover md:order-2 md:h-full" />
    </section>

    <section class="px-6 py-10 text-center md:px-10 md:py-16">
      <div class="mx-auto grid max-w-4xl gap-10 md:grid-cols-2">
        <article v-for="creator in creators" :key="creator.name">
          <img :src="creator.photo" :alt="creator.name" class="mx-auto h-48 w-48 rounded-2xl object-cover" />
          <h3 class="mt-4 text-base uppercase tracking-[0.25em] text-text">{{ creator.name }}</h3>
          <p class="font-playfair-italic mt-2 text-base text-text/70">{{ creator.role }}</p>
          <p class="mx-auto mt-3 max-w-sm text-[13px] leading-loose text-text/90 md:text-sm">{{ creator.bio }}</p>
        </article>
      </div>
    </section>

    <section class="px-6 pb-10 text-center md:pb-16">
      <AppButton to="/contact" label="Contact us" variant="primary" class="inline-flex" />
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

const firstHalf = paragraphs.slice(0, 4)
const secondHalf = paragraphs.slice(4)

useSeoMeta({
  title: 'About us – VIP Orchestra',
  description: 'More than music, an experience. Discover VIP Orchestra, a creative entertainment and event production company.'
})
</script>
