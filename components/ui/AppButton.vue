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
  variant?: 'primary' | 'outline' | 'text'
  type?: 'button' | 'submit'
}

const props = withDefaults(defineProps<AppButtonProps>(), {
  to: undefined,
  variant: 'primary',
  type: 'button'
})

const isInternalLink = computed(() => !!props.to && props.to.startsWith('/'))

const buttonClasses = computed(() => [
  'inline-flex items-center justify-center text-xs uppercase tracking-widest transition-colors duration-300',
  props.variant === 'primary'
    ? 'bg-text/85 text-bg hover:bg-accent hover:text-text rounded-md px-6 py-2.5'
    : props.variant === 'outline'
    ? 'border border-text/60 text-text hover:border-accent hover:text-accent rounded-md px-6 py-2.5'
    : 'text-link relative px-1 pb-1 text-text hover:text-accent border-0 bg-transparent'
])
</script>

<style scoped>
.text-link::after {
  content: '';
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
  height: 1px;
  background-color: currentColor;
  transition: left 0.3s ease, right 0.3s ease, background-color 0.3s ease;
}
.text-link:hover::after {
  left: 25%;
  right: 25%;
}
</style>
