// 引入Vue
import Vue from 'vue'
// 引入App
import App from './App.vue'
// 引入混合hunhe2，hunhe3
import {hunhe,hunhe3} from './mixin'
// 关闭Vue的生产提示
Vue.config.productionTip = false

Vue.mixin(hunhe)
Vue.mixin(hunhe3)

// 创建vm
new Vue({
  el: '#app',
  render: h => h(App)
})
