<template>
  <div id="root">
    <div class="todo-container">
      <div class="todo-wrap">
        <MyHeader :add="add"/>
        <MyList :todo="todo" :changeDone="changeDone" :deleteItem="deleteItem"/>
        <MyFooter :todo="todo" :checkAll="checkAll" :deleteAll="deleteAll"/>
      </div>
    </div>
  </div>
</template>

<script>
  // 引入组件
  import MyHeader from './components/MyHeader.vue'
  import MyList from './components/MyList.vue'
  import MyFooter from './components/MyFooter.vue'

  export default {
    name: 'App',
    components:{MyHeader,MyList,MyFooter},
    data() {
      return {
        todo:[
          {id:'001',thing:'买房',done:false},
          {id:'002',thing:'买电脑',done:false},
          {id:'003',thing:'买手机',done:true},
        ]
      }
    },
    methods: {
      // 添加待办
      add(val){
        this.todo.unshift(val);
      },
      // 勾选or取消勾选
      changeDone(val){
        this.todo.forEach((item) =>{
          if(item.id === val) item.done = !item.done;
        })
      },
      // 删除
      deleteItem(val){
        this.todo = this.todo.filter((item) => item.id !== val)
      },
      // 全部勾选or取消勾选
      checkAll(val){
        this.todo.forEach((item) =>{
          item.done = val;
        })
      },
      // 全部删除
      deleteAll(){
        this.todo = this.todo.filter((item) => item.done === false)
      }
    },
  }
</script>

<style >
  /*base*/
  body {
    background: #fff;
  }

  .btn {
    display: inline-block;
    padding: 4px 12px;
    margin-bottom: 0;
    font-size: 14px;
    line-height: 20px;
    text-align: center;
    vertical-align: middle;
    cursor: pointer;
    box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.2), 0 1px 2px rgba(0, 0, 0, 0.05);
    border-radius: 4px;
  }

  .btn-danger {
    color: #fff;
    background-color: #da4f49;
    border: 1px solid #bd362f;
  }

  .btn-danger:hover {
    color: #fff;
    background-color: #bd362f;
  }

  .btn:focus {
    outline: none;
  }

  .todo-container {
    width: 600px;
    margin: 0 auto;
  }
  .todo-container .todo-wrap {
    padding: 10px;
    border: 1px solid #ddd;
    border-radius: 5px;
  }
</style>