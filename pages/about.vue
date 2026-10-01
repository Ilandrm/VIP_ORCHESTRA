<template>
  <div>
    <VideoBackground src="videos/about_video.mp4" >
      <template #scroll-indicator>
        <ScrollIndicator />
      </template>
    </VideoBackground>

    <section class="px-6 py-20 md:px-10 md:py-28">
      <span class="mx-auto mt-14 block w-[70%] text-center text-sm leading-loose tracking-wide text-text/90 md:text-base">
        C'est depuis sa jeune création que l'étoile montante des orchestres, VIP Orchestra, a su donner un nouveau souffle au rêve Musical . Basé sur un concept innovant, rempli de talents les plus convoités de la thunder coins hold and winCapitale, VIP Orchestra s'invite dans les soirées privées les plus prisées. Passant par les remix du DJ, aux medley de l'Orchestre complet, le groupe met en oeuvre son savoir faire pour répondre aux demandes les plus exigeantes
      </span>
      <h3 class="sign mt-16 text-center text-4xl tracking-wide text-gold md:text-6xl">
        Nos services
      </h3>
      <p class="font-playfair-italic mx-auto mt-6 max-w-3xl text-center text-lg text-text/60 md:text-xl">
        — des instants uniques, pensés pour vous —
      </p>
      <span class="mx-auto mt-14 block w-[70%] text-center text-sm leading-loose tracking-wide text-text/90 md:text-base">
        Notre équipe vous conseille et vous accompagne tout au long de la préparation et de l'exécution de votre événement, à votre disposition pour faire évoluer, en toute réactivité..

Passant par les remix du DJ, aux medley de l'Orchestre complet, le groupe met en oeuvre son savoir faire pour répondre aux demandes les plus exigeantes qu'elles soient. Des shows uniques constamment repris et modernisés pour un instant sensationnel.
      </span>
    </section>

    <section class="px-6 pb-24 md:px-10">
      <NuxtLink to="/team" class="group mx-auto block max-w-5xl overflow-hidden">
        <div class="relative">
          <img
            :src="withBaseUrl('/img_site_vip/IMG_6725.jpeg')"
            alt="Découvrir nos artistes"
            class="opacity-75 grayscale h-72 w-full object-cover transition-transform duration-700 group-hover:scale-105 md:h-[28rem]"
          />
          <div class="absolute inset-0 flex flex-col items-center justify-center bg-bg/40 transition-colors duration-500 group-hover:bg-bg/20">
            <h2 class="sign text-center text-5xl text-white md:text-7xl ">Découvrir nos artistes</h2>

          </div>
        </div>
      </NuxtLink>
    </section>

    <InstagramFeed :limit="9" />
    <section class="px-6 py-16 text-center md:py-24">
      <AppButton to="/contact" label="Contact us" variant="primary" class="inline-flex" />
    </section>
  </div>
</template>

<script setup lang="ts">
import ScrollIndicator from '~/components/ui/ScrollIndicator.vue'
import AppButton from '~/components/ui/AppButton.vue'
import VideoBackground from '~/components/media/VideoBackground.vue'

useSeoMeta({
  title: 'Vip Orchestra - Corporate',
  description:
    'We understand the importance of making a true professional impact that creates memorable memories with your employees and guests.'
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