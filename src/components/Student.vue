<template>
  <div class="demo">
    <hr />
    <h1 class="tit">name:{{name}}</h1>
    <h1>sex:{{sex}}</h1>
    <h1>age:{{age}}</h1>
  </div>
</template>

<script>
  import pubsub from 'pubsub-js'

  export default {
    name: 'Student',
    data() {
      return {
        name:'TSHXR',
        sex:'male',
        age:22
      }
    },
    methods: {
      logName(msgName,data){
        console.log(msgName,data)
      }
    },
    mounted() {
      const pubId = pubsub.subscribe('sendMsg',this.logName)
    },
    beforeDestroy() {
      pubsub.unsubscribe(pid)
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