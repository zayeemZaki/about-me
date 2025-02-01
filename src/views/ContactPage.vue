<template>
  <section class="contact">
    <h2>Contact Me</h2>
    <form @submit.prevent="submitForm">
      <div>
        <input type="text" v-model="form.name" placeholder="Your Name" required>
      </div>
      <div>
        <input type="email" v-model="form.email" placeholder="Your Email" required>
      </div>
      <div>
        <textarea v-model="form.message" placeholder="Your Message" required></textarea>
      </div>
      <button type="submit">Send Message</button>
    </form>
    <p v-if="successMessage" class="success">{{ successMessage }}</p>
  </section>
</template>

<script>
export default {
  name: 'ContactPage',
  data() {
    return {
      form: {
        name: '',
        email: '',
        message: ''
      },
      successMessage: ''
    }
  },
  methods: {
    submitForm() {
      // Here you could integrate with an API or email service.
      this.successMessage = 'Thank you for your message!';
      // Reset the form
      this.form.name = ''
      this.form.email = ''
      this.form.message = ''
    }
  }
}
</script>

<style scoped>
.contact {
  padding: 2rem;
  text-align: center;
}
.contact form {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  max-width: 500px;
  margin: 0 auto;
}
.contact input, .contact textarea {
  padding: 0.75rem;
  border: 1px solid #ccc;
  border-radius: 4px;
  width: 100%;
}
.contact button {
  padding: 0.75rem;
  background-color: #3498db;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}
.contact button:hover {
  background-color: #2980b9;
}
.success {
  margin-top: 1rem;
  color: green;
}
</style>
