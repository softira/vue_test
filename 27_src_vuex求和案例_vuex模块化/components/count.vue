<template>
  <div class="demo">
    <h1>sum:{{sum}}</h1>
    <h2>sum * 10:{{bigSum}}</h2>
    <h3>{{msg}},{{name}}</h3>
    <h3>personNum:{{personNum}}</h3>
    <select v-model.number="n">
      <option value="1">1</option>
      <option value="2">2</option>
      <option value="3">3</option>
    </select>
    &nbsp;&nbsp;&nbsp;
    <button @click="plus(n)">+</button>
    &nbsp;&nbsp;&nbsp;
    <button @click="minus(n)">-</button>
    &nbsp;&nbsp;&nbsp;
    <button @click="plusOdd(n)">+odd</button>
    &nbsp;&nbsp;&nbsp;
    <button @click="plusWait(n)">+wait</button>
  </div>
</template>

<script>
  import {mapState,mapGetters,mapActions,mapMutations} from 'vuex'

  export default {
    name:'Count',
    data() {
      return {
        n:1
      }
    },
    methods: {
      // 借助mapMutations，mapActions生成对应的方法，方法会调用commit，dispatch去联系mutations，actions（对象写法）
      ...mapMutations('countAbout',{plus:'JIA',minus:'JIAN'}),
      ...mapActions('countAbout',{plusOdd:'jiaodd',plusWait:'jiawait'}),
    },
    computed:{
      // 借助mapState、mapGetters生成计算属性，从state、getter中读取数据。（数组写法）
      ...mapState('countAbout',['sum','name','msg']),
      ...mapGetters('countAbout',['bigSum']),
      ...mapGetters('personAbout',['personNum'])
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