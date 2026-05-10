<script setup async>
  const config = useRuntimeConfig()
  const strapiUrl = config.public.strapiUrl || ''

  const currentSlide = ref(0)

  const { data: articles, pending, error } = await useFetch(
    `${strapiUrl}/api/articles?populate=*`
  )

  const posts = computed(() =>
    (articles.value?.data ?? []).filter(p => p?.image)
  )

  const featured = computed(() =>
    posts.value.slice(0, 5)
  )

  const nextSlide = () => {
    if (!featured.value.length) return
    currentSlide.value = (currentSlide.value + 1) % featured.value.length
  }

  const prevSlide = () => {
    if (!featured.value.length) return
    currentSlide.value =
      (currentSlide.value - 1 + featured.value.length) %
      featured.value.length
  }
</script>

<template>
  <div class="blog-container">

    <!-- ERROR STATE -->
    <div v-if="error" class="error-message">
      <p>Failed to load articles. Please try again later.</p>
    </div>

    <!-- LOADING STATE -->
    <div v-if="pending" class="blog-grid">
      <div v-for="n in 6" :key="n" class="skeleton-card"></div>
    </div>

    <!-- HERO SLIDER -->
    <section v-if="featured.length" class="hero-section">
      <div class="slider-window">
        <div class="slide-content">
          <NuxtImg
            v-if="featured[currentSlide]?.image?.url"
            :src="strapiUrl + featured[currentSlide].image.url"
            class="hero-img"
            alt="Featured post image"
          />
          <div class="hero-overlay">
            <h1>{{ featured[currentSlide]?.title }}</h1>
          </div>
        </div>

        <!-- Navigation Arrows -->
        <button class="nav-btn prev" @click="prevSlide" aria-label="Previous slide">←</button>
        <button class="nav-btn next" @click="nextSlide" aria-label="Next slide">→</button>

        <!-- Pagination Dots -->
        <div class="dots-container">
          <span
            v-for="(_, index) in featured"
            :key="index"
            class="dot"
            :class="{ active: index === currentSlide }"
            @click="currentSlide = index"
          />
        </div>
      </div>
    </section>

    <!-- BLOG POSTS GRID -->
    <section v-if="posts.length" class="blog-grid">
      <NuxtLink
        v-for="post in posts"
        :key="post.id"
        :to="`/posts/${post.documentId}`"
        class="card-link"
      >
        <article class="post-card">
          <div class="img-container">
            <NuxtImg
              v-if="post.image?.url"
              :src="strapiUrl + post.image.url"
              class="card-img"
              alt="Post thumbnail"
            />
            <span class="category-tag">
              {{ post.category?.name || 'Travel' }}
            </span>
          </div>

          <div class="card-body">
            <h2 class="card-title">{{ post.title }}</h2>
            <p class="card-excerpt">
              {{ post.description?.slice(0, 100) || 'No description available...' }}...
            </p>
          </div>
        </article>
      </NuxtLink>
    </section>

  </div>
</template>

<style scoped>
    /* Main Container */
    .blog-container {
        max-width: 1200px;
        margin: 0 auto;
        padding: 20px;
        font-family: system-ui, -apple-system, sans-serif;
    }

    /* HERO SECTION */
    .hero-section {
        position: relative;
        margin-bottom: 40px;
        border-radius: 12px;
        overflow: hidden;
        box-shadow: 0 10px 30px rgba(0,0,0,0.1);
    }

    .slider-window {
        position: relative;
        height: 500px;
        width: 100%;
    }

    .hero-img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        display: block;
    }

    .hero-overlay {
        position: absolute;
        inset: 0;
        background: linear-gradient(to top, rgba(0,0,0,0.7), transparent);
        display: flex;
        align-items: center;
        justify-content: center;
        color: white;
        padding: 20px;
    }

    .hero-overlay h1 {
        font-size: clamp(1.5rem, 5vw, 3rem);
        text-align: center;
        text-shadow: 2px 2px 4px rgba(0,0,0,0.5);
        max-width: 80%;
    }

    /* SLIDER CONTROLS */
    .nav-btn {
        position: absolute;
        top: 50%;
        transform: translateY(-50%);
        background: rgba(255, 255, 255, 0.8);
        border: none;
        width: 45px;
        height: 45px;
        border-radius: 50%;
        cursor: pointer;
        font-size: 1.2rem;
        display: flex;
        align-items: center;
        justify-content: center;
        transition: background 0.3s;
        z-index: 10;
    }

    .nav-btn:hover { background: white; }
    .prev { left: 20px; }
    .next { right: 20px; }

    .dots-container {
        position: absolute;
        bottom: 20px;
        left: 50%;
        transform: translateX(-50%);
        display: flex;
        gap: 8px;
        z-index: 10;
    }

    .dot {
        width: 12px;
        height: 12px;
        background: rgba(255, 255, 255, 0.4);
        border-radius: 50%;
        cursor: pointer;
    }

    .dot.active {
        background: white;
        transform: scale(1.2);
    }

    /* BLOG GRID */
    .blog-grid {
        display: grid;
        grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
        gap: 30px;
    }

    .card-link {
        text-decoration: none;
        color: inherit;
    }

    .post-card {
        background: white;
        border-radius: 8px;
        overflow: hidden;
        height: 100%;
        transition: transform 0.3s ease;
        box-shadow: 0 4px 6px rgba(0,0,0,0.05);
        border: 1px solid #eee;
    }

    .post-card:hover {
        transform: translateY(-5px);
    }

    /* Fixed Image Size for Cards */
    .img-container {
        position: relative;
        width: 100%;
        height: 200px;
        overflow: hidden;
    }

    .card-img {
        width: 100%;
        height: 100%;
        object-fit: cover;
    }

    .category-tag {
        position: absolute;
        bottom: 10px;
        left: 10px;
        background: #000;
        color: #fff;
        padding: 4px 12px;
        font-size: 0.75rem;
        font-weight: bold;
        text-transform: uppercase;
    }

    .card-body {
        padding: 20px;
    }

    .card-title {
        margin: 0 0 10px 0;
        font-size: 1.25rem;
        line-height: 1.3;
    }

    .card-excerpt {
        font-size: 0.95rem;
        color: #666;
        line-height: 1.5;
    }

    .error-message {
        color: #d32f2f;
        background: #ffebee;
        padding: 20px;
        border-radius: 8px;
        text-align: center;
    }

    .skeleton-card {
        height: 350px;
        background: #f0f0f0;
        border-radius: 8px;
        animation: pulse 1.5s infinite ease-in-out;
    }

    @keyframes pulse {
        0% { background-color: #f0f0f0; }
        50% { background-color: #e0e0e0; }
        100% { background-color: #f0f0f0; }
    }
</style>