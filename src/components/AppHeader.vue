<template>
  <nav class="navbar">
    <div class="logo">
      <h1>Zayeem Zaki</h1>
    </div>
    
    <!-- Hamburger Icon for Mobile -->
    <div class="menu-icon" @click="toggleMenu">
      <span v-if="!menuOpen">&#9776;</span>
      <span v-else>&times;</span>
    </div>
    
    <!-- Mobile Navigation Links -->
    <transition name="dropdown">
      <ul class="nav-links mobile" v-show="menuOpen">
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
    </transition>
    
    <!-- Desktop Navigation Links -->
    <ul class="nav-links desktop">
      <li>
        <router-link to="/about-me">Home</router-link>
      </li>
      <li>
        <router-link to="/experience">Experience</router-link>
      </li>
      <li>
        <router-link to="/portfolio">Projects</router-link>
      </li>
      <li>
        <router-link to="/contact">Contact</router-link>
      </li>
    </ul>
  </nav>
</template>

<script>
export default {
  name: 'AppHeader',
  data() {
    return {
      menuOpen: false,
    };
  },
  methods: {
    toggleMenu() {
      this.menuOpen = !this.menuOpen;
    },
    closeMenu() {
      this.menuOpen = false;
    },
  },
};
</script>

<style scoped>
/* Navbar Base Styles */
.navbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: linear-gradient(135deg, rgb(8, 8, 8) 0%, rgb(80, 0, 0) 100%);
  color: white;
  padding: 1rem 2rem;
  position: relative;
}

/* Desktop Navigation */
.nav-links.desktop {
  list-style: none;
  display: flex;
  gap: 1.5rem;
}

.nav-links.desktop li a {
  color: white;
  text-decoration: none;
  font-weight: bold;
}

.nav-links.desktop li a:hover {
  text-decoration: underline;
}

/* Hamburger Icon (hidden on desktop) */
.menu-icon {
  display: none;
  cursor: pointer;
  font-size: 2rem;
}

/* Mobile Navigation */
.nav-links.mobile {
  list-style: none;
  background: linear-gradient(135deg, rgb(8, 8, 8) 0%, #638C6D 100%);
  position: absolute;
  top: 100%;
  left: 0;
  width: 100%;
  margin: 0;
  padding: 0;
  z-index: 1000;
}

.nav-links.mobile li {
  padding: 1rem;
  text-align: center;
  border-bottom: 1px solid rgba(255, 255, 255, 0.2);
}

.nav-links.mobile li:last-child {
  border-bottom: none;
}

.nav-links.mobile li a {
  color: white;
  text-decoration: none;
  font-weight: bold;
}

.nav-links.mobile li a:hover {
  text-decoration: underline;
}

/* Transition Classes for Dropdown */
.dropdown-enter-active,
.dropdown-leave-active {
  transition: all 0.3s ease;
}
.dropdown-enter {
  opacity: 0;
  transform: translateY(-20px);
}
.dropdown-enter-to {
  opacity: 1;
  transform: translateY(0);
}
.dropdown-leave {
  opacity: 1;
  transform: translateY(0);
}
.dropdown-leave-to {
  opacity: 0;
  transform: translateY(-20px);
}

/* Responsive Styles */
@media (max-width: 768px) {
  /* Show hamburger icon on mobile */
  .menu-icon {
    display: block;
  }
  /* Hide desktop nav links on mobile */
  .nav-links.desktop {
    display: none;
  }
}
</style>
