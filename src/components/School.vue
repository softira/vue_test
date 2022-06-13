<template>
  <div class="demo">
    <h1>school:{{school}}</h1>
    <h1>student:{{student}}</h1>
  </div>
</template>

<script>
  export default {
    name: 'School',
    data() {
      return {
        school: 'cqun',
        student: 'Ts'
      }
    }
  }
</script>

<style>
  .demo{
    margin: 0 auto;
    height: 500px;
    width: 500px;
    background-color: #ccc;
  }
</style>