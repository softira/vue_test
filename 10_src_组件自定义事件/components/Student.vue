<template>
  <div class="demo">
    <hr />
    <h1 class="tit">name:{{name}}</h1>
    <h1>sex:{{sex}}</h1>
    <h1>age:{{age}}</h1>
    <button @click="getStudentName">getStudengtName</button>
  </div>
</template>

<script>

  export default {
    name: 'Student',
    props: ['getName'],
    data() {
      return {
        name:'TSHXR',
        sex:'male',
        age:22
      }
    },
    methods: {
      getStudentName(){
        this.getName(this.name)
      }
    },
  }
</script>

<style lang="less" scoped>
  .demo{
      background: orange;
      .tit{
        color: red;
      }
    }
</style>