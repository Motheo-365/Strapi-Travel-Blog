<!-- Motheo Morena u24666981 -->

<script setup>
  const route = useRoute()
  const config = useRuntimeConfig()
  const strapiUrl = config.public.strapiUrl || ''

  const { data: article, pending, error } = await useFetch(
    `${strapiUrl}/api/articles/${route.params.id}?populate=*`
  )

  const post = computed(() => {
    return article.value?.data || null
  })
  
  const getImageUrl = (img) => {
    if (!img) return ''

    return (
      img.url ||
      img.data?.attributes?.url ||
      img.attributes?.url ||
      ''
    )
  }
</script>

<template>
  <div class="blog-page">

    <!-- LOADING STATE -->
    <div v-if="pending" class="status-msg">
      <div class="spinner"></div>
      <p>Loading your adventure...</p>
    </div>

    <!-- ERROR STATE -->
    <div v-else-if="error || !post" class="error-container">
      <h2>Oops! Post not found.</h2>
      <p>We couldn't find the article you're looking for.</p>
      <NuxtLink to="/" class="back-home">Return to Blog</NuxtLink>
    </div>

    <!-- CONTENT -->
    <div v-else>
      <!-- HERO -->
      <div class="hero">
        <NuxtImg
            v-if="getImageUrl(post.image)"
            :src="strapiUrl + getImageUrl(post.image)"
        />

        <div class="hero-overlay">
          <div class="hero-text-container">
            <h1>{{ post.title }}</h1>
            <p class="meta">
              <span v-if="post.author">By {{ post.author.name }} • </span>
              <span v-if="post.country">{{ post.country }} • </span>
              {{ post.createdAt ? new Date(post.createdAt).toLocaleDateString() : '' }}
            </p>
          </div>
        </div>
      </div>

      <!-- CONTENT BODY -->
      <div class="content-wrapper">
        <article class="main-content">
          <div v-if="post.category" class="category-pill">
            {{ post.category.type }}
          </div>

          <div class="rich-text">
            <template v-if="Array.isArray(post.content)">
              <div v-for="(block, i) in post.content" :key="i">
                
                <p v-if="block.type === 'paragraph'">
                  <template v-for="(child, j) in block.children" :key="j">
                    <strong v-if="child.bold">{{ child.text }}</strong>
                    <em v-else-if="child.italic">{{ child.text }}</em>
                    <span v-else>{{ child.text }}</span>
                  </template>
                </p>

                <ul v-else-if="block.type === 'list'">
                  <li v-for="(item, j) in block.children" :key="j">
                    {{ item.children?.[0]?.text }}
                  </li>
                </ul>

                <h2 v-else-if="block.type === 'heading'">
                  {{ block.children?.[0]?.text }}
                </h2>

              </div>
            </template>

            <template v-else>
              <p>{{ post.content }}</p>
            </template>
          </div>
        </article>
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

  /* HERO SECTION */
  .hero {
    position: relative;
    height: 60vh;
    min-height: 400px;
    background: #2c3e50;
  }

  .hero-img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  .hero-overlay {
    position: absolute;
    inset: 0;
    background: linear-gradient(to top, rgba(0,0,0,0.8) 0%, rgba(0,0,0,0.2) 100%);
    display: flex;
    align-items: flex-end;
    padding: 60px 20px;
  }

  .hero-text-container {
    max-width: 800px;
    margin: 5% auto;
    width: 100%;
    color: white;
  }

  .hero-text-container h1 {
    font-size: clamp(2rem, 5vw, 3.5rem);
    margin-bottom: 10px;
    line-height: 1.1;
  }

  .meta {
    font-size: 1.1rem;
    opacity: 0.9;
  }

  /* CONTENT AREA */
  .content-wrapper {
    max-width: 85%;
    margin: 2% auto 60px;
    position: relative;
    padding: 0 20px;
  }

  .main-content {
    padding: 40px;
    border-radius: 16px;
    box-shadow: 0 20px 40px rgba(0,0,0,0.05);
  }

  .category-pill {
    display: inline-block;
    background: #000;
    color: #fff;
    padding: 6px 16px;
    border-radius: 50px;
    font-size: 0.85rem;
    font-weight: 700;
    margin-bottom: 25px;
    text-transform: uppercase;
    letter-spacing: 1px;
  }

  .rich-text {
    font-size: 1.15rem;
    line-height: 1.8;
    color: #333;
  }

  .rich-text p {
    margin-bottom: 24px;
  }

  .rich-text ul {
    margin-bottom: 24px;
    padding-left: 20px;
  }

  .rich-text li {
    margin-bottom: 8px;
  }

  .status-msg, .error-container {
    text-align: center;
    padding: 100px 20px;
  }

  .back-home {
    display: inline-block;
    margin-top: 20px;
    padding: 12px 30px;
    background: black;
    color: white;
    text-decoration: none;
    border-radius: 50px;
    font-weight: 600;
    transition: transform 0.2s;
  }

  .back-home:hover {
    transform: scale(1.05);
  }
</style>