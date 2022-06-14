<template>
  <div class="demo">
    <h1 v-text="msg" ref="tit"></h1>
    <button @click="showDOM">showDOM</button>
    <School ref="sch" />
  </div>
</template>

<script>
  // 引入School组件
  import School from "./components/School.vue";
  
  export default {
    name: 'App',
    components:{School},
    data() {
      return {
        msg: 'Hello'
      }
    },
    methods: {
      showDOM(){
        console.log(this);// App组件的实例对象
        console.log(this.$refs);// 带有ref属性的合集
        console.log(this.$refs.tit);// 真实的DOM元素
        console.log(this.$refs.sch);// School组件的实例对象
      }
    },
  }
</script>

<style>
  .demo{
    margin: 0 auto;
    height: 500px;
    width: 500px;
    background-color: #ccc;
  }
</style>