# 笔记

## 脚手架文件结构：
  - node_modules
  - public
      + favicon.icon：页签图标
      + index.html：主页面
  - src
    + assets：存放静态资源
      + logo.png
    + component：存放组件
      + HelloWorld.vue
    + App.vue：汇总所有组件
    + main.js：入口文件
  - .gitignore：git版本管制忽略的配置
  - babel.config.js：babel的配置文件
  - package.json：应用包配置文件
  - README.md：应用描述文件
  - package-lock.json：包版本控制文件

## 关于不同版本的Vue：
  - vue.js与vue.runtime.xxx.js的区别：
    + vue.js是完整版的Vue，包含：核心功能+模板解析器。
    + vue.runtime.xxx.js是运行版的Vue，只包含：核心功能，没有模板解析器
  - 因为vue.runtime.xxx.js没有模板解析器，所以不能使用template配置项，需要使用render函数接收到的createElement函数去指定具体内容。

## vue.config.js配置文件
  > 使用vue inspect > output.js可以查看到Vue脚手架的默认配置。
  > 使用vue.config.js可以对脚手架进行个性化定制，详情见：https://cli.vuejs.org/zh

## ref属性
  1. 被用来给元素或子组件注册引用信息（id的替代者）
  2. 引用在html标签上获取的是真实的DOM元素，应用在组件标签上是组件实例对象
  3. 使用方式：
     打标识：<h1 ref="xxx">...</h1>
     获取：this.$refs.xxx

## 配置项props
  功能：让组件接收外部传过来的数据
    (1).传递数据
      <Demo name="xxx"/>
    (2).接收数据：
      第一种方式（只接收）：
        ```
        props:['name']
        ```
      第二种接收方式（限制类型）：
        ```
        props:{
          name:String
        }
        ```
      第三种接收方式（限制类型、限制必要性、指定默认值）：
        ```
        props:{
          name:{
            type:String, // 类型
            required:ture, // 必要性
            default:'TS' // 默认值
          }
        }
        ```
  备注：props是只读的，Vue底层会监测你对props的修改，如果进行了修改，就会发出警告，若业务需求确实需要修改，那么请复制props的内容到data中一份，然后去修改data中的数据

## mixin（混入）
  功能：可以把多个组件共用的配置提取成一个混入对象
  使用方式：
    第一步定义混入，例如：
      {
        data(){...},
        methods:{...},
        ...
      }
    第二步使用混入，例如：
      (1).全局混入：Vue.mixin(xxx)
      (2).局部混入：mixins:[xxx]

## 插件
  功能：用于增强Vue
  本质：包含install方法的一个对象，install的第一个参数是Vue，第二个及以后的参数是插件使用者传递的数据。
  定义插件：
    对象.install = function (Vue, options){
      // 1.添加全局过滤器
      Vue.filter(...)

      // 2.添加全局指令
      Vue.directive(...)

      // 3.配置全局混入（合）
      Vue.mixin(...)

      //4.添加实例方法
      Vue.prototype.$myMrthod = function () {...}
    }
  使用插件：
    vue.use()

## scoped样式
  作用：让样式在局部生效，防止冲突
  写法：<style scoped>

## 总结todoList案例
  1. 组件化编码流程：
    (1).拆分静态组件：组件要按照功能点拆分，命名不要与html元素冲突
    (2).实现动态组件：考虑好数据的存放位置，数据是一个组件在用，则放在组件自身即可；一些组件在用，则放在他们共同的父组件上**(状态提升)**
    (3).实现交互：从绑定事件开始。
  2. props适用于：
    (1).父组件==>子组件 通信
    (2).子组件==>父组件 通信（要求父先给子一个函数）
  3. 使用v-model时要切记：v-model绑定的值不能是props传过来的值，因为props是不可以修改的
  4. props传过来的若是对象类型的值，修改对象中的属性时Vue不会报错，但不推荐这样做

## webStorage
  1. 存储内容的大小一般支持5MB左右（不同浏览器可能还不一样）
  2. 浏览器端通过Window.sessionStorage和Window.localStorage属性来实现本地存储机制
  3. 相关API：
    1. `xxxStorage.setItem('key', 'value');`
      该方法接收一个键和值作为参数，会把键值对添加到存储中，如果键名存在，则更新其对应的值。
    2. `xxxStorage.getItem('key');`
      该方法接收一个键名作为参数，返回键名对应的值
    3. `xxxStorage.removeItem('key');`
      该方法接收一个键名作为参数，并把该键值对从存储中删除
    4. `xxxStorage.clear();`
      该方法会清空存储中的所有数据

  4. 备注：
    1. SessionStorage存储的内容会随着浏览器窗口关闭儿消失
    2. LocalStorage存储的内容，需要手动清除才回消失
    3. `xxxStorage.getItem('key');`如果key对应的value获取不到，那么返回的值是null
    4. `JSON.parse(null)`的结果依然是null

