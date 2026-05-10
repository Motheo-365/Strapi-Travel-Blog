<template>
  <div>
    <Nav />
    <NuxtPage />
  </div>
</template>

<style>
  /* GLOBAL DESIGN SYSTEM */
  :root {
    --color-bg: #f8f9fb;
    --color-text: #1a1a1a;
    --color-muted: #6b6b6b;
    --color-accent: #c5a47e;

    --color-card: #ffffff;
    --color-border: #eaeaea;

    --shadow-sm: 0 4px 10px rgba(0,0,0,0.05);
    --shadow-md: 0 10px 25px rgba(0,0,0,0.08);
    --shadow-lg: 0 20px 40px rgba(0,0,0,0.12);

    --font-fancy: 'Playfair Display', serif;
    --font-simple: 'Montserrat', sans-serif;
  }

  /* GLOBAL RESET */
  body {
    margin: 0;
    background: var(--color-bg);
    color: var(--color-text);
    font-family: var(--font-simple);
    line-height: 1.7;
  }

  /* HEADINGS */
  h1, h2, h3 {
    font-family: var(--font-fancy);
    font-weight: 700;
    margin: 0;
  }

  /* LINKS DEFAULT */
  a {
    color: inherit;
  }

  /* CATEGORY TAG GLOBAL STYLE */
  .category-tag {
    letter-spacing: 0.15rem;
    text-transform: uppercase;
    font-size: 0.7rem;
  }
</style>