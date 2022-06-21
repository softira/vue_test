<template>
  <div class="demo">
    <hr />
    <h1>name:{{name}}</h1>
    <h1>address:{{address}}</h1>
    <button @click="sendName()">sendName</button>
  </div>
</template>

<script>
  import pubsub from 'pubsub-js'

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
        pubsub.publish('sendMsg',666)
      }
    },
  }
</script>

<style scoped>
  .demo{background: red;}
</style>