<template>
  <div class="demo">
    <hr />
    <h1 class="tit">name:{{name}}</h1>
    <h1>sex:{{sex}}</h1>
    <h1>age:{{age}}</h1>
  </div>
</template>

<script>

  export default {
    name: 'Student',
    data() {
      return {
        name:'TSHXR',
        sex:'male',
        age:22
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