<template>
  <ul class="todo-main">
    <MyItem v-for="(doList) in todo" :key="doList.id" :doList="doList" :changeDone="changeDone" :deleteItem="deleteItem"/>
  </ul>
</template>

<script>
  // 引入MyItem组件
  import MyItem from './MyItem.vue'
  // import todo from 

  export default {
    name:'MyList',
    components:{MyItem},
    props:['todo','changeDone',"deleteItem"]
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
</style>