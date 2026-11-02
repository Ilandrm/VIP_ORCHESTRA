<template>
  <div>
    <VideoBackground src="videos/stage.mp4" />

    <section class="grid md:grid-cols-2">
      <img :src="withBaseUrl('/gallery/photo-3.jpg')" alt="VIP Orchestra Residence" loading="lazy" class="h-80 w-full object-cover md:h-full" />
      <div class="flex flex-col justify-center px-16 py-8 text-center md:px-32 md:py-12">
        <p class="text-xs font-light uppercase tracking-[0.3em] text-text/70 md:text-xs">Hotel · Bar · Restaurant</p>
        <h1 class="sr-only">Residence</h1>
        <div class="mt-6 space-y-5 text-[13px] leading-loose tracking-wide text-text/90 md:text-sm">
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
        <div class="mt-8 text-center">
          <AppButton to="/contact" label="Contact us" variant="text" class="inline-flex" />
        </div>
      </div>
    </section>

    <section>
      <img :src="withBaseUrl('/gallery/photo-14.jpg')" alt="VIP Orchestra" loading="lazy" class="h-72 w-full object-cover object-[50%_35%] md:h-[32rem]" />
    </section>

    <section class="overflow-hidden py-10 md:py-16">
      <div class="marquee-track flex w-max items-center gap-12 md:gap-20">
        <img v-for="(logo, i) in doubledLogos" :key="i" :src="logo" alt="" class="h-12 w-auto shrink-0 object-contain md:h-20" />
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import AppButton from '~/components/ui/AppButton.vue'
import VideoBackground from '~/components/media/VideoBackground.vue'

const logos = useBrandLogos()
const doubledLogos = [...logos, ...logos]

useSeoMeta({
  title: 'Residence – VIP Orchestra',
  description: 'Live music residencies for hotels, restaurants and clubs by VIP Orchestra.'
})
</script>
