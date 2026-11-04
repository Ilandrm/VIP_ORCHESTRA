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

    <section class="px-5 py-10 text-center md:px-24 md:py-16">
      <h2 class="sign mb-10 text-lg tracking-wide text-gold md:mb-12 md:text-xl">OUR TEAM</h2>
      <div class="mx-auto grid max-w-5xl grid-cols-3 justify-items-center gap-x-4 gap-y-8 md:grid-cols-5 md:gap-x-6 md:gap-y-12">
        <!-- Dernier membre seul sur sa ligne (16 membres : reste 1 en 3 et 5 colonnes) → colonne du milieu -->
        <article v-for="(creator, i) in creators" :key="creator.name" :class="i === creators.length - 1 ? 'col-start-2 md:col-start-3' : ''">
          <img :src="creator.photo" :alt="creator.name" class="mx-auto aspect-square w-full max-w-[110px] rounded-sm object-cover md:max-w-44" />
          <h3 class="mt-3 text-[10px] uppercase tracking-[0.15em] text-text md:mt-4 md:text-sm md:tracking-[0.25em]">{{ creator.name }}</h3>
          <p class="font-playfair-italic mt-1 text-[10px] text-text/70 md:mt-2 md:text-sm">{{ creator.role }}</p>
          <p class="mx-auto mt-3 hidden max-w-sm text-[13px] leading-loose text-text/90 md:block md:text-sm">{{ creator.bio }}</p>
        </article>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import AppButton from '~/components/ui/AppButton.vue'

const creators = [
  { name: 'Joseph', photo: withBaseUrl('/team/IMG_5210b-300x300.jpg'), role: 'Artistic Director' },
  { name: 'Jonathan', photo: withBaseUrl('/team/IMG_5582-300x300.jpg'), role: 'Technical Director'},
  {
    name: 'Cyril',
    role: 'Chanteur / Création artistique',
    photo: withBaseUrl('/team/LIO_2617-2-300x300.jpg')
  },
  {
    name: 'Charlotte',
    role: 'Chef de projet',
    photo: withBaseUrl('/team/IMG_9109-300x300.jpg')
  },
  {
    name: 'Fiona',
    role: 'Chef de projet',
    photo: withBaseUrl('/team/fiona.jpeg')
  },
  {
    name: 'Salomé',
    role: 'Chef de projet',
    photo: withBaseUrl('/team/salome.jpeg')
  },
  {
    name: 'Alexandra',
    role: 'Marketing',
    photo: withBaseUrl('/team/IMG_9110-300x300.jpg')
  },
  {
    name: 'John',
    role: 'DJ',
    photo: withBaseUrl('/team/John.jpg')
  },
  {
    name: 'Caroline',
    role: 'Violoniste',
    photo: withBaseUrl('/team/691526D4-2BBE-4009-8904-A2F1C7AE70F8_1_105_c-300x300.jpg')
  },
  {
    name: 'Marco',
    role: 'Saxophoniste',
    photo: withBaseUrl('/team/black-jazzman-plays-the-saxophone-on-stage-WL9RCSH-300x300.jpg')
  },
  {
    name: 'Filiz',
    role: 'Pianiste',
    photo: withBaseUrl('/team/IMG_0639-300x300.jpg')
  },
  {
    name: 'Landry',
    role: 'Guitariste',
    photo: withBaseUrl('/team/landry.jpg')
  },
  {
    name: 'Beverly',
    role: 'Percussioniste',
    photo: withBaseUrl('/team/beverly.jpg')
  },
  {
    name: 'Vampi',
    role: 'Chorégraphe',
    photo: withBaseUrl('/team/vampi.jpg')
  },
  {
    name: 'Maxime',
    role: 'Pupitreur Lumières',
    photo: withBaseUrl('/team/Maxime.jpg')
  },
  {
    name: 'Raphael',
    role: 'Ingénieur son',
    photo: withBaseUrl('/team/raph.jpeg')
  },
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
