<template>
  <div class="demo">
    <hr />
    <h1>name:{{name}}</h1>
    <h1>address:{{address}}</h1>
  </div>
</template>

<script>

  export default {
    name: 'School',
    data() {
      return {
        name:'CQNU',
        address:"ChongQing",
      }
    },
  }
</script>

<style scoped>
  .demo{background: red;}
</style>