<template>
  <section class="contact">
    <h2>Contact Me</h2>
    <p class="contact-message">
      I'm always excited to connect with new people, explore innovative projects, and share ideas.
      Feel free to reach out to me through any of the following channels:
    </p>
    <div class="contact-details">
      <div class="contact-item">
        <span class="contact-label">Email:</span>
        <a href="mailto:zayeemzaki45@gmail.com">zayeemzaki45@gmail.com</a>
      </div>
      <div class="contact-item">
        <span class="contact-label">Phone:</span>
        <a href="tel:+15678017023">+1 (567) 801-7023</a>
      </div>
      <div class="contact-item">
        <span class="contact-label">Social Profiles:</span>
        <ul class="social-links">
          <li><a href="https://github.com/zayeemZaki" target="_blank" rel="noopener noreferrer">GitHub</a></li>
          <li><a href="https://www.linkedin.com/in/zayeem-zaki" target="_blank" rel="noopener noreferrer">LinkedIn</a></li>
          <li><a href="https://x.com/zayeem_zaki" target="_blank" rel="noopener noreferrer">Twitter</a></li>
          <li><a href="https://www.youtube.com/@AlgoAcez/" target="_blank" rel="noopener noreferrer">YouTube</a></li>
        </ul>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'ContactPage'
}
</script>

<style scoped>
.contact {
  padding: 2rem;
  text-align: center;
  background: linear-gradient(135deg, rgb(248, 248, 248) 0%,rgb(147, 98, 98) 100%);
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0,0,0,0.05);
  margin: 2rem auto;
  max-width: 800px;
}

.contact h2 {
  font-size: 2.5rem;
  margin-bottom: 1rem;
  color:rgb(0, 2, 6);
}

.contact-message {
  font-size: 1.2rem;
  margin-bottom: 2rem;
  color: rgb(0, 0, 0);
;
  line-height: 1.6;
}

.contact-details {
  max-width: 600px;
  margin: 0 auto;
  text-align: left;
}

.contact-item {
  margin-bottom: 1.5rem;
  font-size: 1.1rem;
  color: #333;
}

.contact-label {
  font-weight: bold;
  margin-right: 0.5rem;
  color:rgb(0, 0, 0);
}

.contact-item a {
  color:rgb(64, 15, 15);
  text-decoration: none;
  transition: color 0.3s;
}

.contact-item a:hover {
  color: #2980b9;
}

.social-links {
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
}

.social-links li {
  /* Optionally, add a background and padding for a button-like look */
  background: #e0f7fa;
  padding: 0.5rem 1rem;
  border-radius: 20px;
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);
}

.social-links li a {
  color: #213555;
  font-weight: bold;
  text-decoration: none;
}

.social-links li a:hover {
  text-decoration: underline;
}

/* Responsive adjustments */
@media (max-width: 600px) {
  .contact {
    padding: 1.5rem;
  }
  .contact h2 {
    font-size: 2rem;
  }
  .contact-message {
    font-size: 1rem;
  }
  .contact-item {
    font-size: 1rem;
  }
}
</style>
