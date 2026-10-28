<template>
  <div>
    <section class="relative h-[50vh] w-full overflow-hidden">
      <img :src="withBaseUrl('/img_site_vip/IMG_6745.jpeg')" alt="Contact us" class="h-full w-full object-cover" />
      <div class="absolute inset-0 bg-bg/40" />
    </section>

    <div class="px-6 py-10 text-center md:py-16">
      <h1 class="sr-only">Contact us</h1>

      <div class="flex flex-col items-center gap-3 text-xs font-light uppercase tracking-[0.3em] text-text/80 md:text-sm">
        <a href="mailto:contact@vip-orchestra.com" class="transition-colors duration-300 hover:text-accent">
          contact@vip-orchestra.com
        </a>
        <a href="tel:+33663109386" class="transition-colors duration-300 hover:text-accent">+33 (0)6 63 10 93 86</a>
        <p>132 Rue Marius Aufan, 92300 Levallois-Perret</p>
      </div>

      <div class="mt-10 md:mt-12">
        <ContactForm @submit="handleSubmit" />
      </div>

      <p v-if="isConfirmed" class="mt-10 text-sm uppercase tracking-widest text-accent">
        Thank you, your request has been sent. Our team will get back to you shortly.
      </p>
    </div>

    <section class="px-6 pb-10 text-center md:px-10 md:pb-16">
      <h2 class="sign text-2xl tracking-wide md:text-4xl">Follow us on Instagram</h2>
      <div class="mx-auto mt-10 flex max-w-5xl items-center justify-center">
        <a href="https://www.instagram.com/vip_orchestra/" target="_blank" rel="noopener noreferrer" class="block w-full md:w-8/12">
          <img :src="withBaseUrl('/images/insta_test.jpeg')" alt="VIP Orchestra on Instagram" class="w-full object-cover transition-opacity hover:opacity-90" />
        </a>
      </div>
    </section>
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
  title: 'Contact us – VIP Orchestra',
  description: 'Contact VIP Orchestra for your weddings, corporate events or private parties.'
})
</script>
