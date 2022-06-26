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
const router = new VueRouter({
  routes:[
    {
      name:'about',
      path:'/About',
      component: About,
      meta:{tit:'关于'}
    },
    {
      name:'home',
      path:'/Home',
      component:Home,
      meta:{tit:'主页'},
      children:[
        {
          name:'news',
          path:'News',
          component: News,
          meta:{tit:'新闻',isAuth:true},
          beforeEnter(to ,from,next){
            if(to.meta.isAuth){
              if(localStorage.getItem('pwd') === '1'){
                next()
              }else{
                let pwd = prompt('pwd?')
                if(pwd === '1'){
                  localStorage.setItem('pwd',pwd)
                  next()
                }
              }
            }else{
              next()
            }
          }
        },
        {
          name:'message',
          path:'Message',
          component: Message,
          meta:{tit:'信息',isAuth:true},
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
            },
            meta:{tit:'详情',isAuth:true}
          }]
        }
      ]
    }
  ]
})

// // 全局前置路由守卫：初始化、每次路由切换前执行
// router.beforeEach((to,from,next) => {
//   console.log(to,from,next)
//   if(to.meta.isAuth){
//     if(localStorage.getItem('pwd') === '1'){
//       next()
//     }else{
//       let pwd = prompt('pwd?')
//       if(pwd === '1'){
//         localStorage.setItem('pwd',pwd)
//         next()
//       }
//     }
//   }else{
//     next()
//   }
// })

// // 全局后置路由守卫，初始化、每次路由切换后执行
// router.afterEach((to,from) => {
//   document.title = to.meta.tit || 'Document'
// })

export default router