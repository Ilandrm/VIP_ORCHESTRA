<template>
  <div>
    <section class="bg-bg px-6 pb-16 pt-20 md:px-10 md:pb-20 md:pt-24">
      <h2 class="text-center text-3xl tracking-wide md:text-5xl sign">Follow us on Instagram</h2>
      <p class="font-playfair-italic mt-8 text-center text-sm text-text/60 md:text-base">
        Un aperçu de nos plus beaux moments...
      </p>
      <div class="mx-auto mt-10 max-w-5xl">
        <InstagramFeed :limit="9" />
      </div>
    </section>
    <footer class="border-t border-text/10 bg-bg px-6 py-16 text-center md:px-10 md:py-24">
    <h2 class="text-2xl font-semibold uppercase tracking-widest text-text">Follow Us</h2>

    <ul class="mt-8 flex items-center justify-center gap-6">
      <li v-for="social in socialLinks" :key="social.name">
        <a
          :href="social.href"
          target="_blank"
          rel="noopener noreferrer"
          class=" inline-flex h-10 w-10 items-center justify-center rounded-full border border-text/20 transition-colors duration-300 hover:border-accent"
          :aria-label="social.name"
        >
          <img :src="social.icon" :alt="social.name" class="h-4 w-4 white-filter" />
        </a>
      </li>
    </ul>

    <p class="mt-10 text-sm text-text/70">
      2026 &copy; All rights reserved - VIP ORCHESTRA
      <br />
      <NuxtLink to="/legal-notice" class="transition-colors duration-300 hover:text-accent">Legal Notice</NuxtLink>
      -
      <NuxtLink to="/privacy-policy" class="transition-colors duration-300 hover:text-accent">Privacy Policy</NuxtLink>
    </p>
    </footer>
  </div>
</template>

<script setup lang="ts">
import InstagramFeed from '~/components/media/InstagramFeed.vue'

const socialLinks = [
  { name: 'Instagram', href: 'https://www.instagram.com/vip_orchestra/', icon: withBaseUrl('/images/instagram.svg') },
  { name: 'TikTok', href: 'https://www.tiktok.com/@vip.orchestra?lang=fr', icon: withBaseUrl('/images/tiktok.svg') },
  { name: 'YouTube', href: 'https://www.youtube.com/user/viporchestra', icon: withBaseUrl('/images/youtube.svg') },
  { name: 'LinkedIn', href: 'https://www.linkedin.com/company/vip-orchestra-jsk-events/home/', icon: withBaseUrl('/images/linkedin.svg') }
]
</script>
<style>
.white-filter {
  filter: invert(1);
}
.sign {
  font-family: 'Brittany Signature', cursive;
}
</style>