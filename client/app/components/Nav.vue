<!-- Motheo Morena u24666981 -->
<script setup>
  const route = useRoute()
  const dropdownOpen = ref(false)

  let closeTimer = null

  const isActive = (paths) => {
    const pathArray = Array.isArray(paths) ? paths : [paths]
    return pathArray.some(path => {
      if (path === '/') return route.path === '/'
      return route.path.startsWith(path)
    })
  }

  const toggleDropdown = () => {
    dropdownOpen.value = !dropdownOpen.value
  }

  const closeDropdown = () => {
    if (closeTimer) clearTimeout(closeTimer)
    closeTimer = setTimeout(() => {
      dropdownOpen.value = false
    }, 1000)
  }
</script>

<template>
  <nav class="navbar">

    <!-- LOGO -->
    <div class="logo">
      <NuxtLink to="/">TravelBlog</NuxtLink>
    </div>

    <!-- LINKS -->
    <div class="links">
      <NuxtLink to="/search" :class="{active: isActive('/search')}">🔎︎</NuxtLink>
      
      <NuxtLink to="/" :class="{ active: isActive('/') }">Home </NuxtLink>

      <NuxtLink to="/blogs" :class="{active: isActive('/blogs', '/posts')}">Blogs</NuxtLink>

      <!-- DROPDOWN -->
      <div class="dropdown" @mouseleave="closeDropdown">

        <button class="dropbtn" @click="toggleDropdown">
          ☰
        </button>

        <div v-if="dropdownOpen" class="dropdown-menu">

          <NuxtLink
            to="/about"
            @click="closeDropdown"
            :class="{ active: isActive('/about') }"
          >
            About Us
          </NuxtLink>

          <NuxtLink
            to="/contact"
            @click="closeDropdown"
            :class="{ active: isActive('/contact') }"
          >
            Contact
          </NuxtLink>

        </div>
      </div>
    </div>
  </nav>
</template>

<style scoped>
  .navbar {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 18px 40px;
    background: rgba(255,255,255,0.85);
    backdrop-filter: blur(10px);
    border-bottom: 1px solid #eee;
    position: sticky;
    top: 0;
    z-index: 100;
  }

  .logo a {
    font-size: 1.3rem;
    font-weight: 700;
    text-decoration: none;
    color: black;
  }

  .links {
    display: flex;
    align-items: center;
    gap: 25px;
  }

  .links a,
  .dropbtn {
    font-weight: 500;
    font-size: 0.95rem;
    color: #555;
    text-decoration: none;
    background: none;
    border: none;
    cursor: pointer;
    position: relative;
  }

  .links a.active {
    color: black;
  }

  /* ================= DROPDOWN ================= */
  .dropdown {
    position: relative;
  }

  .dropbtn {
    padding-bottom: 4px;
  }

  .dropdown-menu {
    position: absolute;
    top: 35px;
    right: 0;
    background: white;
    min-width: 150px;
    box-shadow: 0 10px 25px rgba(0,0,0,0.08);
    border-radius: 10px;
    display: flex;
    flex-direction: column;
    overflow: hidden;
  }

  .dropdown-menu a {
    padding: 10px 14px;
    color: #333;
    text-decoration: none;
    transition: 0.2s;
  }

  .dropdown-menu a:hover {
    background: #f5f5f5;
  }

  /* ================= UNDERLINE (HOME ONLY) ================= */
  .links a::after {
    content: "";
    position: absolute;
    left: 0;
    bottom: 0;
    width: 100%;
    height: 2px;
    background: black;
    transform: scaleX(0);
    transform-origin: left;
    transition: transform 0.3s ease;
  }

  .links a:hover::after {
    transform: scaleX(1);
  }

  .links a.active::after {
    transform: scaleX(1);
  }
</style>