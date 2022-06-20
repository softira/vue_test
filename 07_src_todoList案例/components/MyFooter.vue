<template>
  <div class="todo-footer" v-show="total">
    <label>
      <input type="checkbox" v-model="isAll"/>
    </label>
    <span>
      <span>已完成{{doneTotal}}</span> / 全部{{total}}
    </span>
    <button class="btn btn-danger" @click="deleteDone">清除已完成任务</button>
  </div>
</template>

<script>
  export default {
    name:'MyFooter',
    props:['todo','checkAll','deleteAll'],
    computed:{
      // 全部数量
      total(){
        return this.todo.length
      },
      // 已完成数量
      doneTotal(){
        return this.todo.reduce((pre,current) => pre + (current.done ? 1 : 0),0)
      },
      // 是否全部勾选or取消
      isAll:{
        get(){
          return this.doneTotal === this.total && this.total > 0
        },
        set(val){
          this.checkAll(val)
        }
      }
    },
    methods: {
      // 删除全部已完成
      deleteDone(){
        this.deleteAll()
      }
    },
  }
</script>

<style scpoed>
  /*footer*/
  .todo-footer {
    height: 40px;
    line-height: 40px;
    padding-left: 6px;
    margin-top: 5px;
  }

  .todo-footer label {
    display: inline-block;
    margin-right: 20px;
    cursor: pointer;
  }

  .todo-footer label input {
    position: relative;
    top: -1px;
    vertical-align: middle;
    margin-right: 5px;
  }

  .todo-footer button {
    float: right;
    margin-top: 5px;
  }
</style>