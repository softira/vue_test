// 引入Vue
// import Vue from "vue";
// 引入VueRouter
import VueRouter from "vue-router";
// 使用VueRouter
// Vue.use(VueRouter)

import About from '../views/About'
import Home from '../views/Home'

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