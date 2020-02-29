import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: '/store'
  },
  {
    path: '/ebook',
    component: () => import('../views/ebook/index.vue'),
    children: [
      // 动态路由，fileName是传入的内容，传入后跳转到EbookReader.vue
      {
        path: ':fileName',
        component: () => import('../components/ebook/EbookReader')
      }
    ]
  },
  {
    path: '/store',
    component: () => import('../views/store/index.vue'),
    redirect: '/store/home',
    children: [
      {
        path: 'home',
        component: () => import('../views/store/StoreHome.vue')
      }
    ]
  }
]

const router = new VueRouter({
  routes
})

export default router
