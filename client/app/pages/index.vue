<!-- Motheo Morena u24666981
 
    Page has:
        - Interctive Slide:
            - show of some of the things the blog has, e.g:
                - Skiing and snowboarding in the swiss alps
                - Beach break: Enjoy the coastline view of santorini
                - Etc. Show sensationalised headings like that
            - layout: 
                - Large image with heading in center.
                - At bottom of image, circles to show which 'slideshow' currently on
                - make left-right, right-left scrolling

        - Blog Posts:
            - The most recent on the right
            - 3 other on the right
            - The rest on the bottom. Displaying:
                - Picture (with tag by bottom left)
                - Title
                - short preview of content
            - These blogs should all be links to the main blogs specific page
-->
<script setup>
    const config = useRuntimeConfig()
    const strapiUrl = config.public.strapiUrl

    const posts = ref([])
    const featured = ref([])
    const currentSlide = ref(0)

    // fetch from Strapi (auto runs)
    const { data } = await useFetch(
    `${strapiUrl}/api/articles`,
    {
        query: {
        populate: "*",
        sort: "createdAt:desc"
        }
    }
    )

    // safely assign data
    posts.value = data.value?.data || []
    featured.value = posts.value.slice(0, 3)

    // slideshow
    const nextSlide = () => {
    currentSlide.value =
        (currentSlide.value + 1) % featured.value.length
    }

    const prevSlide = () => {
    currentSlide.value =
        (currentSlide.value - 1 + featured.value.length) % featured.value.length
    }
</script>

<template>
  <div class="blog">

    <!-- ================= HERO SLIDESHOW ================= -->
    <div class="hero" v-if="featured.length">

      <div class="slide">
        <img
          :src="strapiUrl + featured[currentSlide].attributes.image.data.attributes.url"
          class="hero-img"
        />

        <div class="overlay">
          <h1>{{ featured[currentSlide].attributes.title }}</h1>
        </div>
      </div>

      <div class="controls">
        <button @click="prevSlide">←</button>
        <button @click="nextSlide">→</button>
      </div>

      <div class="dots">
        <span
          v-for="(item, index) in featured"
          :key="index"
          :class="{ active: index === currentSlide }"
        />
      </div>

    </div>

    <!-- ================= BLOG GRID ================= -->
    <div class="grid">

      <NuxtLink
        v-for="post in posts"
        :key="post.id"
        :to="`/posts/${post.id}`"
        class="card-link"
      >

        <Card>

          <div class="img-wrapper">
            <img
              :src="strapiUrl + post.attributes.image.data.attributes.url"
            />

            <div class="tag">
              {{ post.attributes.category }}
            </div>
          </div>

          <h2>{{ post.attributes.title }}</h2>

          <p>
            {{ post.attributes.description?.slice(0, 100) }}...
          </p>

        </Card>

      </NuxtLink>

    </div>

  </div>
</template>

<style scoped>
    .blog {
        width: 100%;
    }

    /* HERO */
    .hero {
        position: relative;
        height: 60vh;
        overflow: hidden;
    }

    .hero-img {
        width: 100%;
        height: 60vh;
        object-fit: cover;
    }

    .overlay {
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        display: flex;
        align-items: center;
        justify-content: center;
        background: rgba(0,0,0,0.4);
        color: white;
        font-size: 2rem;
        text-align: center;
    }

    /* controls */
    .controls {
        position: absolute;
        bottom: 20px;
        width: 100%;
        display: flex;
        justify-content: space-between;
        padding: 0 20px;
    }

    .controls button {
        background: white;
        border: none;
        padding: 10px;
        border-radius: 50%;
        cursor: pointer;
    }

    /* dots */
    .dots {
        position: absolute;
        bottom: 10px;
        width: 100%;
        text-align: center;
    }

    .dots span {
        display: inline-block;
        width: 10px;
        height: 10px;
        margin: 5px;
        border-radius: 50%;
        background: gray;
    }

    .dots .active {
        background: white;
    }

    /* GRID */
    .grid {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
        gap: 20px;
        padding: 30px;
    }

    .tag {
        position: absolute;
        background: black;
        color: white;
        padding: 5px 10px;
        font-size: 0.7rem;
    }

    .card h2 {
        padding: 10px;
        font-size: 1.1rem;
    }

    .card p {
        padding: 0 10px 15px;
        font-size: 0.85rem;
        color: gray;
    }
</style>