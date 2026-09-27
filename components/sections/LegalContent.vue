<template>
  <section class="mx-auto flex w-full max-w-3xl flex-col gap-12 px-6 py-24 md:py-32">
    <h1 class="text-center text-3xl font-semibold uppercase tracking-widest text-text md:text-4xl">{{ title }}</h1>

    <div class="flex flex-col gap-10">
      <article v-for="section in sections" :key="section.heading" class="flex flex-col gap-3">
        <h2 class="text-lg font-semibold uppercase tracking-widest text-accent">{{ section.heading }}</h2>
        <p
          v-for="(paragraph, index) in section.paragraphs ?? []"
          :key="index"
          class="text-sm leading-relaxed text-text/80"
        >
          {{ paragraph }}
        </p>
        <ul v-if="section.list?.length" class="flex flex-col gap-1 pl-5 text-sm leading-relaxed text-text/80">
          <li v-for="(item, index) in section.list" :key="index" class="list-disc">{{ item }}</li>
        </ul>
      </article>
    </div>
  </section>
</template>

<script setup lang="ts">
export interface LegalSection {
  heading: string
  paragraphs?: string[]
  list?: string[]
}

interface LegalContentProps {
  title: string
  sections: LegalSection[]
}

defineProps<LegalContentProps>()
</script>
