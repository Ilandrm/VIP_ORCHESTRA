<template>
  <div>
    <VideoBackground src="videos/event_video.mp4" >
      <template #scroll-indicator>
        <ScrollIndicator />
      </template>
    </VideoBackground>

    <VideoMosaic subtitle="FROM THE FIRST NOTE TO THE LAST DANCE" :videos="projects">
      <template #title>
        <h3 class="text-4xl leading-tight tracking-wide md:text-6xl sign">
          We <span class="text-gold">inspire</span> you
        </h3>
      </template>
    </VideoMosaic>

    <ProjectsGrid subtitle="POUR TOUS VOS EVENEMENTS" :projects="projectsInGrid" size="3">
    </ProjectsGrid>

    <LogoVideoSection title="Ils nous font confiance" :src="withBaseUrl('/videos/logo-wedding.mp4')" :logos="brandLogos"/>

    <ClientsShowcase title=" Fais de ta vie un rêve, et d'un rêve une réalité" :clients="clients" />

    <section class="px-6 py-16 text-center md:py-24">
      <AppButton to="/contact" label="Contact us" variant="primary" class="inline-flex" />
    </section>
  </div>
</template>

<script setup lang="ts">
import VideoBackground from '~/components/media/VideoBackground.vue'
import ScrollIndicator from '~/components/ui/ScrollIndicator.vue'
import VideoMosaic from '~/components/sections/VideoMosaic.vue'
import ProjectsGrid, { type Project } from '~/components/sections/ProjectsGrid.vue'
import LogoVideoSection from '~/components/sections/LogoVideoSection.vue'
import ClientsShowcase from '~/components/sections/ClientsShowcase.vue'
import AppButton from '~/components/ui/AppButton.vue'
const brandLogos: string[] = [
  '/brand/ct-traiteur-1.png',
  '/brand/fatal-1.png',
  '/brand/intercontinental.png',
  '/brand/hilton.png',
  '/brand/meridien.png',
  '/brand/photographe-mariage-video-mariage.png',
  '/brand/trianon.png',
  '/brand/potel.png',
  '/brand/wagram.png',
  '/brand/westin.png',
  '/brand/pavillon.png',
  '/brand/collectionneur.png'

].map(withBaseUrl)

const projects: Project[] = [
  { title: 'Ceremony', poster: withBaseUrl('/img_site_vip/IMG_6725.jpeg') },
  { title: 'Cocktail', poster: withBaseUrl('/img_site_vip/IMG_6729.jpeg') },
  { title: 'Dinner', poster: withBaseUrl('/img_site_vip/IMG_6735.jpeg') },
  { title: 'Party', poster: withBaseUrl('/img_site_vip/IMG_6743.jpeg') }
]
const projectsInGrid: Project[] = [
  { title: 'MARIAGE', poster: withBaseUrl('/images/elena-de-soto-w423NnHFjFg-unsplash-768x768.jpg') },
  { title: 'CEREMONIE', poster: withBaseUrl('/img_site_vip/IMG_6739.jpeg') },
  { title: 'CORPORATE', poster: withBaseUrl('/images/britt-gaiser-hSAlu33padA-unsplash-768x768.jpg') },
  { title: 'RÉCEPTION PRIVÉE', poster: withBaseUrl('/images/chuttersnap-aEnH4hJ_Mrs-unsplash-768x768.jpg') }
]
const clients: string[] = [
  'Kim Kardashian',
  'Jorge Mendes',
  'David Beckham',
  'Thibaut Courtois',
  'Marco Verratti',
  'Alvaro Morata',
  'King of Morocco',
  'Luca Cordero di Montezemolo',
  'The Ferragamo Family',
  'The Versace Family',
  'Robert Lewandowski',
  'Ryan Seacrest',
  'Walmart Family',
  'Stephen Allen Schwarzman',
  'Emir of Qatar',
  'Michael Schumacher Daughter',
  'Dassault Family',
  'Prince Albert de Monaco',
  'Mittal Family',
  'Sultana of Brunei'
]

useSeoMeta({
  title: 'Vip Orchestra - evenement',
  description:
    '"Music is the universal language of celebration and love" It reveals the beauty and uniqueness of your Love Story. Live music band for luxury events.'
})
</script>
<style>
.sign{
  font-family: 'Brittany Signature', cursive;
}
.text-gold {
  color: #bca45d;
}
</style>