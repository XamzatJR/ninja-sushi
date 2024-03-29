import { createRouter, createWebHistory } from 'vue-router'
const routes = [
  {
    path: '/',
    name: 'home',
    component: () => import('@/views/Home.vue'),
  },
  {
    path: '/about',
    name: 'about',
    component: () => import('@/views/About.vue'),
  },
  {
    path: '/cart',
    name: 'cart',
    component: () => import('@/views/Cart.vue'),
  },
  {
    path: '/product/:id',
    name: 'product',
    component: () => import('@/views/Product.vue'),
  },
  {
    path: '/:catchAll(.*)',
    name: 'NotFound',
    component: () => import('@/views/NotFound.vue'),
  },
  {
    path: '/profile',
    name: 'profile',
    meta: { requiresAuth: true },
    redirect: { name: 'history' },
    component: () => import('@/views/Profile.vue'),
    children: [
      {
        path: 'history',
        name: 'history',
        component: () => import('@/components/OrderHistory.vue'),
      },
      {
        path: 'favorite',
        name: 'favorite',
        component: () => import('@/components/FavoriteProducts.vue'),
      },
      {
        path: 'shipping',
        name: 'shipping',
        component: () => import('@/components/ShippingAddress.vue'),
      },
      {
        path: 'edit',
        name: 'edit',
        component: () => import('@/components/EditUserModal.vue'),
      },
    ],
  },

]

const router = createRouter({
  routes,
  history: createWebHistory(import.meta.env.BASE_URL),
})

export default router
