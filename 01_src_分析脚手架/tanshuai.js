// import Vue from 'vue/dist/vue'
import Vue from 'vue'
// 引入App组件，它是所有组件的父组件
// import App from './App.vue'
// import router from './router'

// 关闭Vue的生产提示
Vue.config.productionTip = false

let a = 1

new Vue({
  el: '#app',
  // router,
  // 将App组件放入容器中
  // render: h => h(App)
  render(a){ //createElement
    // 没用this就可以简写为箭头函数，也就是上面的形式
    console.log(typeof a)
    return a('h1','你好啊')
  }

  // template: '<h1>你好啊</h1>',
  // components: {
  //   App
  // },
})
