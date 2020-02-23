import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: '/ebook'
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
  }
]

const router = new VueRouter({
  routes
})

export default router
