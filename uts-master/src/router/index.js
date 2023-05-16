import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import ListSurah from '../views/ListSurah.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/surah:id',
      name: 'surah',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/ListSurah.vue')
    }
  ]
})

export default router
