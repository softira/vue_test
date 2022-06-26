<template>
  <div>
    <h2>Vue Router Demo</h2>
    <button @click="back">back</button>&nbsp;&nbsp;&nbsp;
    <button @click="forward">forward</button>&nbsp;&nbsp;&nbsp;
    <button @click="go(2)">go2</button>&nbsp;&nbsp;&nbsp;
    <button @click="go(-2)">go-2</button>
</div>
</template>

<script>
  export default {
    name: 'Banner',
    methods:{
      back(){
        this.$router.back()
      },
      forward(){
        this.$router.forward()
      },
      go(step){
        this.$router.go(step)
      },
    },
    mounted(){
      console.log(this.$router);
    }
  }
</script>

<style>

</style>