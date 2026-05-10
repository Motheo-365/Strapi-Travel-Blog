<!-- Motheo Morena u24666981

    Navigation bar component that has links to all the pages. And display page we're currently on.
    Layout:
        - Far left: Company logo
        - Far right: Links to all the pages
            - Dropdown:
                - Link to about us page

-->
<script setup>
const route = useRoute()

const isActive = (path) => route.path === path
</script>

<template>
  <nav class="navbar">

    <!-- LOGO -->
    <div class="logo">
      <NuxtLink to="/">🌍 TravelBlog</NuxtLink>
    </div>

    <!-- LINKS -->
    <div class="links">

      <NuxtLink to="/" :class="{ active: isActive('/') }">
        Home
      </NuxtLink>

      <NuxtLink to="/about" :class="{ active: isActive('/about') }">
        About Us
      </NuxtLink>

      <NuxtLink to="/contact" :class="{ active: isActive('/contact') }">
        Contact
      </NuxtLink>

    </div>

  </nav>
</template>

<style scoped>
    .navbar {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 15px 30px;
    background: white;
    box-shadow: 0 2px 10px rgba(0,0,0,0.05);
    }

    .logo a {
    font-weight: bold;
    text-decoration: none;
    font-size: 1.2rem;
    color: black;
    }

    /* LINKS */
    .links {
    display: flex;
    gap: 25px;
    }

    /* BASE LINK STYLE */
    .links a {
    position: relative;
    text-decoration: none;
    color: #555;
    font-weight: 500;
    padding: 5px 0;
    transition: color 0.3s ease;
    }

    /* HOVER COLOR */
    .links a:hover {
    color: black;
    }

    /* ================= UNDERLINE ANIMATION ================= */
    .links a::after {
    content: "";
    position: absolute;
    left: 0;
    bottom: -4px;
    width: 0%;
    height: 2px;
    background: black;
    transition: width 0.3s ease;
    }

    /* hover animation */
    .links a:hover::after {
    width: 100%;
    }

    /* active link */
    .links a.active {
    color: black;
    }

    /* active underline stays visible */
    .links a.active::after {
    width: 100%;
    }
</style>