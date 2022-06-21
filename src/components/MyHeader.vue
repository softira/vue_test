<template>
  <div class="todo-header">
    <input type="text" placeholder="请输入你的任务名称，按回车键确认" v-model="thing" @keyup.enter="addThing"/>
  </div>
</template>

<script>
  import {nanoid} from 'nanoid'

  export default {
    name:'MyHeader',
    data() {
      return {
        thing:''
      }
    },
    methods: {
      // 添加待办事件
      addThing(){
        if(!this.thing.trim()) return alert('输入值不能为空');
        let newThing = {id:nanoid(),thing:this.thing,done:false};
        // this.add(newThing);
        this.$emit('add',newThing)
        this.thing = '';
      }
    },
  }
</script>

<style scpoed>
  /*header*/
  .todo-header input {
    width: 560px;
    height: 28px;
    font-size: 14px;
    border: 1px solid #ccc;
    border-radius: 4px;
    padding: 4px 7px;
  }

  .todo-header input:focus {
    outline: none;
    border-color: rgba(82, 168, 236, 0.8);
    box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075), 0 0 8px rgba(82, 168, 236, 0.6);
  }
</style>