<template>
  <footer class="bg-bg px-6 pb-8 pt-24 text-center md:px-10 md:pt-32">
    <ul class="flex items-center justify-center gap-8">
      <li v-for="social in socialLinks" :key="social.name">
        <a
          :href="social.href"
          target="_blank"
          rel="noopener noreferrer"
          class="inline-flex transition-opacity duration-300 hover:opacity-60"
          :aria-label="social.name"
        >
          <img :src="social.icon" :alt="social.name" class="h-4 w-4 white-filter" />
        </a>
      </li>
    </ul>

    <p class="mt-8 text-xs font-light tracking-widest text-text/60">
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
</style>
