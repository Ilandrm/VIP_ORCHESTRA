<template>
  <div>
    <section class="px-6 py-4 text-center md:py-8">
      <h1 class="sign text-3xl tracking-wide text-gold md:text-5xl">Private</h1>
      <p class="font-playfair-italic mt-6 text-base text-text/70 md:text-xl">Weddings &amp; private celebrations</p>
      <div class="mx-auto mt-12 max-w-3xl space-y-6 text-[13px] leading-loose tracking-wide text-text/90 md:text-sm">
        <p>
          From the first notes of the ceremony to the last dance of the night, VIP Orchestra designs a musical journey
          around your story.
        </p>
        <p>
          Live performers, contemporary arrangements and a fully tailor-made production bring emotion and energy to
          every moment of your wedding or private celebration.
        </p>
      </div>
    </section>

    <PhotoGallery :photos="photos" />

    <section class="px-6 py-4 text-center md:py-8">
      <AppButton to="/contact" label="Contact us" variant="primary" class="inline-flex" />
    </section>
  </div>
</template>

<script setup lang="ts">
import PhotoGallery from '~/components/sections/PhotoGallery.vue'
import AppButton from '~/components/ui/AppButton.vue'

const photos: string[] = Array.from({ length: 12 }, (_, index) => withBaseUrl(`/gallery/photo-${index + 1}.jpg`))

useSeoMeta({
  title: 'Private – VIP Orchestra',
  description: 'Weddings and private celebrations: VIP Orchestra creates unforgettable live music experiences.'
})
</script>
