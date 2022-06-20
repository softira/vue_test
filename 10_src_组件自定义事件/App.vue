<template>
  <div class="demo">
    <h1>Hello {{schoolName}}</h1>

    <!-- 通过父组件给子组件传递函数类型的props实现：子给父传递数据 -->
    <Student :getName="getName"/>

    <!-- 通过父组件给子组件绑定一个自定义事件实现：子给父传递数据（第一种写法，使用v-on） -->
    <!-- <School @logName='getSchoolName' @test='test'/> -->

    <!-- 通过父组件给子组件绑定一个自定义事件实现：子给父传递数据（第二种写法，使用ref） -->
    <School ref="school" @click.native="show"/>
  </div>
</template>

<script>
  // 引入School组件
  import Student from "./components/Student.vue";
  import School from "./components/School.vue";
  
  export default {
    name: 'App',
    components:{Student,School},
    data() {
      return {
        schoolName:''
      }
    },
    methods: {
      // 获取学生名字
      getName(val){
        console.log(val);
      },
      // 获取学校名字
      getSchoolName(val,...a){
        console.log(val,a);
        this.schoolName = val
      },
      test(){
        console.log('test')
      },
      show(){
        console.log(123);
      }
    },
    mounted() {
      setTimeout(() => {
        this.$refs.school.$on('logName',(val,...a) => {
        console.log(val,a);
        this.schoolName = val
      })
        // this.$refs.school.$once('logName',this.getSchoolName)
      },3000)
    },
  }
</script>

<style>
  .demo{
    margin: 0 auto;
    width: 500px;
    background-color: #ccc;
    box-sizing: border-box;
  }
</style>