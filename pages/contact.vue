<template>
  <div>
    <section class="relative h-[60vh] w-full overflow-hidden">
      <img
        :src="withBaseUrl('/img_site_vip/IMG_6745.jpeg')"
        alt="Contact us"
        class="h-full w-full object-cover"
      />
      <div class="absolute inset-0 bg-bg/40" />
      <div class="absolute inset-0 flex flex-col items-center justify-center px-6 text-center">
        <h1 class="sign text-6xl leading-tight text-white md:text-8xl">Contact us</h1>
      </div>
    </section>

    <div class="px-6 py-24 md:py-32">
      <div class="mx-auto mt-16 grid max-w-5xl gap-16 md:grid-cols-2">
        <ContactForm @submit="handleSubmit" />

        <div class="flex flex-col gap-4 text-sm uppercase tracking-widest text-text/80">
          <a href="mailto:info@inspiration-music.com" class="transition-colors duration-300 hover:text-accent">
            contact@vip-orchestra.com
          </a>
          <p>+33(0)6 63 10 93 86 / +33(0)1 44 70 71 99</p>
          <p>132 Rue Marius Aufan, 92300 Levallois-Perret</p>
        </div>
      </div>

      <p v-if="isConfirmed" class="mt-10 text-center text-sm uppercase tracking-widest text-accent">
        Merci, votre demande a bien été envoyée. Notre équipe vous recontactera rapidement.
      </p>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import ContactForm from '~/components/forms/ContactForm.vue'

const isConfirmed = ref(false)

const handleSubmit = () => {
  isConfirmed.value = true
}

useSeoMeta({
  title: 'Contactez-nous – VIP Orchestra',
  description:
    "Contactez VIP Orchestra pour vos mariages, événements d'entreprise ou soirées privées. Notre équipe vous répond rapidement."
})
</script>
<style>
.sign {
  font-family: 'Brittany Signature', cursive;
}
</style>
