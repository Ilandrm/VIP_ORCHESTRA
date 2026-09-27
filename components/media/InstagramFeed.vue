<template>
  <div class="instagram-feed">
    <div v-if="loading" class="feed-loading">Chargement du feed Instagram...</div>
    <div v-else-if="error" class="feed-error">{{ error }}</div>
    <div v-else class="feed-grid">
      <a
          v-for="post in posts"
          :key="post.id"
          :href="post.permalink"
          target="_blank"
          rel="noopener noreferrer"
          class="feed-item"
      >
        <img
            v-if="post.media_type === 'VIDEO'"
            :src="post.thumbnail_url || post.media_url"
            :alt="post.caption || 'Instagram post'"
        />
        <img
            v-else
            :src="post.media_url"
            :alt="post.caption || 'Instagram post'"
        />
      </a>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'

const props = defineProps({
  limit: {
    type: Number,
    default: 9,
  },
})

const runtimeConfig = useRuntimeConfig()
const posts = ref([])
const loading = ref(true)
const error = ref(null)

async function fetchFeed() {
  loading.value = true
  error.value = null

  const apiBase = runtimeConfig.public.instagramApiUrl
  const url = `${apiBase}/api/instagram/feed?limit=${props.limit}`

  try {
    const response = await fetch(url)
    if (!response.ok) {
      throw new Error(`Erreur API Instagram: ${response.status}`)
    }
    const data = await response.json()
    posts.value = data.posts || []
  } catch (err) {
    error.value = err.message || 'Impossible de charger le feed Instagram'
  } finally {
    loading.value = false
  }
}

onMounted(fetchFeed)
</script>

<style scoped>
.feed-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 8px;
}

.feed-item img {
  width: 100%;
  aspect-ratio: 1 / 1;
  object-fit: cover;
  display: block;
  border-radius: 4px;
}

.feed-loading,
.feed-error {
  text-align: center;
  padding: 20px;
}
</style>