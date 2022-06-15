<template>
  <div>
    <hr />
    <h1>name:{{name | mySlice}}</h1>
    <h1>sex:{{sex}}</h1>
    <h1>age:{{age}}</h1>
    <button @click="showName">showName</button>
    <button @click="sayHello">sayHello</button>
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
    methods: {
      sayHello(){
        this.hello()
      }
    },
  }
</script>

<style>
  
</style>