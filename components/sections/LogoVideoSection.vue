<template>
  <section class="wrap-talk bg-bg px-6 py-8 text-center md:py-16">
    <h2 class="center text-2xl tracking-wide md:text-5xl text-gold sign">{{ title }}</h2>
    <div class="mx-auto mt-12 flex max-w-4xl flex-wrap items-center justify-center gap-8 md:gap-10">
      <div
          v-for="logo in logos"
          :key="logo"
          class="flex w-[calc(50%-1rem)] items-center justify-center opacity-70 transition duration-300 hover:opacity-100 sm:w-[calc(33.333%-1.5rem)] md:w-[calc(25%-1.9rem)]"
      >
        <img :src="logo" alt="" class="h-12 w-auto max-w-[100px] object-contain md:h-16 md:max-w-[120px]" />
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
interface LogoVideoSectionProps {
  title: string
  logos: string[]
}

defineProps<LogoVideoSectionProps>()
</script>
<style>
.sign{
  font-family: 'Brittany Signature', cursive;
}
</style>