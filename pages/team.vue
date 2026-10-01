<template>
  <div>

    <section class="px-6 pb-24 py-24 md:pb-32 py-32 mt-10">
      <h2 class="sign mb-16 text-center text-4xl tracking-wide text-gold md:text-6xl">
        Notre équipe
      </h2>
      <TeamSwiper :members="teamMembers" @select="handleSelectMember" />
    </section>

    <TeamMemberModal :member="selectedMember" @close="handleCloseModal" />
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import TeamSwiper, { type TeamMember } from '~/components/sections/TeamSwiper.vue'
import TeamMemberModal from '~/components/sections/TeamMemberModal.vue'

const teamMembers: TeamMember[] = [
  {
    name: 'Joseph',
    role: 'Directeur artistique / Maître de cérémonie',
    photo: withBaseUrl('/team/IMG_5210b-300x300.jpg')
  },
  {
    name: 'Jonathan',
    role: 'Directeur technique / Régisseur général',
    photo: withBaseUrl('/team/IMG_5582-300x300.jpg')
  },
  {
    name: 'Deborah',
    role: 'Relation client / Event planner',
    photo: withBaseUrl('/team/IMG_4603-300x300.jpg')
  },
  {
    name: 'Cyril',
    role: 'Chanteur / Création artistique',
    photo: withBaseUrl('/team/LIO_2617-2-300x300.jpg')
  },
  {
    name: 'Charlotte',
    role: 'Chef de projet',
    photo: withBaseUrl('/team/IMG_9109-300x300.jpg')
  },
  {
    name: 'Alexandra',
    role: 'Marketing',
    photo: withBaseUrl('/team/IMG_9110-300x300.jpg')
  },
  {
    name: 'John',
    role: 'DJ',
    photo: withBaseUrl('/team/IMG_9112-300x300.jpg')
  },
  {
    name: 'Caroline',
    role: 'Violoniste',
    photo: withBaseUrl('/team/691526D4-2BBE-4009-8904-A2F1C7AE70F8_1_105_c-300x300.jpg')
  },
  {
    name: 'Samuel',
    role: 'Saxophoniste',
    photo: withBaseUrl('/team/black-jazzman-plays-the-saxophone-on-stage-WL9RCSH-300x300.jpg')
  },
  {
    name: 'Filiz',
    role: 'Pianiste',
    photo: withBaseUrl('/team/IMG_0639-300x300.jpg')
  },
  {
    name: 'Eyal',
    role: 'Guitariste',
    photo: withBaseUrl('/team/attractive-man-playing-an-electric-guitar-in-a-QGWBY53b-300x300.jpg')
  },
  {
    name: 'Karine',
    role: 'Chorégraphe',
    photo: withBaseUrl('/team/IMG_9113-300x300.jpg')
  }
];


const selectedMember = ref<TeamMember | null>(null)

const handleSelectMember = (member: TeamMember) => {
  selectedMember.value = member
}

const handleCloseModal = () => {
  selectedMember.value = null
}

useSeoMeta({
  title: 'Vip Orchestra - Our Story',
  description: 'Vip Orchestra redefines live entertainment at the highest level, merging visionary artistry with unmatched excellence.'
})
</script>
<style>
.sign {
  font-family: 'Brittany Signature', cursive;
}
.text-gold {
  color: #bca45d;
}
</style>
