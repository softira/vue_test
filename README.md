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
  1.被用来给元素或子组件注册引用信息（id的替代者）
  2.引用在html标签上获取的是真实的DOM元素，应用在组件标签上是组件实例对象
  3.使用方式：
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