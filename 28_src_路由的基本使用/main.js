// 引入Vue
import Vue from 'vue'
// 引入App
import App from './App.vue'
// 引入store
Vue.config.productionTip = false
// 引入VueRouter
import VueRouter from "vue-router";
// 使用VueRouter
Vue.use(VueRouter)

// 引入router
import router from './router'

// 创建vm
new Vue({
  el: '#app',
  render: h => h(App),
  router
})

