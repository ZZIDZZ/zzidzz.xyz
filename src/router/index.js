import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/HomeView.vue'
import AboutView from '@/views/AboutView.vue'
import ProjectView from '@/views/ProjectView.vue'
import Info from '@/views/InfoView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  _routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      // component: () => import('../views/AboutView.vue')
      component: AboutView
    },
    {
      path: '/projects',
      name: 'projects',
      // component: () => import('../views/ProjectView.vue')
      component: ProjectView
    },
    {
      path: '/info',
      name: 'info',
      // component: () => import('../views/InfoView.vue')
      component: Info
    }
  ],
  get routes() {
    return this._routes
  },
  set routes(value) {
    this._routes = value
  },
})

export default router
