<template>
  <div class="relative mx-auto w-full max-w-6xl px-6">
    <Swiper
      :modules="[Navigation]"
      :slides-per-view="2"
      :space-between="24"
      :loop="true"
      :breakpoints="breakpoints"
      :navigation="{ prevEl: prevButton, nextEl: nextButton }"
      class="team-swiper"
      @swiper="onSwiperReady"
    >
      <SwiperSlide v-for="member in members" :key="member.name">
        <button
          type="button"
          class="group flex w-full flex-col items-center gap-4 text-center"
          @click="$emit('select', member)"
        >
          <span class="relative block aspect-[3/4] w-full overflow-hidden bg-bg">
            <img
              :src="member.photo"
              :alt="member.name"
              class="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
          </span>
          <span class="flex flex-col gap-1">
            <span class="text-sm font-semibold uppercase tracking-widest text-text">{{ member.name }}</span>
            <span class="text-xs uppercase tracking-widest text-accent">{{ member.role }}</span>
          </span>
        </button>
      </SwiperSlide>
    </Swiper>

    <button
      ref="prevButton"
      type="button"
      aria-label="Previous"
      class="absolute left-0 top-1/2 z-10 -translate-y-1/2 -translate-x-4 rounded-full border border-text/20 p-3 transition-colors duration-300 hover:border-accent md:-translate-x-8"
    >
      <img :src="withBaseUrl('/images/ico-left-arrow.svg')" alt="" class="h-4 w-4 white-filter" />
    </button>
    <button
      ref="nextButton"
      type="button"
      aria-label="Next"
      class="absolute right-0 top-1/2 z-10 -translate-y-1/2 translate-x-4 rounded-full border border-text/20 p-3 transition-colors duration-300 hover:border-accent md:translate-x-8"
    >
      <img :src="withBaseUrl('/images/ico-right-arrow.svg')" alt="" class="h-4 w-4 white-filter" />
    </button>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { Swiper, SwiperSlide } from 'swiper/vue'
import { Navigation } from 'swiper/modules'
import type { Swiper as SwiperInstance } from 'swiper/types'
import 'swiper/css'
import 'swiper/css/navigation'

export interface TeamMember {
  name: string
  role: string
  photo: string
}

interface TeamSwiperProps {
  members: TeamMember[]
}

defineProps<TeamSwiperProps>()
defineEmits<{ select: [member: TeamMember] }>()

const prevButton = ref<HTMLButtonElement | null>(null)
const nextButton = ref<HTMLButtonElement | null>(null)

const breakpoints = {
  320: { slidesPerView: 2 },
  768: { slidesPerView: 3 },
  1024: { slidesPerView: 3 },
  1280: { slidesPerView: 4 }
}

const onSwiperReady = (swiper: SwiperInstance) => {
  if (typeof swiper.params.navigation === 'object') {
    swiper.params.navigation.prevEl = prevButton.value
    swiper.params.navigation.nextEl = nextButton.value
    swiper.navigation.destroy()
    swiper.navigation.init()
    swiper.navigation.update()
  }
}
</script>
