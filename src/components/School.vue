<template>
  <div>
    <hr />
    <h1>name:{{name}}</h1>
    <h1>address:{{address}}</h1>
    <button @click="showName">showName</button>
  </div>
</template>

<script>
  import {hunhe2} from '../mixin'

  export default {
    name: 'School',
    data() {
      return {
        name:'CQNU',
        address:"ChongQing",
        x:200
      }
    },
    mixins:[hunhe2]
  }
</script>

<style>
  
</style>