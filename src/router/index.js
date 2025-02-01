import { createRouter, createWebHistory } from 'vue-router'
import HomePage from '../views/HomePage.vue'
import Experience from '../views/MyExperience.vue'
import Portfolio from '../views/PortfolioPage.vue'
import Contact from '../views/ContactPage.vue'

const routes = [
  { path: '/about-me', name: 'HomePage', component: HomePage },
  { path: '/experience', name: 'Experience', component: Experience },
  { path: '/portfolio', name: 'Portfolio', component: Portfolio },
  { path: '/contact', name: 'Contact', component: Contact }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
