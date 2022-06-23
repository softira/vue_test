<template>
  <div>
    <button @click="isShow = !isShow">show/hide</button>
    <transition-group 
      appear
      name="animate__animated animate__bounce" 
      enter-active-class="animate__swing"
      leave-active-class="animate__backOutUp"
    >
      <h1 v-show="isShow" key="1">hello</h1>
      <h1 v-show="!isShow" key="2">hello</h1>
    </transition-group>
  </div>
</template>

<script>
  import 'animate.css'
  
  export default {
    name: 'Test2',
    data() {
      return {
        isShow: true
      }
    },
  }
</script>

<style scoped>
  
</style>