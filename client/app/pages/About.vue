<!-- Motheo Morena u24666981 -->
<template>
  <div class="about-page">

    <!-- HERO -->
    <section class="hero">
      <div class="hero-overlay">
        <h1>About Us</h1>
        <p class="motto">“Travel the world through stories”</p>
      </div>
    </section>

    <!-- CONTENT -->
    <section class="content">

      <div class="card highlight">
        <h2>Our Mission</h2>
        <p>
          We share immersive travel experiences that inspire people to explore
          the world and discover new cultures through authentic storytelling
          and powerful visuals.
        </p>
      </div>

      <div class="grid">

        <div class="card">
          <h2>Our Values</h2>
          <ul>
            <li>Authentic storytelling</li>
            <li>Respect for cultures & environments</li>
            <li>High-quality visual experiences</li>
            <li>Global curiosity</li>
          </ul>
        </div>

        <div class="card">
          <h2>Partners</h2>
          <p>
            We collaborate with travel creators, photographers, and tourism boards
            across the globe to bring you real experiences.
          </p>
        </div>

        <div class="card rating">
          <h2>Community Rating</h2>
          <div class="stars">★★★★★</div>
          <p>4.9 / 5 from 12,000+ readers</p>
        </div>

      </div>

    </section>

  </div>
</template>

<style scoped>
  /* PAGE WRAPPER */
  .about-page {
    font-family: system-ui, -apple-system, sans-serif;
    background: #f8f9fb;
    min-height: 100vh;
  }

  /* HERO */
  .hero {
    height: 45vh;
    background: url("https://images.unsplash.com/photo-1500530855697-b586d89ba3ee") center/cover no-repeat;
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .hero-overlay {
    background: rgba(0,0,0,0.55);
    width: 100%;
    height: 100%;
    color: white;
    display: flex;
    flex-direction: column;
    justify-content: center;
    text-align: center;
    padding: 20px;
  }

  .hero h1 {
    font-size: clamp(2.5rem, 5vw, 4rem);
    margin-bottom: 10px;
  }

  .motto {
    font-size: 1.2rem;
    opacity: 0.9;
    font-style: italic;
  }

  /* CONTENT */
  .content {
    max-width: 60%;
    margin: 2% auto 3%;
    padding: 0 20px;
  }

  /* GRID */
  .grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
    gap: 20px;
  }

  /* CARD */
  .card {
    background: white;
    padding: 25px;
    border-radius: 14px;
    box-shadow: 0 12px 30px rgba(0,0,0,0.06);
    transition: transform 0.2s ease;
  }

  .card:hover {
    transform: translateY(-5px);
  }

  .card h2 {
    margin-bottom: 12px;
    font-size: 1.3rem;
  }

  /* HIGHLIGHT CARD */
  .highlight {
    margin-bottom: 25px;
    border-left: 5px solid #000;
  }

  /* LIST */
  .card ul {
    padding-left: 18px;
  }

  .card li {
    margin-bottom: 8px;
    color: #444;
  }

  /* RATING */
  .rating {
    text-align: center;
  }

  .stars {
    font-size: 1.5rem;
    color: gold;
    margin: 10px 0;
  }
</style>