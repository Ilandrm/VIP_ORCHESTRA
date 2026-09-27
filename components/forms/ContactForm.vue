<template>
  <form class="mx-auto flex w-full max-w-2xl flex-col gap-8" @submit.prevent="handleSubmit">
    <fieldset class="flex flex-wrap gap-6">
      <legend class="mb-3 text-sm uppercase tracking-widest text-text/70">Raison</legend>
      <label v-for="reason in reasonOptions" :key="reason" class="flex items-center gap-2 text-sm text-text">
        <input
          v-model="formState.reason"
          type="radio"
          name="raison"
          :value="reason"
          required
          class="accent-accent"
          @click.stop
        />
        {{ reason }}
      </label>
    </fieldset>

    <div class="grid gap-6 md:grid-cols-2">
      <label class="flex flex-col gap-2 text-sm text-text">
        Pays
        <input v-model="formState.countryOfResidence" type="text" required class="input-field" />
      </label>

      <label class="flex flex-col gap-2 text-sm text-text">
        Ville
        <input v-model="formState.venueCountry" type="text" required class="input-field" />
      </label>

      <label class="flex flex-col gap-2 text-sm text-text">
        Nom
        <input v-model="formState.name" type="text" required class="input-field" />
      </label>

      <label class="flex flex-col gap-2 text-sm text-text">
        E-mail
        <input v-model="formState.email" type="email" required class="input-field" />
      </label>
    </div>

    <label class="flex flex-col gap-2 text-sm text-text">
      Message
      <textarea
        v-model="formState.message"
        required
        maxlength="2000"
        rows="5"
        class="input-field resize-none"
      />
      <span class="text-right text-xs text-text/50">{{ formState.message.length }}/2000</span>
    </label>

    <fieldset class="flex flex-col gap-3">
      <legend class="mb-1 text-sm uppercase tracking-widest text-text/70">Besoin d'être contacter en retour ?</legend>
      <div class="flex gap-6">
        <label class="flex items-center gap-2 text-sm text-text">
          <input v-model="formState.wantsCallback" type="radio" :value="true" class="accent-accent" @click.stop />
          Oui
        </label>
        <label class="flex items-center gap-2 text-sm text-text">
          <input v-model="formState.wantsCallback" type="radio" :value="false" class="accent-accent" @click.stop />
          Non
        </label>
      </div>
      <input
        v-if="formState.wantsCallback"
        v-model="formState.phone"
        type="tel"
        required
        placeholder="Phone"
        class="input-field"
      />
    </fieldset>

    <label class="flex flex-col gap-2 text-sm text-text">
      Comment avez vous entendus parler de nous ?
      <select v-model="formState.hearAboutUs" required class="input-field appearance-none">
        <option value="" disabled hidden>Selectionner une option</option>
        <option v-for="option in hearAboutUsOptions" :key="option" :value="option">{{ option }}</option>
      </select>
    </label>

    <AppButton type="submit" label="Envoyer" variant="primary" class="self-start" />

    <p v-if="isSubmitted" class="text-sm text-accent">
      Votre message à bien été envoyé .
    </p>
  </form>
</template>

<script setup lang="ts">
import { reactive, ref } from 'vue'
import AppButton from '~/components/ui/AppButton.vue'

interface ContactFormState {
  reason: string
  countryOfResidence: string
  venueCountry: string
  name: string
  email: string
  message: string
  wantsCallback: boolean
  phone: string
  hearAboutUs: string
}

const emit = defineEmits<{ submit: [payload: ContactFormState] }>()

const reasonOptions = ['Event', 'Corporate', 'Reception privé', 'Autre']
const hearAboutUsOptions = ['Bouche à oreille', 'Réseaux sociaux', 'Autre']

const formState = reactive<ContactFormState>({
  reason: '',
  countryOfResidence: '',
  venueCountry: '',
  name: '',
  email: '',
  message: '',
  wantsCallback: false,
  phone: '',
  hearAboutUs: ''
})

const isSubmitted = ref(false)

const handleSubmit = () => {
  emit('submit', { ...formState })
  isSubmitted.value = true
}
</script>

<style scoped>
.input-field {
  background-color: var(--color-bg);
  color: var(--color-text);
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 0.25rem;
  padding: 0.75rem 1rem;
}

.input-field:focus {
  outline: none;
  border-color: var(--color-accent);
}
</style>
