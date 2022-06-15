<template>
  <div class="demo">
    <Student />
    <School />
  </div>
</template>

<script>
  // 引入School组件
  import Student from "./components/Student.vue";
  import School from "./components/School.vue";
  import {hunhe4} from './mixin'
  
  export default {
    name: 'App',
    components:{Student,School},
    mixins:[hunhe4]
  }
</script>

<style>
  .demo{
    margin: 0 auto;
    width: 500px;
    background-color: #ccc;
  }
</style>