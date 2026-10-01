<template>
  <section class="paddingTopBottom-s1 px-6  md:py-12">
    <div class="header-projects mb-12 text-center">
      <h3 class="text-3xl  tracking-wide md:text-5xl sign">
        <slot name="title" />
      </h3>
      <h4 class="font-playfair-italic mt-10 text-sm uppercase tracking-widest text-text/70 md:text-2xl">
        {{ subtitle }}
      </h4>
    </div>
    <div :class="gridClass">
      <HoverPlayVideoCard
          v-for="project in projects"
          :key="project.title"
          :src="project.src"
          :poster="project.poster"
          :title="project.title"
      />
    </div>
  </section>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import HoverPlayVideoCard from '~/components/media/HoverPlayVideoCard.vue'

export interface Project {
  title: string
  poster: string
}

interface ProjectsGridProps {
  subtitle: string
  projects: Project[]
  size?: 3 | 4
}

const props = withDefaults(defineProps<ProjectsGridProps>(), {
  size: 4,
})

const sizeForThree = 'mx-auto grid w-full grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3'
const sizeForFour = 'mx-auto grid w-full grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4'

const gridClass = computed(() => (props.size === 3 ? sizeForThree : sizeForFour))
</script>
<style>
.sign{
  font-family: 'Brittany Signature', cursive;
}
</style>