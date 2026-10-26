<template>
  <div>
    <VideoBackground src="videos/stage.mp4" />

    <section class="grid md:grid-cols-2">
      <img :src="withBaseUrl('/gallery/photo-3.jpg')" alt="VIP Orchestra Residence" loading="lazy" class="h-80 w-full object-cover md:h-full" />
      <div class="flex flex-col justify-center px-6 py-16 text-center md:px-16">
        <p class="text-xs font-light uppercase tracking-[0.3em] text-text/70 md:text-sm">Hotel · Bar · Restaurant</p>
        <h1 class="sign mt-6 text-4xl tracking-wide text-gold md:text-6xl">Residence</h1>
        <div class="mt-10 space-y-6 text-sm leading-loose tracking-wide text-text/90 md:text-base">
          <p>VIP Orchestra Residence offers a complete artistic experience to elevate your venue.</p>
          <p>
            We create a bespoke artistic and musical programme, perfectly in tune with the essence of your establishment.
            Every performance is designed to offer your guests a true sensory experience, an emotional journey that
            reflects the identity of your venue.
          </p>
          <p>
            From live shows to musical performances, we stage unique moments in harmony with your values and your vision.
          </p>
        </div>
      </div>
    </section>

    <section>
      <img :src="withBaseUrl('/gallery/photo-9.jpg')" alt="VIP Orchestra" loading="lazy" class="h-72 w-full object-cover md:h-[32rem]" />
    </section>

    <section class="flex items-center justify-center gap-8 px-6 py-16 md:gap-20 md:py-24">
      <img v-for="logo in logos" :key="logo" :src="logo" alt="" class="h-16 w-auto max-w-[22%] object-contain md:h-24 md:max-w-[160px]" />
    </section>
  </div>
</template>

<script setup lang="ts">
import VideoBackground from '~/components/media/VideoBackground.vue'

const logos: string[] = ['intercontinental', 'hilton', 'meridien', 'trianon'].map(name => withBaseUrl(`/brand/${name}.png`))

useSeoMeta({
  title: 'Residence – VIP Orchestra',
  description: 'Live music residencies for hotels, restaurants and clubs by VIP Orchestra.'
})
</script>
