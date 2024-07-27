import { defineAsyncComponent } from 'vue'
import { RouteRecordRaw } from 'vue-router'

export const routes = [
  {
    path: '/',
    component: defineAsyncComponent(() => import('../components/layouts/SurveyLayout.vue')),
    children: [
      {
        path: '',
        component: defineAsyncComponent(() => import('../components/views/Surveys.vue'))
      }
    ]
  }
] as RouteRecordRaw[]