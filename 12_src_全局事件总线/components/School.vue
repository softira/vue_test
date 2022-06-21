<template>
  <div class="demo">
    <hr />
    <h1>name:{{name}}</h1>
    <h1>address:{{address}}</h1>
    <button @click="sendName()">sendName</button>
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
    methods: {
      sendName(){
        this.$bus.$emit('getName',this.name)
      }
    },
  }
</script>

<style scoped>
  .demo{background: red;}
</style>