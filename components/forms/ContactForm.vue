<template>
  <form class="mx-auto flex w-full max-w-xl flex-col gap-8" @submit.prevent="handleSubmit">
    <div class="flex flex-wrap justify-center gap-8">
      <label
        v-for="option in typeOptions"
        :key="option"
        class="flex cursor-pointer items-center gap-2 text-xs font-light uppercase tracking-[0.3em] text-text"
      >
        <input v-model="formState.type" type="radio" name="type" :value="option" class="accent-accent" />
        {{ option }}
      </label>
    </div>

    <label v-for="field in fields" :key="field.key" class="flex flex-col gap-2 text-xs font-light uppercase tracking-[0.3em] text-text">
      {{ field.label }}
      <textarea
        v-if="field.key === 'message'"
        v-model="formState[field.key]"
        required
        maxlength="2000"
        rows="5"
        class="input-field resize-none"
      />
      <input v-else v-model="formState[field.key]" :type="field.type" required class="input-field" />
    </label>

    <AppButton type="submit" label="Send" variant="primary" class="self-center" />

    <p v-if="isSubmitted" class="text-center text-sm text-accent">Your message has been sent.</p>
  </form>
</template>

<script setup lang="ts">
import { computed, reactive, ref } from 'vue'
import AppButton from '~/components/ui/AppButton.vue'

type FieldKey = 'name' | 'email' | 'phone' | 'venue' | 'eventDate' | 'subject' | 'message'

interface ContactFormState {
  type: string
  name: string
  email: string
  phone: string
  venue: string
  eventDate: string
  subject: string
  message: string
}

interface FormField {
  key: FieldKey
  label: string
  type: string
}

const emit = defineEmits<{ submit: [payload: ContactFormState] }>()

const typeOptions = ['WEDDING', 'CORPORATE', 'OTHERS']

const formState = reactive<ContactFormState>({
  type: 'WEDDING',
  name: '',
  email: '',
  phone: '',
  venue: '',
  eventDate: '',
  subject: '',
  message: ''
})

const baseFields: FormField[] = [
  { key: 'name', label: 'Name', type: 'text' },
  { key: 'email', label: 'E-mail', type: 'email' },
  { key: 'phone', label: 'Phone', type: 'tel' }
]

const fields = computed<FormField[]>(() =>
  formState.type === 'OTHERS'
    ? [...baseFields, { key: 'subject', label: 'Subject', type: 'text' }, { key: 'message', label: 'Message', type: 'text' }]
    : [
        ...baseFields,
        { key: 'venue', label: 'Venue (name, city...)', type: 'text' },
        { key: 'eventDate', label: 'Date of the event', type: 'date' },
        { key: 'message', label: 'Message', type: 'text' }
      ]
)

const isSubmitted = ref(false)

const handleSubmit = () => {
  emit('submit', { ...formState })
  isSubmitted.value = true
}
</script>

<style scoped>
.input-field {
  background-color: transparent;
  color: var(--color-text);
  border: none;
  border-bottom: 1px solid rgba(255, 255, 255, 0.35);
  border-radius: 0;
  padding: 0.5rem 0;
  transition: border-color 0.3s ease;
}

.input-field:focus {
  outline: none;
  border-bottom-color: var(--color-accent);
}
</style>
