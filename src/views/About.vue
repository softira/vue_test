<template>
  <h2>我是About的内容</h2>
</template>

<script>
  export default {
    name: 'About',
    mounted(){
      console.log('About组件被挂载了',this);
    },
    beforeDestroy(){
      console.log('About组件被销毁了',this);
    }
  }
</script>

<style>

</style>