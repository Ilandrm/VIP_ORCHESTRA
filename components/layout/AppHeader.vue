<template>
  <header
    class="fixed inset-x-0 top-0 z-50 transition-colors duration-500"
    :class="isMenuOpen ? 'bg-bg' : 'bg-bg/80 backdrop-blur'"
  >
    <div class="mx-auto flex max-w-7xl items-center justify-between px-6 py-5 md:px-10">
      <NuxtLink to="/" class="flex items-center" @click="handleNavClick">
        <img src="/images/logo.png" alt="VIP" class="h-16 w-16 md:h-20 md:w-20 white-filter" />
      </NuxtLink>

      <nav class="hidden md:block">
        <ul class="flex items-center justify-center gap-10 text-sm uppercase tracking-widest text-text">
          <li v-for="link in navLinks" :key="link.to">
            <NuxtLink :to="link.to" class="transition-colors duration-300 hover:text-accent" @click="handleNavClick">
              {{ link.label }}
            </NuxtLink>
          </li>
        </ul>
      </nav>

      <button
        type="button"
        class="flex flex-col items-end gap-2 text-text md:hidden"
        :aria-expanded="isMenuOpen"
        aria-label="Menu"
        @click="toggleMenu"
      >
        <span class="text-xs uppercase tracking-widest">{{ isMenuOpen ? 'Close' : 'Menu' }}</span>
        <span class="flex h-4 w-8 flex-col justify-between">
          <span
            class="h-px w-full bg-text transition-transform duration-300"
            :class="isMenuOpen ? 'translate-y-[7px] rotate-45' : ''"
          />
          <span
            class="h-px w-full bg-text transition-transform duration-300"
            :class="isMenuOpen ? '-translate-y-[7px] -rotate-45' : ''"
          />
        </span>
      </button>
    </div>

    <Transition name="menu-fade">
      <div v-if="isMenuOpen" class="fixed inset-0 z-40 flex h-screen w-screen flex-col items-center justify-center bg-bg">
        <ul class="flex flex-col items-center gap-8 text-2xl uppercase tracking-widest text-text">
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
  { label: 'Event', to: '/event' },
  { label: 'About us', to: '/about' },
  { label: 'Team', to: '/team' },
  { label: 'Contact', to: '/contact' }
]

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