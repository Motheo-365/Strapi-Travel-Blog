<template>
  <div class="contact">

    <h1>Contact Us</h1>
    <p class="subtitle">
      Got questions or want to collaborate? Send us a message.
    </p>

    <form class="form">

      <input type="text" placeholder="Your Name" />
      <input type="email" placeholder="Email Address" />
      <textarea rows="6" placeholder="Your Message"></textarea>

      <button type="submit">Send Message</button>

    </form>

  </div>
</template>

<style scoped>
    .contact {
    max-width: 700px;
    margin: 60px auto;
    padding: 20px;
    }

    h1 {
    text-align: center;
    font-size: 2.5rem;
    }

    .subtitle {
    text-align: center;
    color: gray;
    margin-bottom: 30px;
    }

    /* FORM */
    .form {
    display: flex;
    flex-direction: column;
    gap: 15px;
    }

    input,
    textarea {
    padding: 12px;
    border: 1px solid #ddd;
    border-radius: 8px;
    font-size: 1rem;
    }

    button {
    padding: 12px;
    border: none;
    background: black;
    color: white;
    border-radius: 8px;
    cursor: pointer;
    transition: 0.2s;
    }

    button:hover {
    background: #333;
    }
</style>