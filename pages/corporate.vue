<template>
  <div>
    <VideoBackground src="videos/porsh.mp4" />

    <section class="px-6 pt-10 text-center md:pt-16">
      <h1 class="sr-only">Corporate</h1>
      <div class="mx-auto max-w-3xl space-y-6 text-[13px] leading-loose tracking-wide text-text/90 md:text-[14px]">
        <p class="font-bold">
          Product launches, galas, fashion weeks and brand shows: VIP Orchestra brings live music and creative
          production to the most demanding corporate events around the world.
        </p>
        <p>
          With our own sound, lighting and visual capabilities, we take care of every artistic and technical detail
          from concept to performance.
        </p>
      </div>
    </section>
<section class="px-6 pt-10 text-center md:pt-16">
      <AppButton to="/contact" label="Contact us" variant="text" class="inline-flex" />
    </section>
    <SquareTiles :tiles="tiles" />

    <section class="relative h-[50vh] w-full overflow-hidden md:h-[60vh]">
      <video autoplay loop muted playsinline class="absolute inset-0 h-full w-full object-cover">
        <source :src="withBaseUrl('/videos/corporate_2.mp4')" type="video/mp4" />
      </video>
      <div class="absolute inset-0 bg-bg/30" />
    </section>

    <LogoVideoSection title="THEY TRUSTED US" :logos="brandLogos" />

    <PhotoGallery :photos="photos" full-width />


  </div>
</template>

<script setup lang="ts">
import VideoBackground from '~/components/media/VideoBackground.vue'
import PhotoGallery from '~/components/sections/PhotoGallery.vue'
import SquareTiles from '~/components/sections/SquareTiles.vue'
import LogoVideoSection from '~/components/sections/LogoVideoSection.vue'
import AppButton from '~/components/ui/AppButton.vue'

const tiles = [
  { title: 'Production', description: 'Full-service event production with sound, lighting and visual design tailored to your brand.', image: withBaseUrl('/gallery/photo-17.jpg') },
  { title: 'Show', description: 'Live performances and bespoke musical shows crafted for unforgettable brand experiences.', image: withBaseUrl('/gallery/photo-13.jpg') },
  { title: 'Gala', description: 'Elegant gala entertainment, from ceremony to finale, tailored to your vision.', image: withBaseUrl('/gallery/photo-15.jpg') }
]

const photos: string[] = [
  'VIP-ORCHESTRA-100-scaled.jpg',
  'VIP-ORCHESTRA-101-scaled.jpg',
  'VIP-ORCHESTRA-103-scaled.jpg',
  'VIP-ORCHESTRA-108-scaled.jpg',
  'VIP-ORCHESTRA-109-scaled.jpg',
  'VIP-ORCHESTRA-2-100-scaled.jpg',
  'VIP-ORCHESTRA-2-102-scaled.jpg',
  'VIP-ORCHESTRA-2-108-scaled.jpg',
  'VIP-ORCHESTRA-2-10-scaled.jpg',
  'VIP-ORCHESTRA-2-115-scaled.jpg',
  'VIP-ORCHESTRA-2-121-scaled.jpg',
  'VIP-ORCHESTRA-2-129-scaled.jpg',
  'VIP-ORCHESTRA-2-136-scaled.jpg',
  'VIP-ORCHESTRA-2-138-scaled.jpg',
  'VIP-ORCHESTRA-2-139-scaled.jpg',
  'VIP-ORCHESTRA-2-140-scaled.jpg',
  'VIP-ORCHESTRA-2-144-scaled.jpg',
  'VIP-ORCHESTRA-2-147-scaled.jpg',
  'VIP-ORCHESTRA-36-scaled.jpg',
  'VIP-ORCHESTRA-38-scaled.jpg',
  'VIP-ORCHESTRA-58-scaled.jpg',
  'VIP-ORCHESTRA-65-scaled.jpg',
  'VIP-ORCHESTRA-67-scaled.jpg',
  'VIP-ORCHESTRA-77-scaled.jpg',
  'VIP-ORCHESTRA-85-scaled.jpg',
  'VIP-ORCHESTRA-87-1-scaled.jpg',
  'VIP-ORCHESTRA-89-scaled.jpg',
  'VIP-ORCHESTRA-90-scaled.jpg',
  'VIP-ORCHESTRA-94-scaled.jpg',
  '2019-10-VIP-Baltard-0045-copie-scaled.jpg'
].map(file => withBaseUrl(`/img_vip_final/${file}`))

const brandLogos = useBrandLogos().filter(logo => !logo.includes('wagram-music'))

useSeoMeta({
  title: 'Corporate – VIP Orchestra',
  description: 'Corporate events, galas, fashion weeks and product launches: live entertainment by VIP Orchestra.'
})
</script>
