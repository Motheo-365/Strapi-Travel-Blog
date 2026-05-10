<!-- Motheo Morena u24666981
    
    Small Page talking about blog company.
    Motto, values, Partners, Ratings, etc.
-->
<template>
  <div class="about">

    <section class="hero">
      <h1>About Us</h1>
      <p class="motto">
        “Travel the world through stories”
      </p>
    </section>

    <section class="content">
      <div class="card">
        <h2>Our Mission</h2>
        <p>
          We share immersive travel experiences that inspire people to explore
          the world and discover new cultures.
        </p>
      </div>

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
          around the world.
        </p>
      </div>

      <div class="card">
        <h2>Community Rating</h2>
        <p>4.9 / 5 from 12,000+ readers</p>
      </div>

    </section>

  </div>
</template>

<style scoped>
    .about {
      padding: 60px 20px;
      max-width: 1000px;
      margin: auto;
    }

    /* HERO */
    .hero {
      text-align: center;
      margin-bottom: 40px;
    }

    .hero h1 {
      font-size: 3rem;
    }

    .motto {
      font-size: 1.2rem;
      color: gray;
      margin-top: 10px;
    }

    /* CONTENT */
    .content {
      display: grid;
      gap: 20px;
    }

    .card {
      background: white;
      padding: 20px;
      border-radius: 12px;
      box-shadow: 0 10px 25px rgba(0,0,0,0.05);
    }

    .card h2 {
      margin-bottom: 10px;
    }

    .card ul {
      padding-left: 20px;
    }

    .card li {
      margin-bottom: 5px;
    }
</style>