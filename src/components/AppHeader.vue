<template>
  <nav class="navbar">
    <div class="logo">
      <h1>Zayeem Zaki</h1>
    </div>
    <!-- Hamburger Icon for Mobile -->
    <div class="menu-icon" @click="toggleMenu">
      <!-- Display hamburger if menu is closed; display "X" if open -->
      <span v-if="!menuOpen">&#9776;</span>
      <span v-else>&times;</span>
    </div>
    <!-- Navigation Links -->
    <ul class="nav-links" :class="{ open: menuOpen }">
      <li>
        <router-link to="/about-me" @click="closeMenu">Home</router-link>
      </li>
      <li>
        <router-link to="/experience" @click="closeMenu">Experience</router-link>
      </li>
      <li>
        <router-link to="/portfolio" @click="closeMenu">Projects</router-link>
      </li>
      <li>
        <router-link to="/contact" @click="closeMenu">Contact</router-link>
      </li>
    </ul>
  </nav>
</template>

<script>
export default {
  name: 'AppHeader',
  data() {
    return {
      menuOpen: false
    }
  },
  methods: {
    toggleMenu() {
      this.menuOpen = !this.menuOpen;
    },
    closeMenu() {
      this.menuOpen = false;
    }
  }
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
  position: relative;
}

/* Regular horizontal navigation */
.nav-links {
  list-style: none;
  display: flex;
  gap: 1.5rem;
  transition: max-height 0.3s ease-in-out;
}

.nav-links li a {
  color: white;
  text-decoration: none;
  font-weight: bold;
}

.nav-links li a:hover {
  text-decoration: underline;
}

/* Hide the hamburger icon on larger screens */
.menu-icon {
  display: none;
  cursor: pointer;
  font-size: 2rem;
}

/* Responsive styles for mobile */
@media (max-width: 768px) {
  /* Show hamburger icon on mobile */
  .menu-icon {
    display: block;
  }
  
  /* Stack navigation links vertically and hide them initially */
  .nav-links {
    flex-direction: column;
    background-color: #3498db;
    position: absolute;
    top: 100%;
    left: 0;
    width: 100%;
    max-height: 0;
    overflow: hidden;
  }
  
  /* When the menu is open, allow enough height for the links */
  .nav-links.open {
    max-height: 300px; /* Adjust as needed */
  }
  
  .nav-links li {
    padding: 1rem;
    text-align: center;
  }
}
</style>
