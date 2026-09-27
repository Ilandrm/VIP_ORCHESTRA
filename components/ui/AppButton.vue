<template>
  <NuxtLink v-if="isInternalLink" :to="to as string" :class="buttonClasses">
    {{ label }}
  </NuxtLink>
  <a v-else-if="to" :href="to" target="_blank" rel="noopener noreferrer" :class="buttonClasses">
    {{ label }}
  </a>
  <button v-else :type="type" :class="buttonClasses">
    {{ label }}
  </button>
</template>

<script setup lang="ts">
import { computed } from 'vue'

interface AppButtonProps {
  to?: string
  label: string
  variant?: 'primary' | 'outline'
  type?: 'button' | 'submit'
}

const props = withDefaults(defineProps<AppButtonProps>(), {
  to: undefined,
  variant: 'primary',
  type: 'button'
})

const isInternalLink = computed(() => !!props.to && props.to.startsWith('/'))

const buttonClasses = computed(() => [
  'inline-flex items-center justify-center rounded-full px-8 py-3 text-sm uppercase tracking-widest transition-colors duration-300',
  props.variant === 'primary'
    ? 'bg-text text-bg hover:bg-accent hover:text-text'
    : 'border border-text text-text hover:border-accent hover:text-accent'
])
</script>
