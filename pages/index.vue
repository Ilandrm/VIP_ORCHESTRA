<template>
  <div>
    <VideoBackground src="videos/home.mp4">
      <div class="flex h-full flex-col items-center justify-center px-6 text-center">
      </div>
    </VideoBackground>

    <section class=" px-6 py-24 text-stone-50 md:px-10">
      <div class="mx-auto grid max-w-6xl items-start gap-12 md:grid-cols-2">
        <p class=" sign text-left text-4xl leading-tight text-white md:text-5xl">
          Your event, our rhythm
        </p>
        <br/>
        <div>
          <p class="font-playfair-italic text-2xl text-stone-300 md:text-3xl">Not quite a concert.</p>
          <p class="font-playfair-italic mt-1 text-2xl text-white md:text-3xl">
            Not quite
            <span class="relative inline-block px-2">
              a party.
              <svg class="absolute -inset-2 h-[calc(100%+1rem)] w-[calc(100%+1rem)]" viewBox="0 0 200 60" preserveAspectRatio="none">
                <ellipse cx="100" cy="30" rx="98" ry="28" fill="none" stroke="white" stroke-width="1.5" />
              </svg>
            </span>
            <p class="font-playfair-italic text-2xl text-stone-300 md:text-3xl">Definitely a VIP experience.</p>

          </p>

          <div class="mt-12 max-w-prose space-y-6">
            <p class="leading-relaxed text-stone-300">
              VIP Orchestra transforme chaque événement en un moment qui se vit autant qu’il s’écoute.
            </p>
            <p class="leading-relaxed text-stone-300">
              Des premières notes aux dernières heures de la nuit, nos artistes créent une expérience live pensée autour de vous, de votre public et de l’énergie de chaque instant.
            </p>
          </div>
        </div>

        <div class="flex justify-start md:justify-end">
          <p class="text-left text-2xl leading-tight text-white md:text-right md:text-3xl">
            YOU BRING THE PEOPLE.
            <br />
            <span class="text-stone-400">WE MAKE IT UNFORGETTABLE.</span>
          </p>
        </div>
      </div>
    </section>

    <section class="bg-black px-6 py-16 text-stone-50 md:px-10">
      <div class="mx-auto max-w-6xl">
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-2">
          <div class="md:contents">
            <NuxtLink to="/event" class="block">
              <img
                  :src="withBaseUrl('/img_site_vip/IMG_6738.jpeg')"
                  alt="VIP Orchestra"
                  class="h-64 w-full object-cover transition-opacity hover:opacity-90 md:h-96"
              />
            </NuxtLink>
            <NuxtLink to="/event" class="text-gold font-playfair transition-colors hover:text-stone-300 text-center md:hidden text-sm">EVENT</NuxtLink>
          </div>

          <div class="md:contents">
            <NuxtLink to="/about" class="block">
              <img
                  :src="withBaseUrl('/img_site_vip/IMG_6741.jpeg')"
                  alt="VIP Orchestra"
                  class="h-64 w-full object-cover transition-opacity hover:opacity-90 md:h-96"
              />
            </NuxtLink>
            <NuxtLink to="/about" class="text-gold font-playfair transition-colors hover:text-stone-300 text-center md:hidden text-sm">US</NuxtLink>
          </div>

          <div class="md:contents">
            <NuxtLink to="/team" class="block">
              <img
                  :src="withBaseUrl('/img_site_vip/IMG_6746.jpeg')"
                  alt="VIP Orchestra"
                  class="h-64 w-full object-cover transition-opacity hover:opacity-90 md:h-96"
              />
            </NuxtLink>
            <NuxtLink to="/team" class="text-gold font-playfair transition-colors hover:text-stone-300 text-center md:hidden text-sm">TEAM</NuxtLink>
          </div>
        </div>

        <div class="hidden md:flex flex-col gap-6 md:flex-row md:items-start md:justify-between md:gap-0 mt-10">
          <NuxtLink to="/event" class=" text-gold font-playfair transition-colors hover:text-stone-300 md:text-2xl ">EVENT</NuxtLink>
          <NuxtLink to="/about" class="text-gold font-playfair transition-colors hover:text-stone-300 md:ml-24 md:text-2xl">US</NuxtLink>
          <NuxtLink to="/team" class="text-gold font-playfair transition-colors hover:text-stone-300 md:ml-24 md:text-2xl">TEAM</NuxtLink>
        </div>

        <p class="font-playfair-italic mt-8 max-w-sm text-3xl leading-tight text-white md:text-4xl">
          Just a little something you might like...
        </p>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import VideoBackground from '~/components/media/VideoBackground.vue'

useSeoMeta({
  title: 'Vip Orchestra',
  description: "Let's dream together ! Live Music & Entertainment, Worldwide Agency."
})
</script>

<style>
.sign {
  font-family: 'Brittany Signature', cursive;
}
</style>

