// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'

// 1.1使用路由先要导入路由包
// import VueRouter from 'vue-router'
import Mint from 'mint-ui'
import 'mint-ui/lib/style.css'
import App from './App'
// 1.3使用自定义的路由模块
import router from './router'

// import VueResource from 'vue-resource'

// 使用axios
import axios from 'axios'
import VueAxios from 'vue-axios'
// 使用 Vant-UI里面的pullrefresh组件
import { PullRefresh, NoticeBar } from 'vant'
import 'vant/lib/pull-refresh/style'

Vue.use(NoticeBar)

Vue.use(VueAxios, axios)
// 解决axios.get请求返回结果中有中文乱码的情况***重点***
axios.defaults.headers = {
  'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8'
}
Vue.use(Mint)
// 1.2安装路由
// Vue.use(VueRouter)

// Vue.use(VueResource)
Vue.use(PullRefresh)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  render: c => c(App)
})
