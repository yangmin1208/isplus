import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home.vue'
import Order from '@/components/Order.vue'
import Find from '@/components/Find.vue'
import My from '@/components/My.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/home'
    },
    {
      path: '/order',
      component: Order
    },
    {
      path: '/home',
      component: Home
    },
    {
      path: '/find',
      component: Find
    },
    {
      path: '/my',
      component: My
    }
  ],
  linkActiveClass: 'mui-active' // 覆盖默认的路由高亮的类，router-link-active
})
