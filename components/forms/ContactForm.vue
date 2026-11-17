<template>
  <form class="mx-auto flex w-full max-w-xl flex-col gap-8" novalidate @submit.prevent="handleSubmit">
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
      <input
        v-else
        v-model="formState[field.key]"
        :type="field.type"
        :maxlength="field.maxlength"
        required
        class="input-field"
      />
    </label>

    <input
      v-model="honeypot"
      type="text"
      name="company"
      tabindex="-1"
      autocomplete="off"
      aria-hidden="true"
      class="hidden"
    />

    <div v-if="captchaRequired" ref="turnstileContainer" class="flex justify-center" />

    <AppButton
      type="submit"
      :label="isSubmitting ? 'Sending…' : 'Send'"
      variant="primary"
      class="self-center"
      :disabled="isSubmitting || (captchaRequired && !captchaToken)"
    />

    <p v-if="errorMessage" class="text-center text-sm text-accent" role="alert">{{ errorMessage }}</p>
    <p v-else-if="isSubmitted" class="text-center text-sm text-accent" role="status">
      Thank you, your request has been sent. Our team will get back to you shortly.
    </p>
  </form>
</template>

<script setup lang="ts">
import { computed, onBeforeUnmount, onMounted, reactive, ref } from 'vue'
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
  maxlength: number
}

interface TurnstileApi {
  render: (container: HTMLElement, options: Record<string, unknown>) => string
  reset: (widgetId?: string) => void
  remove: (widgetId?: string) => void
}

declare global {
  interface Window {
    turnstile?: TurnstileApi
  }
}

const TURNSTILE_SCRIPT = 'https://challenges.cloudflare.com/turnstile/v0/api.js?render=explicit'

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
  { key: 'name', label: 'Name', type: 'text', maxlength: 120 },
  { key: 'email', label: 'E-mail', type: 'email', maxlength: 254 },
  { key: 'phone', label: 'Phone', type: 'tel', maxlength: 40 }
]

const fields = computed<FormField[]>(() =>
  formState.type === 'OTHERS'
    ? [
        ...baseFields,
        { key: 'subject', label: 'Subject', type: 'text', maxlength: 160 },
        { key: 'message', label: 'Message', type: 'text', maxlength: 2000 }
      ]
    : [
        ...baseFields,
        { key: 'venue', label: 'Venue (name, city...)', type: 'text', maxlength: 160 },
        { key: 'eventDate', label: 'Date of the event', type: 'date', maxlength: 32 },
        { key: 'message', label: 'Message', type: 'text', maxlength: 2000 }
      ]
)

const runtimeConfig = useRuntimeConfig()
const siteKey = String(runtimeConfig.public.turnstileSiteKey || '')
const apiBaseUrl = String(runtimeConfig.public.apiBaseUrl || '').replace(/\/+$/, '')
const captchaRequired = computed(() => siteKey.length > 0)

const turnstileContainer = ref<HTMLElement | null>(null)
const captchaToken = ref('')
const honeypot = ref('')
const isSubmitting = ref(false)
const isSubmitted = ref(false)
const errorMessage = ref('')

let widgetId: string | null = null
let scriptPromise: Promise<void> | null = null

const loadTurnstileScript = (): Promise<void> => {
  if (window.turnstile) return Promise.resolve()
  if (scriptPromise) return scriptPromise

  scriptPromise = new Promise<void>((resolve, reject) => {
    const existing = document.querySelector<HTMLScriptElement>(`script[src="${TURNSTILE_SCRIPT}"]`)
    if (existing) {
      existing.addEventListener('load', () => resolve())
      existing.addEventListener('error', () => reject(new Error('Turnstile script failed to load')))
      return
    }

    const script = document.createElement('script')
    script.src = TURNSTILE_SCRIPT
    script.async = true
    script.defer = true
    script.onload = () => resolve()
    script.onerror = () => reject(new Error('Turnstile script failed to load'))
    document.head.appendChild(script)
  })

  return scriptPromise
}

const renderCaptcha = async () => {
  if (!captchaRequired.value || !turnstileContainer.value) return

  try {
    await loadTurnstileScript()
    if (!window.turnstile || !turnstileContainer.value) return

    widgetId = window.turnstile.render(turnstileContainer.value, {
      sitekey: siteKey,
      theme: 'dark',
      callback: (token: string) => {
        captchaToken.value = token
        errorMessage.value = ''
      },
      'expired-callback': () => {
        captchaToken.value = ''
      },
      'error-callback': () => {
        captchaToken.value = ''
        errorMessage.value = 'Anti-robot verification is unavailable. Please reload the page.'
      }
    })
  } catch {
    errorMessage.value = 'Anti-robot verification could not be loaded. Please reload the page.'
  }
}

const resetCaptcha = () => {
  captchaToken.value = ''
  if (widgetId && window.turnstile) window.turnstile.reset(widgetId)
}

const resetForm = () => {
  formState.name = ''
  formState.email = ''
  formState.phone = ''
  formState.venue = ''
  formState.eventDate = ''
  formState.subject = ''
  formState.message = ''
}

const handleSubmit = async () => {
  if (isSubmitting.value) return

  errorMessage.value = ''
  isSubmitted.value = false

  if (captchaRequired.value && !captchaToken.value) {
    errorMessage.value = 'Please complete the anti-robot verification.'
    return
  }

  isSubmitting.value = true

  try {
    await $fetch(`${apiBaseUrl}/api/contact`, {
      method: 'POST',
      body: {
        ...formState,
        company: honeypot.value,
        turnstileToken: captchaToken.value
      }
    })

    isSubmitted.value = true
    emit('submit', { ...formState })
    resetForm()
    resetCaptcha()
  } catch (error: unknown) {
    const data = (error as { data?: { error?: string } })?.data
    errorMessage.value = data?.error || 'Your message could not be sent. Please try again.'
    resetCaptcha()
  } finally {
    isSubmitting.value = false
  }
}

onMounted(renderCaptcha)

onBeforeUnmount(() => {
  if (widgetId && window.turnstile) window.turnstile.remove(widgetId)
})
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

.input-field[type='date'] {
  text-align: center;
}

.input-field[type='date']::-webkit-datetime-edit {
  justify-content: center;
  text-align: center;
}
</style>
