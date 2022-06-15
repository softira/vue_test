<template>
  <div>
    <hr />
    <h1>name:{{name}}</h1>
    <h1>address:{{address}}</h1>
    <button @click="showName">showName</button>
    <input v-fbind:value="'TH'">
  </div>
</template>

<script>

  export default {
    name: 'School',
    data() {
      return {
        name:'CQNU',
        address:"ChongQing",
        x:200
      }
    },
  }
</script>

<style>
  
</style>