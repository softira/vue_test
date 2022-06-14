<template>
  <div class="demo">
    <h1 v-text="msg"></h1>
    <Student name="TS" sex="male" :age="22"/>
    <Student name="HXR" sex="female" />
  </div>
</template>

<script>
  // 引入School组件
  import Student from "./components/Student.vue";
  
  export default {
    name: 'App',
    components:{Student},
    data() {
      return {
        msg: 'Hello'
      }
    },
  }
</script>

<style>
  .demo{
    margin: 0 auto;
    width: 500px;
    background-color: #ccc;
  }
</style>