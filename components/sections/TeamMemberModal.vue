<template>
  <Transition name="modal-fade">
    <div
      v-if="member"
      class="fixed inset-0 z-50 flex items-center justify-center bg-bg/90 px-6"
      @click.self="$emit('close')"
    >
      <div class="relative flex w-full max-w-2xl flex-col gap-6 bg-bg p-8 md:flex-row md:items-start">
        <button
          type="button"
          aria-label="Close"
          class="absolute right-4 top-4 rounded-full border border-text/20 p-2 transition-colors duration-300 hover:border-accent"
          @click="$emit('close')"
        >
          <img :src="withBaseUrl('/images/ico-close.svg')" alt="" class="h-4 w-4" />
        </button>

        <img :src="member.photo" :alt="member.name" class="h-64 w-full object-cover md:h-72 md:w-56" />

        <div class="flex flex-col gap-4 text-left">
          <div>
            <h3 class="text-xl font-semibold uppercase tracking-widest text-text">{{ member.name }}</h3>
            <p class="text-xs uppercase tracking-widest text-accent">{{ member.role }}</p>
          </div>
          <p class="text-sm leading-relaxed text-text/80">{{ member.bio }}</p>
        </div>
      </div>
    </div>
  </Transition>
</template>

<script setup lang="ts">
import type { TeamMember } from '~/components/sections/TeamSwiper.vue'

interface TeamMemberModalProps {
  member: TeamMember | null
}

defineProps<TeamMemberModalProps>()
defineEmits<{ close: [] }>()
</script>

<style scoped>
.modal-fade-enter-active,
.modal-fade-leave-active {
  transition: opacity 0.3s ease;
}

.modal-fade-enter-from,
.modal-fade-leave-to {
  opacity: 0;
}
</style>
