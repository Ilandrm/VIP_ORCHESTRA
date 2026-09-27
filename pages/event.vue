<template>
  <div>
    <HeroSliderVideo :slides="heroSlides">
      <template #scroll-indicator>
        <ScrollIndicator />
      </template>
    </HeroSliderVideo>

    <VideoMosaic subtitle="FROM THE FIRST NOTE TO THE LAST DANCE" :videos="projects">
      <template #title>
        <h3 class="text-4xl leading-tight tracking-wide md:text-6xl sign">
          We <span class="text-gold">inspire</span> you
        </h3>
      </template>
    </VideoMosaic>

    <ProjectsGrid subtitle="POUR TOUS VOS EVENEMENTS" :projects="projectsInGrid" size="3">
    </ProjectsGrid>

    <LogoVideoSection title="ILS NOUS FONT CONFIANCE" src="/videos/logo-wedding.mp4" :logos="brandLogos"/>

    <ClientsShowcase title=" Fais de ta vie un rêve, et d'un rêve une réalité" :clients="clients" />

    <section class="px-6 py-16 text-center md:py-24">
      <AppButton to="/contact" label="Contact us" variant="primary" class="inline-flex" />
    </section>
  </div>
</template>

<script setup lang="ts">
import HeroSliderVideo, { type HeroSlide } from '~/components/media/HeroSliderVideo.vue'
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
  '/brand/westin.png'
]
const heroSlides: HeroSlide[] = [
  { id: 'slide-1', type: 'image', image: '/images/slide0.jpeg' },
  { id: 'slide-2', type: 'image', image: '/images/slide1.jpg' },
  { id: 'slide-3', type: 'image', image: '/images/slide2.jpg' },
  { id: 'slide-4', type: 'image', image: '/images/slide3.jpg' },
  { id: 'slide-5', type: 'image', image: '/images/slide4.jpg' }
]

const projects: Project[] = [
  { title: 'Ceremony', src: '/videos/ceremony.mp4', poster: '/images/poster-min-ceremony.jpg' },
  { title: 'Cocktail', src: '/videos/cocktail.mp4', poster: '/images/poster-min-cocktail.jpg' },
  { title: 'Dinner', src: '/videos/dinner.mp4', poster: '/images/poster-min-dinner.jpg' },
  { title: 'Party', src: '/videos/party.mp4', poster: '/images/poster-min-party.jpg' }
]
const projectsInGrid: Project[] = [
  { title: 'ÉVÈNEMENTIEL', poster: '/images/elena-de-soto-w423NnHFjFg-unsplash-768x768.jpg' },
  { title: 'CORPORATE', poster: '/images/britt-gaiser-hSAlu33padA-unsplash-768x768.jpg' },
  { title: 'RÉCEPTION PRIVÉE', poster: '/images/chuttersnap-aEnH4hJ_Mrs-unsplash-768x768.jpg' }
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
  title: 'Vip Orchestra - Wedding',
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