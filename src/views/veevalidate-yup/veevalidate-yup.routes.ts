import { RouteRecordRaw } from 'vue-router'

export const authRouteNames = {
  modelExample: 'modelExample',
  eventsExample: 'eventsExample',
  manuallyErrors: 'manuallyErrors',
  formExample: 'formExample',
  customComponents: 'customComponents'
}

export const veevalidateYupRoutes: Array<RouteRecordRaw> = [
  {
    path: 'model',
    name: authRouteNames.modelExample,
    component: () => import('./ModelExample.vue')
  },

  {
    path: 'events',
    name: authRouteNames.eventsExample,
    component: () => import('./EventsExample.vue')
  },

  {
    path: 'manually-errors',
    name: authRouteNames.manuallyErrors,
    component: () => import('./ManuallyErrors.vue')
  },

  {
    path: 'form-example',
    name: authRouteNames.formExample,
    component: () => import('./FormExample.vue')
  },

  {
    path: 'custom-components',
    name: authRouteNames.customComponents,
    component: () => import('./CustomComponents.vue')
  }
]
