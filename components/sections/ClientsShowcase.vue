<template xmlns="http://www.w3.org/1999/html">
  <section class="wrap-client px-6 py-16 text-center md:py-24">
    <h2 class="center text-3xl tracking-wide md:text-5xl sign">{{ title }}</h2>
    <p class="font-playfair-italic mx-auto mt-6 max-w-3xl text-lg text-text/60 md:text-xl">
      — chaque note, un souvenir —
    </p>
    <p class="mx-auto mt-10 max-w-4xl space-y-6 text-sm leading-loose tracking-wide md:text-base">
      <span class="block text-text">
        Orchestra s'occupe pour vous de toute la gestion logistique et artistique de votre évènement en France ou à l'International (Concerts, Plateaux télé, Festivals, Congrès, Expositions, Spectacles...), en mettant à disposition l'ensemble de son savoir faire et de son parc de matériel.
      </span>
      <span class="block text-text">
Afin de vous permettre une organisation sereine, simple et efficace, nous prenons en charge de A à Z la programmation de votre événement, tant sur le plan musical que décoratif, la réservation et le choix de votre salle, traiteur, transport.
      </span>
      <span class="block text-text">
        Nous explorons sans cesse les meilleures adresses afin de vous proposer des prestations haut de gamme, créatives et différentes. Be VIP.
      </span>
    </p>
  </section>
</template>

<script setup lang="ts">
interface ClientsShowcaseProps {
  title: string
  clients: string[]
}

defineProps<ClientsShowcaseProps>()
</script>
<style>
.sign {
  font-family: 'Brittany Signature', cursive;
}
</style>
