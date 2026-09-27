<template>
  <div class="px-6 py-24 md:py-32">
    <h2 class="text-center text-2xl font-semibold uppercase tracking-widest text-text md:text-3xl">Contact Us</h2>

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
</template>

<script setup lang="ts">
import { ref } from 'vue'
import ContactForm from '~/components/forms/ContactForm.vue'

const isConfirmed = ref(false)

const handleSubmit = () => {
  isConfirmed.value = true
}

useSeoMeta({
  title: 'Vip Orchestra - Contact',
  description: 'Get in touch with Vip Orchestra for your wedding, corporate or special event.'
})
</script>
