<template>
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
</template>

<script setup lang="ts">
const socialLinks = [
  { name: 'Instagram', href: 'https://www.instagram.com/inspirationlivemusic/', icon: withBaseUrl('/images/instagram.svg') },
  { name: 'TikTok', href: 'https://www.tiktok.com/@inspirationmusicart?lang=fr', icon: withBaseUrl('/images/tiktok.svg') },
  { name: 'YouTube', href: 'https://www.youtube.com/channel/UCC5S-aYgmHOKmmbzlxHNO8g', icon: withBaseUrl('/images/youtube.svg') },
  { name: 'LinkedIn', href: 'https://fr.linkedin.com/company/inspirationlivemusicconcept', icon: withBaseUrl('/images/linkedin.svg') }
]
</script>
<style>
.white-filter {
  filter: invert(1);
}
</style>