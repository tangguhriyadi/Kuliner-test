import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import FoodsView from '../views/FoodsView.vue'
import FoodDetail from '../views/FoodDetail.vue'
import CartView from '../views/CartView.vue'


const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/FoodsView',
    name: 'FoodsView',
    component: FoodsView
  },
  {
    path: '/FoodsView/:id',
    name: 'FoodDetail',
    component: FoodDetail
  },
  {
    path: '/CartView',
    name: 'CartView',
    component: CartView
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
