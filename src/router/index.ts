import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AuthView from '@/layout/authLayout.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView,
  },
  {
    path: '/investment',
    name: 'investment',
    // route level code-splitting
    // this generates a separate chunk (About.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import('@/views/Investment.vue'),
  },

  {
    path: '/auth',
    component: AuthView,
    children: [
      {
        path: 'login',
        name: 'login',
        component: () => import('@/pages/Login.vue'),
      },
      {
        path: 'register',
        name: 'register',
        component: () => import('@/pages/Register.vue'),
      },
    ],
  },
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
})

export default router
