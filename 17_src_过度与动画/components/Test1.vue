<template>
  <div>
    <button @click="isShow = !isShow">show/hide</button>
    <transition appear>
      <h1 v-show="isShow">hello</h1>
    </transition>
  </div>
</template>

<script>
  export default {
    name: 'Test1',
    data() {
      return {
        isShow: true
      }
    },
  }
</script>

<style scoped>
  .v-enter-active{
    animation: show .5s linear;
  }
  .v-leave-active{
    animation: show .5s linear reverse;
  }
  @keyframes show{
    from{transform: translateX(100%);}
    to{transform: translate(0);}
  }
</style>