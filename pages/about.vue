<template>
  <section class="px-6 py-16 text-center md:px-10 md:py-24">
    <h1 class="sign mx-auto max-w-4xl text-4xl leading-tight tracking-wide text-gold md:text-6xl">
      More than music, an experience.
    </h1>
    <div class="mx-auto mt-16 max-w-3xl space-y-8 text-sm leading-loose tracking-wide text-text/90 md:text-base">
      <p v-for="paragraph in paragraphs" :key="paragraph">{{ paragraph }}</p>
      <p class="font-playfair-italic text-lg text-text md:text-xl">One stage. Endless energy. Unforgettable moments.</p>
    </div>
  </section>
</template>

<script setup lang="ts">
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
