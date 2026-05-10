<script setup>
const route = useRoute()
const config = useRuntimeConfig()

const strapiUrl = config.public.strapiUrl || ''

// Fetch single article
const { data: article, pending, error } = await useFetch(
  `${strapiUrl}/api/articles/${route.params.id}?populate=*`
)

const post = computed(() => article.value?.data)
</script>

<template>
  <div class="blog-page">

    <!-- LOADING -->
    <div v-if="pending" class="loading">
      Loading article...
    </div>

    <!-- ERROR -->
    <div v-else-if="error" class="error">
      Failed to load article.
    </div>

    <!-- CONTENT -->
    <div v-else-if="post">

      <!-- HERO IMAGE -->
      <div class="hero">
        <NuxtImg
          v-if="post.attributes?.image?.data"
          :src="strapiUrl + post.attributes.image.data.attributes.url"
          class="hero-img"
        />

        <div class="hero-overlay">
          <h1>{{ post.attributes.title }}</h1>
          <p class="meta">
            {{ post.attributes.country }} •
            {{ new Date(post.attributes.createdAt).toLocaleDateString() }}
          </p>
        </div>
      </div>

      <!-- ARTICLE CONTENT -->
      <div class="content">

        <!-- CATEGORY -->
        <div class="category" v-if="post.attributes.category">
          {{ post.attributes.category?.data?.attributes?.name || 'Travel' }}
        </div>

        <!-- BODY -->
        <div class="text">
          <p v-for="(block, index) in post.attributes.content" :key="index">
            {{ block.children?.[0]?.text }}
          </p>
        </div>

      </div>

    </div>
  </div>
</template>

<style scoped>
    .blog-page {
    width: 100%;
    background: #f8f9fb;
    min-height: 100vh;
    }

    /* ================= HERO ================= */
    .hero {
    position: relative;
    height: 70vh;
    overflow: hidden;
    }

    .hero-img {
    width: 100%;
    height: 70vh;
    object-fit: cover;
    }

    .hero-overlay {
    position: absolute;
    inset: 0;
    background: linear-gradient(to top, rgba(0,0,0,0.7), transparent);
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    padding: 40px;
    color: white;
    }

    .hero-overlay h1 {
    font-size: 2.5rem;
    max-width: 700px;
    margin-bottom: 10px;
    }

    .meta {
    font-size: 0.9rem;
    opacity: 0.8;
    }

    /* ================= CONTENT ================= */
    .content {
    max-width: 800px;
    margin: -60px auto 40px;
    background: white;
    padding: 30px;
    border-radius: 12px;
    box-shadow: 0 10px 30px rgba(0,0,0,0.05);
    }

    /* CATEGORY TAG */
    .category {
    display: inline-block;
    background: black;
    color: white;
    font-size: 0.75rem;
    padding: 5px 10px;
    border-radius: 20px;
    margin-bottom: 20px;
    }

    /* TEXT */
    .text p {
    line-height: 1.7;
    margin-bottom: 16px;
    color: #333;
    font-size: 1rem;
    }

    /* STATES */
    .loading,
    .error {
    text-align: center;
    padding: 50px;
    font-size: 1.2rem;
    }
</style>