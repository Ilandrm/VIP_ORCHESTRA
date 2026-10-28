<template>
  <div>
    <VideoBackground src="videos/porsh.mp4" />

    <section class="px-6 py-16 text-center md:py-24">
      <h1 class="sign text-3xl tracking-wide text-gold md:text-5xl">Corporate</h1>
      <div class="mx-auto mt-12 max-w-3xl space-y-6 text-[13px] leading-loose tracking-wide text-text/90 md:text-sm">
        <p>
          Product launches, galas, fashion weeks and brand shows: VIP Orchestra brings live music and creative
          production to the most demanding corporate events around the world.
        </p>
        <p>
          With our own sound, lighting and visual capabilities, we take care of every artistic and technical detail
          from concept to performance.
        </p>
      </div>
    </section>

    <SquareTiles :tiles="tiles" />

    <PhotoGallery :photos="photos" />

    <LogoVideoSection title="They trusted us" :logos="brandLogos" />

    <section class="px-6 py-16 text-center md:py-18">
      <AppButton to="/contact" label="Contact us" variant="primary" class="inline-flex" />
    </section>
  </div>
</template>

<script setup lang="ts">
import VideoBackground from '~/components/media/VideoBackground.vue'
import PhotoGallery from '~/components/sections/PhotoGallery.vue'
import SquareTiles from '~/components/sections/SquareTiles.vue'
import LogoVideoSection from '~/components/sections/LogoVideoSection.vue'
import AppButton from '~/components/ui/AppButton.vue'

const tiles = [
  { title: 'Show', image: withBaseUrl('/gallery/photo-13.jpg') },
  { title: 'Fashion Week', image: withBaseUrl('/gallery/photo-14.jpg') },
  { title: 'Gala', image: withBaseUrl('/gallery/photo-15.jpg') },
  { title: 'Product launch', image: withBaseUrl('/gallery/photo-16.jpg') },
  { title: 'Production', image: withBaseUrl('/gallery/photo-17.jpg') }
]

const photos: string[] = [7, 8, 9, 10, 11, 12].map(index => withBaseUrl(`/gallery/photo-${index}.jpg`))

const brandLogos = useBrandLogos()

useSeoMeta({
  title: 'Corporate – VIP Orchestra',
  description: 'Corporate events, galas, fashion weeks and product launches: live entertainment by VIP Orchestra.'
})
</script>
