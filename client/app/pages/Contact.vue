<template>
  <div class="contact-page">

    <!-- HERO -->
    <section class="hero">
      <h1>Contact Us</h1>
      <p class="subtitle">
        Got questions or want to collaborate? Send us a message.
      </p>
    </section>

    <!-- FORM CARD -->
    <section class="form-wrapper">

      <form class="form">

        <div class="input-group">
          <label>Name</label>
          <input type="text" placeholder="Your Name" />
        </div>

        <div class="input-group">
          <label>Email</label>
          <input type="email" placeholder="Email Address" />
        </div>

        <div class="input-group">
          <label>Message</label>
          <textarea rows="6" placeholder="Your Message"></textarea>
        </div>

        <button type="submit">Send Message</button>

      </form>

    </section>

  </div>
</template>

<style scoped>
  .contact-page {
    font-family: system-ui, -apple-system, sans-serif;
    background: #f8f9fb;
    min-height: 100vh;
    padding-bottom: 60px;
  }

  .hero {
    text-align: center;
    padding: 80px 20px 40px;
    background: linear-gradient(to bottom, #111, #1f1f1f);
    color: white;
  }

  .hero h1 {
    font-size: clamp(2.2rem, 5vw, 3.5rem);
    margin-bottom: 10px;
  }

  .subtitle {
    color: rgba(255,255,255,0.75);
    font-size: 1.1rem;
  }

  .form-wrapper {
    max-width: 700px;
    margin: -40px auto 0;
    padding: 0 20px;
  }

  .form {
    background: white;
    padding: 30px;
    border-radius: 16px;
    box-shadow: 0 15px 40px rgba(0,0,0,0.08);
    display: flex;
    flex-direction: column;
    gap: 18px;
  }

  .input-group {
    display: flex;
    flex-direction: column;
    gap: 6px;
  }

  label {
    font-size: 0.9rem;
    font-weight: 600;
    color: #333;
  }

  input,
  textarea {
    padding: 12px 14px;
    border: 1px solid #e5e5e5;
    border-radius: 10px;
    font-size: 1rem;
    outline: none;
    transition: 0.2s ease;
    background: #fafafa;
  }

  input:focus,
  textarea:focus {
    border-color: #000;
    background: #fff;
    box-shadow: 0 0 0 3px rgba(0,0,0,0.05);
  }

  button {
    padding: 14px;
    border: none;
    background: #000;
    color: white;
    border-radius: 10px;
    cursor: pointer;
    font-weight: 600;
    transition: all 0.2s ease;
    margin-top: 10px;
  }

  button:hover {
    transform: translateY(-2px);
    background: #222;
  }
</style>