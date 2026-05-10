<script setup>
const config = useRuntimeConfig()
const strapiUrl = config.public.strapiUrl || ''

const query = ref('')
const results = ref([])
const loading = ref(false)

let timeout = null

const searchArticles = async () => {
  if (!query.value.trim()) {
    results.value = []
    return
  }

  loading.value = true

  try {
    const { data } = await useFetch(
      `${strapiUrl}/api/articles?filters[title][$containsi]=${query.value}&populate[image]=*&populate[category]=*`
    )

    results.value = data.value?.data || []
  } catch (err) {
    results.value = []
  }

  loading.value = false
}

// debounce typing
watch(query, () => {
  clearTimeout(timeout)
  timeout = setTimeout(searchArticles, 400)
})
</script>

<template>
  <div class="search-page">

    <!-- HERO -->
    <section class="hero">
      <h1>Search Articles</h1>
      <p>Find destinations, stories, and travel inspiration</p>

      <input
        v-model="query"
        type="text"
        placeholder="Search for Cape Town, beaches, mountains..."
        class="search-input"
      />
    </section>

    <!-- LOADING -->
    <div v-if="loading" class="grid">
      <div v-for="n in 6" :key="n" class="skeleton"></div>
    </div>

    <!-- RESULTS -->
    <section v-else class="grid">

      <NuxtLink
        v-for="post in results"
        :key="post.id"
        :to="`/posts/${post.documentId}`"
        class="card-link"
      >
        <article class="card">

          <div class="img">
            <NuxtImg
              v-if="post.image?.url"
              :src="strapiUrl + post.image.url"
              class="img-thumb"
            />
            <span class="tag">
              {{ post.category?.type || 'Travel' }}
            </span>
          </div>

          <div class="content">
            <h2>{{ post.title }}</h2>
            <p>
              {{ post.description?.slice(0, 120) || 'No description available...' }}...
            </p>
          </div>

        </article>
      </NuxtLink>

    </section>

    <!-- EMPTY STATE -->
    <div v-if="!loading && query && results.length === 0" class="empty">
      No results found for "{{ query }}"
    </div>

  </div>
</template>

<style scoped>
    .search-page {
    font-family: system-ui, -apple-system, sans-serif;
    background: #f8f9fb;
    min-height: 100vh;
    }

    /* HERO */
    .hero {
    text-align: center;
    padding: 70px 20px 40px;
    background: linear-gradient(to bottom, #111, #1f1f1f);
    color: white;
    }

    .hero h1 {
    font-size: 2.8rem;
    margin-bottom: 10px;
    }

    .hero p {
    opacity: 0.8;
    margin-bottom: 20px;
    }

    /* SEARCH INPUT */
    .search-input {
    width: 100%;
    max-width: 500px;
    padding: 14px 16px;
    border-radius: 10px;
    border: none;
    outline: none;
    font-size: 1rem;
    }

    /* GRID */
    .grid {
    max-width: 1100px;
    margin: 40px auto;
    padding: 0 20px;
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
    gap: 20px;
    }

    /* CARD */
    .card {
    background: white;
    border-radius: 12px;
    overflow: hidden;
    box-shadow: 0 10px 25px rgba(0,0,0,0.05);
    transition: 0.2s ease;
    }

    .card:hover {
    transform: translateY(-5px);
    }

    .img {
    position: relative;
    height: 180px;
    }

    .img-thumb {
    width: 100%;
    height: 100%;
    object-fit: cover;
    }

    .tag {
    position: absolute;
    bottom: 10px;
    left: 10px;
    background: black;
    color: white;
    padding: 4px 10px;
    font-size: 0.75rem;
    text-transform: uppercase;
    }

    .content {
    padding: 15px;
    }

    .content h2 {
    font-size: 1.1rem;
    margin-bottom: 8px;
    }

    /* SKELETON */
    .skeleton {
    height: 260px;
    background: #eaeaea;
    border-radius: 12px;
    animation: pulse 1.5s infinite;
    }

    @keyframes pulse {
    0% { background: #eee; }
    50% { background: #ddd; }
    100% { background: #eee; }
    }

    /* EMPTY */
    .empty {
    text-align: center;
    padding: 60px 20px;
    color: gray;
    }
</style>