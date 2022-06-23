<template>
  <div>
    <button @click="isShow = !isShow">show/hide</button>
    <transition-group name="test2" appear>
      <h1 v-show="isShow" key="1">hello</h1>
      <h1 v-show="!isShow" key="2">hello</h1>
    </transition-group>
  </div>
</template>

<script>
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
  /* 进入起点，离开终点 */
  .test2-enter,.test2-leave-to{
    transform: translateX(100%);
  }
  /* 进入终点，离开起点 */
  .test2-leave,.test2-enter-to{
     transform: translateX(0);
  }
  .test2-enter-active,.test2-leave-active{
    transition: .5s linear;
  }
</style>