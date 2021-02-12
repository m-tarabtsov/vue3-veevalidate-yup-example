import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'

import { routesNames } from './route-names'

import { veevalidateYupRoutes } from '@/views/veevalidate-yup/veevalidate-yup.routes'

import VeevalidateYupLayout from '@/layouts/VeevalidateYupLayout.vue'

export const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    redirect: { name: routesNames.modelExample },
    name: routesNames.rootPage
  },

  {
    path: '/veevalidate-yup',
    name: routesNames.veevalidateYup,
    redirect: routesNames.modelExample,
    component: VeevalidateYupLayout,
    children: veevalidateYupRoutes
  }
]

export const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),

  routes
})

export {
  routesNames
}
