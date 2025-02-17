import { createRouter, createWebHistory } from 'vue-router';
import Registration from '@/views/Registration.vue';
import Layout from '@/views/Layout.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      component: Layout,
      children: [
        { path: '', component: import("@/views/Home.vue") },
        { path: 'movie/:id', component: import("@/views/MovieDetails.vue") },
      ]
    },
    { path: '/registration', component: Registration },
    { path: '/:pathMatch(.*)*', component: import("@/views/NotFound.vue") },
  ],
})

export default router;
