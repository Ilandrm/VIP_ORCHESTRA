<template>
  <header
    class="fixed inset-x-0 top-0 z-50 transition-colors duration-500"
    :class="isMenuOpen ? 'bg-bg' : 'bg-bg/80 backdrop-blur'"
  >
    <div class="relative mx-auto flex max-w-7xl items-center justify-end px-6 py-6 md:justify-center md:px-10 md:py-7">
      <NuxtLink v-if="route.path !== '/'" to="/" class="absolute left-6 top-1/2 -translate-y-1/2 md:left-10" @click="handleNavClick">
        <img :src="withBaseUrl('/images/logo.png')" alt="VIP" class="white-filter h-12 w-12 md:h-14 md:w-14" />
      </NuxtLink>

      <nav class="hidden md:block">
        <ul class="flex items-center justify-center gap-12 text-xs font-light uppercase tracking-[0.3em] text-text">
          <li v-for="link in navLinks" :key="link.to">
            <NuxtLink :to="link.to" class="transition-colors duration-300 hover:text-accent" @click="handleNavClick">
              {{ link.label }}
            </NuxtLink>
          </li>
        </ul>
      </nav>

      <button
        type="button"
        class="relative z-50 flex h-8 items-center gap-3 text-text md:hidden"
        :aria-expanded="isMenuOpen"
        aria-label="Menu"
        @click="toggleMenu"
      >

        <svg v-if="isMenuOpen" class="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1">
          <path d="M4 4l16 16M20 4L4 20" />
        </svg>
        <span v-else class="flex h-3 w-7 flex-col justify-between">
          <span class="h-px w-full bg-text" />
          <span class="h-px w-full bg-text" />
        </span>
      </button>
    </div>

    <Transition name="menu-fade">
      <div v-if="isMenuOpen" class="fixed inset-0 z-40 flex h-screen w-screen flex-col items-center justify-center bg-bg">
        <ul class="flex flex-col items-center gap-8 text-xl font-light uppercase tracking-[0.3em] text-text">
          <li v-for="link in navLinks" :key="link.to">
            <NuxtLink :to="link.to" class="transition-colors duration-300 hover:text-accent" @click="handleNavClick">
              {{ link.label }}
            </NuxtLink>
          </li>
        </ul>
      </div>
    </Transition>
  </header>
</template>

<script setup lang="ts">
import { ref, watch } from 'vue'
import { useBodyScrollLock } from '~/composables/useBodyScrollLock'

const navLinks = [
  { label: 'Private', to: '/private' },
  { label: 'Corporate', to: '/corporate' },
  { label: 'Residence', to: '/residence' },
  { label: 'About us', to: '/about' },
  { label: 'Contact', to: '/contact' }
]

const route = useRoute()
const isMenuOpen = ref(false)
const { lock, unlock } = useBodyScrollLock()

const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value
}

const handleNavClick = () => {
  isMenuOpen.value = false
}

watch(isMenuOpen, (open) => {
  if (open) {
    lock()
  } else {
    unlock()
  }
})
</script>
<style>
.white-filter {
  filter: brightness(0) invert(1);
}
</style>