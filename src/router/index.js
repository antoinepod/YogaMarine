import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/HomeView.vue'
import AboutMeView from '@/views/AboutMeView.vue'
import YogaVinyasaView from '@/views/YogaVinyasaView.vue'
import ReservationView from '@/views/ReservationView.vue'
import ContactView from '@/views/ContactView.vue'
import LegalView from '@/views/LegalView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Home',
      component: HomeView
    },
    {
      path: '/qui-suis-je',
      name: 'Qui suis-je',
      component: AboutMeView
    },
    {
      path: '/yoga-vinyasa',
      name: "Yoga Vinyasa",
      component: YogaVinyasaView
    },
    {
      path: '/demande-et-reservation',
      name: "Demande et réservation",
      component: ReservationView
    },
    {
      path: '/contact',
      name: 'Contact',
      component: ContactView
    },
    {
      path: '/mentions-legales-cgv',
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