## 组件的自定义事件
  1. 一种组件间通信的方式，适用于：子组件 ==> 父组件
  2. 使用场景：A是父组件，B是子组件，B想给A传数据，那么就要在A中给B绑定自定义事件**（事件的回调在A中）**
  3. 绑定自定义事件：
    (1).第一种方式，在父组件中：`<Demo @test="testFun"/>`或`<Demo v-on:test="testFun"/>`
    (2).第二种方式，在父组件中：
    ```
    <Demo ref = 'demo' />
    .........

    mounted(){
      this.$refs.xxx.$on('test',this.testFun)
    }
    ```
  4. 触发自定义事件：`this.$emit('test',数据)`
  5. 解绑自定义事件：`this.$off('test')`
  6. 组件上也可以绑定原生DOM事件，需要使用`native`修饰符
  7. 注意：通过`this.$refs.$on('test',this.testFun)`绑定自定义事件时，回调要么配置在methods中，要么用箭头函数，否则this指向会出现问题

## 全局事件总线(GlobalEventBus)
  1. 一种组件间通信的方式。适用于**任意组件间通信**
  2. 安装全局事件总线：
    ```
    new Vue({
      ......
      beforeCreate() {
        Vue.prototype.$bus = this //安装全局事件总线，$bus就是当前应用的vm
      }
      ......
    })
    ```
  3. 使用事件总线：
    1. 接收数据：A组件想接收数据，则在A组件中给$bus绑定自定义事件，事件的回调留在A组件自身。
    ```
    methods(){
      demo(data){
        ......
      }
    },
    mounted(){
      this.$bus.$on('xxx',this.demo)
    }
    ```
    2. 提供数据：`this.$bus.$emit('xxx',数据)`
  4. 最好在beforeDestroy钩子中，用$off去解绑当前组件所用到的事件

## 消息订阅与发布（pubsub）
  1. 一种组件间通信的方式，适用于任意组件间通信
  2. 使用步骤：
    1. 安装pubsub：`npm i pubsub-js`
    2. 引入：`import pubsub from 'pubsub-js'`
    3. 接收数据：A组件想接收数据，则在A组件中订阅消息，订阅的回调留在A组件自身
    ```
    methods(){
      demo(data){...}
    }
    mounted(){
      this.pid = pubsub.subscribe('xxx',this.demo) //订阅消息
    }
    ```
    4. 提供数据：pubsub.publish('xxx',数据)
    5. 最好在beforeDestroy钩子中，用pubsub.unsubscribe(pid)去**取消订阅**

## nextTick
  1. 语法：`this.$nextTick(回调函数)`
  2. 作用：在下一次DOM更新结束后执行其指定的回调
  3. 什么时候用：当改变数据后，要基于更新后的新DOM进行某些操作时，要在nextTick所指定的回调函数中执行

## Vue封装的过度与动画
  1. 作用：在插入、更新或移除DOM元素时，在合适的时候给元素添加样式类名
  2. 写法：
    1. 准备好样式：
      - 元素进入的样式：
        + v-enter：进入的起点
        + v-enter-active：进入的过程
        + v-enter-to：进入的终点
      - 元素离开的样式：
        + v-leave：离开的起点
        + v-leave-active：离开的过程
        + v-leave-to：离开的终点
    2. 使用<transition>包裹要过度的元素，并配置name属性：
      ```
      <transition name='hello'>
        <h1 v-show="isShow">hello</h1>
      </transition>
      ```
    3.备注：若多个元素需要过度，则需要使用：`<transition-group>`,且每个元素都要指定`key`值

## Vue脚手架配置代理
### 方法一
  在vue.config.js中添加如下配置：
    ```
    devServer:{
      proxy:'http://localhost:5000'
    }
    ```
  说明：
    1. 优点：配置简单，请求资源时直接发送给前端(8080)即可
    2. 缺点：不能配置多个代理，不能灵活的控制请求是否走代理
    3. 工作方式：若按照上述配置代理，当请求的前端不存在时，则该请求会转发给服务器（优先匹配前端资源）
### 方法二
  编写vue.config.js配置具体代理规则：
    ```
    module.exports = {
      devServer:{
        proxy:{
          '/api':{ //匹配所有以'/api'开头的请求路径
            target: 'http://localhost:5000', //代理目标的基础路径
            ws: true,
            changeOrigin: true,
            pathRewrite:{'^/api':''}
          },
          '/api2':{ //匹配所有以'/api2'开头的请求路径
            target: 'http://localhost:5001', //代理目标的基础路径
            ws: true,
            changeOrigin: true,
            pathRewrite:{'^/api':''}
          }
        }
      }
    }
    ```
    说明：
      1. 优点：可以配置多个代理，且可以灵活的控制请求是否走代理
      2. 缺点：配置略微繁琐，请求资源必须加前缀

