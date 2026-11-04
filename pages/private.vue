<template>
  <div>
    <VideoBackground src="videos/private.mp4" />

    <section class="px-6 pt-10 text-center md:pt-16">
      <div class="mx-auto max-w-3xl space-y-6 text-[13px] leading-loose tracking-wide text-text/90 md:text-[14px]">
        <p class="font-bold">
          From the first notes of the ceremony to the last dance of the night, VIP Orchestra designs a musical journey
          around your story.
        </p>
        <p>
          Live performers, contemporary arrangements and a fully tailor-made production bring emotion and energy to
          every moment of your wedding or private celebration.
        </p>
      </div>
    </section>

    <PhotoGallery :photos="photos" full-width compact />

    <section class="px-6 pb-3 pt-2 text-center md:pb-5 md:pt-4">
      <AppButton to="/contact" label="Contact us" variant="text" class="inline-flex" />
    </section>
  </div>
</template>

<script setup lang="ts">
import VideoBackground from '~/components/media/VideoBackground.vue'
import PhotoGallery from '~/components/sections/PhotoGallery.vue'
import AppButton from '~/components/ui/AppButton.vue'

const photoFiles: string[] = [
  '19-12-VIP-Armenonville-0019.jpg',
  '2019-10-VIP-Baltard-0045-copie-scaled.jpg',
  '2019-10-VIP-Baltard-0050-copie-scaled.jpg',
  'IMG_1873-scaled.jpg',
  'IMG_1921-scaled.jpg',
  'IMG_1950-scaled.jpg',
  'IMG_2676-scaled.jpg',
  'IMG_2866-scaled.jpg',
  'IMG_2935-scaled.jpg',
  'IMG_3085-scaled.jpg',
  'IMG_3149-scaled.jpg',
  'PHOTO-2025-03-25-15-28-05-scaled.jpg',
  'VIP-ORCHESTRA-100-scaled.jpg',
  'VIP-ORCHESTRA-101-scaled.jpg',
  'VIP-ORCHESTRA-103-scaled.jpg',
  'VIP-ORCHESTRA-108-scaled.jpg',
  'VIP-ORCHESTRA-109-scaled.jpg',
  'VIP-ORCHESTRA-2023-0317-scaled.jpeg',
  'VIP-ORCHESTRA-2-100-scaled.jpg',
  'VIP-ORCHESTRA-2-102-scaled.jpg',
  'VIP-ORCHESTRA-2-108-scaled.jpg',
  'VIP-ORCHESTRA-2-10-scaled.jpg',
  'VIP-ORCHESTRA-2-111-copie-scaled.jpg',
  'VIP-ORCHESTRA-2-115-scaled.jpg',
  'VIP-ORCHESTRA-2-121-scaled.jpg',
  'VIP-ORCHESTRA-2-129-scaled.jpg',
  'VIP-ORCHESTRA-2-136-scaled.jpg',
  'VIP-ORCHESTRA-2-138-scaled.jpg',
  'VIP-ORCHESTRA-2-139-scaled.jpg',
  'VIP-ORCHESTRA-2-140-scaled.jpg'
]

const photos: string[] = photoFiles.map(file => withBaseUrl(`/img_vip_final/${file}`))

useSeoMeta({
  title: 'Private – VIP Orchestra',
  description: 'Weddings and private celebrations: VIP Orchestra creates unforgettable live music experiences.'
})
</script>