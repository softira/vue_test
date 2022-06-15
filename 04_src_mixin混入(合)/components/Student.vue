<template>
  <div>
    <hr />
    <h1>name:{{name}}</h1>
    <h1>sex:{{sex}}</h1>
    <h1>age:{{age}}</h1>
    <button @click="showName">showName</button>
  </div>
</template>

<script>
  import {hunhe2} from '../mixin'

  export default {
    name: 'Student',
    data() {
      return {
        name:'TS',
        sex:'male',
        age:22
      }
    },
    mixins:[hunhe2]
  }
</script>

<style>
  
</style>