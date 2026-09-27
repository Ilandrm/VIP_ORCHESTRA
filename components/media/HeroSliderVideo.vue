<template>
  <section class="relative h-screen w-full overflow-hidden bg-bg">
    <Swiper
      :modules="[Navigation, Pagination]"
      :centered-slides="true"
      :slides-per-view="1"
      :loop="true"
      :keyboard="{ enabled: true }"
      :navigation="true"
      :pagination="{ clickable: true }"
      class="h-full w-full"
      @slide-change="handleSlideChange"
    >
      <SwiperSlide v-for="(slide, index) in slides" :key="slide.id">
        <div class="relative h-screen w-full">
          <div v-if="slide.type === 'vimeo'" :ref="(el) => setVimeoContainer(el, index)" class="h-full w-full">
            <iframe
              :src="`https://player.vimeo.com/video/${slide.vimeoId}?background=1&autoplay=1&loop=1&muted=1`"
              class="h-full w-full"
              frameborder="0"
              allow="autoplay; fullscreen"
              allowfullscreen
            />
          </div>
          <div
            v-else
            class="h-full w-full bg-cover bg-center"
            :style="{ backgroundImage: `url(${slide.image})` }"
          />
          <div class="absolute inset-0 bg-bg/30" />
        </div>
      </SwiperSlide>
    </Swiper>

    <div class="absolute inset-x-0 bottom-10 z-10 flex justify-center">
      <slot name="scroll-indicator" />
    </div>
  </section>
</template>

<script setup lang="ts">
import { onBeforeUnmount, ref } from 'vue'
import { Swiper, SwiperSlide } from 'swiper/vue'
import { Navigation, Pagination } from 'swiper/modules'
import Player from '@vimeo/player'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'

export interface HeroSlide {
  id: string
  type: 'vimeo' | 'image'
  vimeoId?: string
  image?: string
}

interface HeroSliderVideoProps {
  slides: HeroSlide[]
}

const props = defineProps<HeroSliderVideoProps>()

const vimeoPlayers = new Map<number, Player>()

const setVimeoContainer = (el: Element | { $el: Element } | null, index: number) => {
  if (!el) return
  const container = el instanceof Element ? el : el.$el
  const iframe = container.querySelector('iframe')
  if (iframe && !vimeoPlayers.has(index)) {
    vimeoPlayers.set(index, new Player(iframe as HTMLIFrameElement))
  }
}

const handleSlideChange = () => {
  vimeoPlayers.forEach((player) => {
    player.pause().catch(() => {})
    player.setCurrentTime(0.5).catch(() => {})
  })
}

onBeforeUnmount(() => {
  vimeoPlayers.forEach((player) => player.destroy().catch(() => {}))
  vimeoPlayers.clear()
})

defineExpose({ slides: props.slides })
</script>
