<template>
  <LegalContent title="Legal Notice" :sections="sections" />
</template>

<script setup lang="ts">
import LegalContent, { type LegalSection } from '~/components/sections/LegalContent.vue'

const sections: LegalSection[] = [
  {
    heading: 'Website Publisher',
    paragraphs: ['Vip Orchestra']
  },
  {
    heading: 'Represented by Jimmy Bitton',
    paragraphs: [
      'Headquarters: 66, Avenue Victor Hugo 75116 Paris, France',
      'Contact: info@inspiration-music.com',
      'Phone: +33.6.14.18.54.94'
    ]
  },
  {
    heading: 'Publication Director',
    paragraphs: ['Jimmy Bitton']
  },
  {
    heading: 'Hosting Provider',
    paragraphs: ['OVH', 'Address: 2, rue Kellermann, 59100 Roubaix', 'Phone: 1007']
  },
  {
    heading: 'Intellectual Property',
    paragraphs: [
      'All content on this website (text, images, videos, logos, graphics, etc.) is the exclusive property of Vip Orchestra or its partners. Any reproduction or use without prior written consent is strictly prohibited and may result in legal action.'
    ]
  }
]

useSeoMeta({
  title: 'Legal Notice - Vip Orchestra',
  description: 'Legal notice and publisher information for the Vip Orchestra website.'
})
</script>
