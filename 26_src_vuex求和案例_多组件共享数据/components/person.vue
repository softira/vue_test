<template>
  <div class="demo">
    <input type="text" v-model="name">
    &nbsp;&nbsp;
    <button @click="addPerson(name)">addPerson</button>
    <h3>sum:{{sum}}</h3>
    <ul>
      <li v-for="p in person" :key="p.id">{{p.name}}</li>
    </ul>
  </div>
</template>

<script>
  import {mapState,mapMutations} from 'vuex'
  // 引入nanoid
  import { nanoid } from 'nanoid'

  export default {
    name:'Count',
    data() {
      return {
        name:''
      }
    },
    methods: {
      addPerson(){
        let personObj = {id: nanoid(),name:this.name};
        this.ADD(personObj)
        this.name = ''
      },
      // 借助mapActions生成对应的方法，方法会调用commit，dispatch去联系actions（对象写法）
      ...mapMutations(['ADD']),
    },
    computed:{
      // 借助mapState生成计算属性，从state中读取数据。（数组写法）
      ...mapState(['sum','person']),
    }
  }
</script>

<style>
  .demo{
    width: 500px;
    margin: 10px auto;
    padding: 20px;
    box-sizing: border-box;
    background: #ccc;
  }
</style>