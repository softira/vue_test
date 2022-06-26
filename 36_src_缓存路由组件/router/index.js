// 引入Vue
// import Vue from "vue";
// 引入VueRouter
import VueRouter from "vue-router";
// 使用VueRouter
// Vue.use(VueRouter)

import About from '../views/About'
import Home from '../views/Home'
import News from '../views/News'
import Message from '../views/Message'
import Detail from '../views/Detail'

// 创建并暴露一个路由器
export default new VueRouter({
  routes:[
    {
      name:'about',
      path:'/About',
      component: About
    },
    {
      path:'/Home',
      component:Home,
      children:[
        {
          path:'News',
          component: News
        },
        {
          path:'Message',
          component: Message,
          children:[{
            name:'detail',
            path:'Detail/:id/:text',
            component: Detail,
            // props第一种写法，值为对象，该对象中所有key-value都会以props的形式传给Detail组件
            // props:{id:12,text:'dd'}
            // props第二种写法，值为boolean值，若boolean值为真，就会把该路由组件接收到的所有params参数以props的形式传给Detail组件
            // props:true,
            // props第三种写法，值为函数
            props($route){
              return{
                id:$route.params.id,
                text:$route.params.text,
                // 如果是query参数
                // id:$route.query.id,
                // text:$route.query.text,
              }
            }
          }]
        }
      ]
    }
  ]
})