## 插槽
  1. 作用：让父组件可以向子组件指定位置插入html结构，也是一种组件间通信的方式，适用于**父组件 ===> 子组件**
  2. 分类：默认插槽、具名插槽、作用域插槽
  3. 使用方式
    1. 默认插槽：
      ```
      父组件：
        <List>
          <div>html结构</div>
        </List>
      子组件：
        <template>
          <div>
            <slot>插槽默认内容</slot>
          </div>
        </template>
      ```
    2. 具名插槽
      ```
      父组件：
        <List>
          <template slot='demo1'>
            <div>html结构1</div>
          </template>
          <template slot='demo2'>
            <div>html结构2</div>
          </template>
        </List>
      子组件：
        <template>
          <div>
            <slot name="demo1">插槽默认内容</slot>
            <slot name="demo2">插槽默认内容</slot>
          </div>
        </template>
      ```
    3. 作用域插槽
      1. 理解：**数据在组件的自身，但根据数据生成的结构需要组件的使用者来决定。**
        ```
          父组件：
            <List>
              <template scope='demo'>
                <div>{{demo}}</div>
              </template>
            </List>
          子组件：
            <template>
              <div>
                <slot :demo="demo">插槽默认内容</slot>
              </div>
            </template>
        ```

## Vuex
  1. 概念
    在Vue中实现集中式状态（数据）管理的一个Vue插件，对vue应用中多个组件的共享状态进行集中式的管理（读/写），也是一种组件间通信的方式，且适用于任意组件间通信
  2. 何时使用？
    多个组件需要共享数据时
  3. 搭建Vuex环境
    1. 创建文件：`src/store/index.js`
      ```
        // 引入Vue核心库
        import Vue from 'vue'
        // 引入Vuex
        import Vuex from 'vuex'
        //应用Vuex插件
        Vue.use(Vuex)

        // 准备actions对象--响应组件中用户的动作
        const actions = {}
        // 准备mutations对象--修改state中的数据
        const mutations = {}
        // 准备state对象--保存具体的数据
        const state = {}

        // 创建并暴露store
        export default new Vuex.store({
          actions,
          mutations,
          state
        })
      ```
    2. 在`main.js`中创建vm时传入store配置项
      ```
        // 引入store
        import store from './store'

        // 创建vm
        new Vue({
          el:'#app',
          render: h => h(App),
          store
        })
      ```
  4. 基本使用
    1. 初始化数据、配置`actions`、配置`mutations`、操作文件`store.js`
    2. 组件中读取Vuex中的数据：`$store.state.sum`
    3. 组件中修改vuex中的数据：`$store.dispatch('actions中的方法名',数据)`或`$store.commit('mutations中的方法名',数据)`
    **备注：若没有网络请求或其他业务逻辑，组件中也可以越过actions，即不写`dispatch`，直接编写`commit`**
  5. getters的使用
    1. 概念：当前state中的数据需要经过加工后再使用时，可以使用getter加工
    2. 在`store.js`中追加`getters`配置
    3. 数组中读取数据：`$state.getters.xxx`
  6. 四个map方法的使用
    1. mapState方法：用于帮助我们映射`state`中的数据为计算属性
    2. mapGetter方法：用于帮助我们映射`getters`中的数据为计算属性
    3. mapActions方法：用于帮助我们生成与`actions`对话的方法。即：包含`$store.dispatch(xxx)`的函数
    4. mapMutations方法：用于帮助我们生成与`mutations`对话的方法。即：包含`$store.commit(xxx)`的函数
    **备注：mapActions与mapMutations使用时，若需要传递参数，需要在模板中绑定时间时传递好参数，否则参数是事件对象**
  7. 模块化+命名空间
    1. 目的：让代码更好维护，让多钟数据分类更加明确。
    2. 修改`store.js`
      ```
        const xxx1 = {
          namespaced: true,// 开启命名空间
          state:{x:1},
          actions:{},
          mutations:{},
          getters:{}
        }
        const xxx2 = {
          namespaced: true,// 开启命名空间
          state:{},
          actions:{},
          mutations:{},
          getters:{}
        }

        export default new Vuex.Store({
          modules: {
            xxx1,
            xxx2
          }
        })
      ```
    3. 开启命名空间后，组件中读取state数据
      ```
        // 自己直接读取
        this.$store.state.xxx1.x
        // 借助mapSta读取
        ...mapState('xxx1',['x'])
      ```
    43. 开启命名空间后，组件中读取getters数据
      ```
        // 自己直接读取
        this.$store.getters['xxx1/x']
        // 借助mapGetters读取
        ...mapGetters('xxx1',['x'])
      ```
    5. 开启命名空间后，组件中调用dispatch方法
      ```
        // 自己直接调用
        this.$store.dispatch['xxx1/..',value]
        // 借助mapActions调用
        ...mapActions('xxx1',{..:'..'})
      ```
    6. 开启命名空间后，组件中调用commit方法
      ```
        // 自己直接调用
        this.$store.state.xxx1.x
        // 借助mapMutations调用
        ...mapMutations('xxx1',{..:'...'})
      ```