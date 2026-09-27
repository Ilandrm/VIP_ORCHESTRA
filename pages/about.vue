<template>
  <div>
    <YouTubeBackground video-id="cxYGkcW9Da8">
      <template #scroll-indicator>
        <ScrollIndicator />
      </template>
    </YouTubeBackground>
    <h3 class="text-3xl tracking-wide md:text-5xl sign text-gold text-center mt-6">
      A propos
    </h3>
    <span class="block w-[60%] mt-14 text-center mx-auto">C’est depuis sa jeune création que l’étoile montante des orchestres, VIP Orchestra, a su donner un nouveau souffle au rêve Musical . Basé sur un concept innovant, rempli de talents les plus convoités de la thunder coins hold and winCapitale, VIP Orchestra s’invite dans les soirées privées les plus prisées. Passant par les remix du DJ, aux medley de l’Orchestre complet, le groupe met en oeuvre son savoir faire pour répondre aux demandes les plus exigeantes</span>
    <h3 class="text-3xl tracking-wide md:text-5xl text-gold text-center mt-12">
      Nos services
    </h3>
    <span class="block w-[60%] mt-14 text-center mx-auto">Notre équipe vous conseille et vous accompagne tout au long de la préparation et de l’exécution de votre événement, à votre disposition pour faire évoluer, en toute réactivité..

Passant par les remix du DJ, aux medley de l’Orchestre complet, le groupe met en oeuvre son savoir faire pour répondre aux demandes les plus exigeantes qu’elles soient. Des shows uniques constamment repris et modernisés pour un instant sensationnel.</span>
    <InstagramFeed :limit="9" />
    <section class="px-6 py-16 text-center md:py-24">
      <AppButton to="/contact" label="Contact us" variant="primary" class="inline-flex" />
    </section>
  </div>
</template>

<script setup lang="ts">
import YouTubeBackground from '~/components/media/YouTubeBackground.vue'
import ScrollIndicator from '~/components/ui/ScrollIndicator.vue'
import ProjectsGrid, { type Project } from '~/components/sections/ProjectsGrid.vue'
import LogoVideoSection from '~/components/sections/LogoVideoSection.vue'
import AppButton from '~/components/ui/AppButton.vue'



useSeoMeta({
  title: 'Vip Orchestra - Corporate',
  description:
    'We understand the importance of making a true professional impact that creates memorable memories with your employees and guests.'
})
</script>
