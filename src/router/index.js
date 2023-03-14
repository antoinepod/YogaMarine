import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/HomeView.vue'
import NotFoundView from '@/views/NotFoundView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Home',
      component: HomeView
    },
    {
      path: '/yoga-vinyasa',
      name: "Yoga Vinyasa",
      component: NotFoundView
    },
    {
      path: '/demande-et-reservation',
      name: "Demande et réservation",
      component: NotFoundView
    },
    {
      path: '/contact',
      name: 'Contact',
      component: NotFoundView
    },
    {
      path: "/:catchall(.*)*",
      name: "NotFound",
      component: NotFoundView
    }
  ]
})

export default router
