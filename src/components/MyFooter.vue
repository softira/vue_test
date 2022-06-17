<template>
  <div class="todo-footer">
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
      total(){
        return this.todo.length
      },
      doneTotal(){
        return this.todo.reduce((sum,current) => {
          if(current.done === true) sum++;
          return sum;
        },0)
      },
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