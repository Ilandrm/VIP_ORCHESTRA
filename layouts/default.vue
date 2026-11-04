<template>
  <div class="flex min-h-dvh flex-col bg-bg text-text">
    <AppHeader />
    <main class="flex-1">
      <slot />
    </main>
    <InstagramSection v-if="route.path !== '/'" />
    <AppFooter />
  </div>
</template>

<script setup lang="ts">
import AppHeader from '~/components/layout/AppHeader.vue'
import AppFooter from '~/components/layout/AppFooter.vue'
import InstagramSection from '~/components/sections/InstagramSection.vue'

const route = useRoute()
</script>
