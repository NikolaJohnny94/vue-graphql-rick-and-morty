import { createRouter, createWebHistory } from 'vue-router'
import type { Router } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router: Router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      redirect: '/home',
    },
    {
      path: '/home',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/character/:slug',
      name: 'character',
      component: () => import('../views/CharacterView.vue'),
      props: true,
    },
  ],
})

export default router
