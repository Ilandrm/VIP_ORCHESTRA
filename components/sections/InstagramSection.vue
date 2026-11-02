<template>
  <section
      aria-label="VIP Orchestra sur Instagram"
      class="px-4 pb-10 pt-12 text-center md:px-10 md:pb-14 md:pt-16"
  >
    <div>

      <h2 class="sign text-lg tracking-wide text-gold md:text-xl">
        Follow us on Instagram
      </h2>

      <a
          href="https://www.instagram.com/vip_orchestra/"
          target="_blank"
          rel="noopener noreferrer"
          class="mt-3 inline-block text-sm text-white/70 transition-colors hover:text-gold"
      >
        @vip_orchestra
      </a>

      <div
          v-if="posts.length === 0"
          class="mt-8 grid grid-cols-2 gap-2 sm:grid-cols-3 md:mt-10 md:grid-cols-6 md:gap-3"
          aria-hidden="true"
      >
        <div
            v-for="index in 12"
            :key="index"
            class="aspect-square bg-neutral-800"
        />
      </div>

      <div
          v-else
          class="mt-8 grid grid-cols-2 gap-2 sm:grid-cols-3 md:mt-10 md:grid-cols-6 md:gap-3"
      >
        <a
            v-for="post in posts.slice(0, 12)"
            :key="post.href"
            :href="post.href"
            target="_blank"
            rel="noopener noreferrer"
            class="group block aspect-square overflow-hidden bg-black/10"
        >
          <img
              :src="withBaseUrl(post.image)"
              :alt="post.alt"
              loading="lazy"
              class="h-full w-full object-cover transition duration-500 group-hover:scale-105 group-hover:opacity-75"
          />
        </a>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
withDefaults(
    defineProps<{
      posts?: Array<{
        image: string
        href: string
        alt: string
      }>
    }>(),
    {
      posts: () => [],
    },
)
</script>