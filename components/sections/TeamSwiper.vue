<template>
  <div class="relative mx-auto w-full max-w-6xl px-6">
    <div class="team-grid">
      <div
        v-for="(member, index) in members"
        :key="member.name"
        :class="offsetClass(index)"
      >
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
            <span
              class="absolute inset-0 flex items-end justify-center bg-gradient-to-t from-black/80 via-black/20 to-transparent p-4 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
            >
              <span class="text-xs uppercase tracking-widest text-accent">{{ member.role }}</span>
            </span>
          </span>
          <span class="flex flex-col gap-1">
            <span class="text-sm font-semibold uppercase tracking-widest text-text">{{ member.name }}</span>
          </span>
        </button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
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

const offsets = [
  'md:mt-0',
  'md:mt-10',
  'md:mt-4',
  'md:mt-14',
  'md:mt-2',
  'md:mt-8',
  'md:mt-12',
  'md:mt-0',
  'md:mt-6',
  'md:mt-10',
  'md:mt-2',
  'md:mt-8'
]

const offsetClass = (index: number) => offsets[index % offsets.length]
</script>

<style scoped>
.team-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 24px;
}

@media (min-width: 768px) {
  .team-grid {
    grid-template-columns: repeat(3, 1fr);
  }
}

@media (min-width: 1024px) {
  .team-grid {
    grid-template-columns: repeat(4, 1fr);
  }
}
</style>
