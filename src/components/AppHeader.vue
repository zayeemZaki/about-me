<template>
  <nav class="navbar">
    <div class="logo">
      <h1>Zayeem Zaki</h1>
    </div>
    <ul class="nav-links">
      <li><router-link to="/">Home</router-link></li>
      <li><router-link to="/experience">Experience</router-link></li>
      <li><router-link to="/portfolio">Projects</router-link></li>
      <li><router-link to="/contact">Contact</router-link></li>
    </ul>
  </nav>
</template>

<script>
export default {
  name: 'AppHeader'
}
</script>

<style scoped>
.navbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #3498db;
  color: white;
  padding: 1rem 2rem;
}
.nav-links {
  list-style: none;
  display: flex;
  gap: 1.5rem;
}
.nav-links li a {
  color: white;
  text-decoration: none;
  font-weight: bold;
}
.nav-links li a:hover {
  text-decoration: underline;
}
</style>
