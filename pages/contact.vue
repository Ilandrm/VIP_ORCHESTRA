<template>
  <div>
    <section class="relative h-[50vh] w-full overflow-hidden">
      <img :src="withBaseUrl('/img_site_vip/IMG_6745.jpeg')" alt="Contact us" class="h-full w-full object-cover" />
      <div class="absolute inset-0 bg-bg/40" />
    </section>

    <div class="px-6 pb-10 pt-4 text-center md:pb-16 md:pt-8">
      <h1 class="sign text-xl leading-tight tracking-wide text-gold md:text-2xl">CONTACT US</h1>

      <div class="mt-8 flex flex-col items-center gap-3 text-xs font-light uppercase tracking-[0.3em] text-text/80 md:text-sm">
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
