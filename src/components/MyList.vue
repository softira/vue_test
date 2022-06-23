<template>
  <ul class="todo-main">
    <transition-group name="show" appear>
      <MyItem
        v-for="doList in todo" 
        :key="doList.id" 
        :doList="doList"
      />
    </transition-group>
  </ul>
</template>

<script>
  // 引入MyItem组件
  import MyItem from './MyItem.vue'
  // import todo from 

  export default {
    name:'MyList',
    components:{MyItem},
    props:['todo']
  }
</script>

<style scpoed>
  /*main*/
  .todo-main {
    margin-left: 0px;
    border: 1px solid #ddd;
    border-radius: 2px;
    padding: 0px;
  }

  .todo-empty {
    height: 40px;
    line-height: 40px;
    border: 1px solid #ddd;
    border-radius: 2px;
    padding-left: 5px;
    margin-top: 10px;
  }

   /* 进入起点，离开终点 */
  .show-enter,.show-leave-to{
    transform: translateX(100%);
  }
  /* 进入终点，离开起点 */
  .show-leave,.show-enter-to{
     transform: translateX(0);
  }
  .show-enter-active,.show-leave-active{
    transition: .2s linear;
  }
</style>