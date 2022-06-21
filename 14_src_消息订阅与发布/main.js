// 引入Vue
import Vue from 'vue'
// 引入App
import App from './App.vue'
// 关闭Vue的生产提示
Vue.config.productionTip = false

// const P = Vue.extend({})
// const p = new P();
// Vue.prototype.x = p

// 创建vm
new Vue({
  el: '#app',
  render: h => h(App),
})
