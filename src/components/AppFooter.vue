<template>
  <footer class="footer">
    <p>&copy; 2025 Zayeem. Developed using Vue.</p>
  </footer>
</template>

<script>
export default {
  name: 'AppFooter'
}
</script>

<style scoped>
.footer {
  text-align: center;
  padding: 1rem;
  background-color: #f4f4f4;
  margin-top: 2rem;
}

/* Mobile Styles */
@media (max-width: 600px) {
  .footer {
    padding: 0.8rem;
    font-size: 0.9rem;
    margin-top: 1.5rem;
  }
}
</style>
