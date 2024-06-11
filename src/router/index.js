import { createRouter, createWebHistory } from 'vue-router'
import ScrollView from '@/views/ScrollView.vue'
import LegalView from '@/views/LegalView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Scroll',
      component: ScrollView
    },
    {
      path: '/mentions-legales',
      name: 'Mentions légales - CGV',
      component: LegalView
    },
    {
      path: "/:catchall(.*)*",
      redirect: '/'
    }
  ]
})

export default router
