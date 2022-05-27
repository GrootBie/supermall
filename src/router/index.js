import { createRouter, createWebHistory } from 'vue-router'
import Home from "@/views/home/Home";
import Mine from "@/views/Mine";
const ShopCart = () => import('@/views/cart/ShopCart')
const Detail = () => import('@/views/detail/Detail')
const routes = [
  {
    path: '/',
    redirect : '/home',
  },

  {
    path: '/home',
    name: 'home',
    component: Home,
    meta:{
      title:'首页'
    }
  },
   {
    path: '/detail/:iid/',
    name: 'detail',
    component: Detail,
    meta:{
      title:'商品详情'
    }
  },
  {
    path: '/mine',
    name: 'mine',
    component: Mine,
    meta:{
      title:'我的'
    }
  },
  {
    path: '/category',
    name: 'category',
    component: ()=>import('@/views/category/Category'),
    meta:{
      title:'分类'
    }
  },
  {
    path: '/shopcart',
    name: 'shopcart',
    component: ShopCart,
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

router.beforeEach((to,from,next)=>{
  console.log(to.name)
  if (to.name==='mine'){
    next()
  }else {
     let token = localStorage.getItem('Authorization');
    if (token === null || token === '') {
      next('/mine')
    }
    else {
      next()
    }
  }

  document.title=to.meta.title?'商城-'+to.meta.title:'商城'
})
export default router
