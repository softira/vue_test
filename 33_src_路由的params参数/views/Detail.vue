<template>
  <li>
    <a href="/message1">{{$route.params.id}}</a>&nbsp;&nbsp;
    <a href="/message1">{{$route.params.text}}</a>&nbsp;&nbsp;
  </li>
</template>

<script>
  export default {
    name: 'Detail',
    mounted(){
      console.log(this);
    }
  }
</script>

<style>

</style>