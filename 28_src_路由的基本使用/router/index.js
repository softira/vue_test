// 引入Vue
// import Vue from "vue";
// 引入VueRouter
import VueRouter from "vue-router";
// 使用VueRouter
// Vue.use(VueRouter)

import About from '../components/About'
import Home from '../components/Home'

// 创建并暴露一个路由器
export default new VueRouter({
  routes:[
    {
      path:'/About',
      component: About
    },
    {
      path:'/Home',
      component:Home
    }
  ]
})