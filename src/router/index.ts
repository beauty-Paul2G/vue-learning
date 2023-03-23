import { createRouter, createWebHistory } from 'vue-router'
import ProductsView from '../views/ProductsView.vue';
import CartView from '../views/CartView.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'products',
      component: ProductsView
    },
    {
      path: '/shopping-cart',
      name: 'shoppingCart',
      component: CartView
    }
  ]
})

export default router