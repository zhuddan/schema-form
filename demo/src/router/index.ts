import type { App } from 'vue';
import { createRouter, createWebHistory } from 'vue-router';
import type { RouteRecordRaw } from 'vue-router';

export const formRoutes: RouteRecordRaw[] = [

  {
    path: '/form/base',
    meta: {
      title: '基础实例',
    },
    component: () => import('@/views/form/base.vue'),
  },
  {
    path: '/form/use-form-model',
    meta: {
      title: '使用formModel',
    },
    component: () => import('@/views/form/base.vue'),
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      meta: {
        title: '登录',
        auth: false,
      },
      component: () => import('@/views/home/index.vue'),
    },
    ...formRoutes,
    {
      path: '/:path(.*)',
      meta: {
        title: '404 not-find',
      },
      component: () => import('@/views/error/404.vue'),
    },
  ],
});

export function setupRouter(app: App) {
  app.use(router);
}

export default router;
