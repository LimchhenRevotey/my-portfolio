import { createRouter, createWebHistory } from 'vue-router'
import HomeViews from '@/views/home.views.vue'
import NotFoundViews from '@/views/not.found.views.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeViews,
    },
    {
      path: '/:pathMatch(.*)*',
      name: 'NotFound',
      component: NotFoundViews
    }
  ]
});

export default router
