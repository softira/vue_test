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
  
  export default {
    name: 'App',
    components:{Student,School},
  }
</script>

<style>
  .demo{
    margin: 0 auto;
    width: 500px;
    background-color: #ccc;
  }
</style>