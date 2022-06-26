<template>
  <li>
    <a href="/message1">{{id}}</a>&nbsp;&nbsp;
    <a href="/message1">{{text}}</a>&nbsp;&nbsp;
  </li>
</template>

<script>
  export default {
    name: 'Detail',
    props:['id','text'],
    mounted(){
      console.log(this);
    }
  }
</script>

<style>

</style>