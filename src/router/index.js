import { createRouter, createWebHistory } from 'vue-router'
import Home from "@/views/Home";
import Mine from "@/views/Mine";
const ShopCart = () => import('@/views/ShopCart')
const routes = [
  {
    path: '/',
    redirect : '/home',
  },
  {
    path: '/home',
    name: 'home',
    component: Home
  },
  {
    path: '/mine',
    name: 'mine',
    component: Mine
  },
  {
    path: '/category',
    name: 'category',
    component: ()=>import('@/views/Category')
  },
  {
    path: '/shopcart',
    name: 'shopcart',
    component: ShopCart
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
