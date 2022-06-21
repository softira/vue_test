<template>
  <div class="demo">
    <h1>Hello {{schoolName}}</h1>
    <School/>
    <Student/>
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
    }
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