<template>
  <li>
    <a href="/message1">{{$route.query.a}}</a>&nbsp;&nbsp;
  </li>
</template>

<script>
  export default {
    name: 'Detail',
    mounted(){
      console.log(this.$route);
    }
  }
</script>

<style>

</style>