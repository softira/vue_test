<template>
  <div class="demo">
    <!-- <h1>sum:{{he}}</h1>
    <h2>sum * 10:{{chengshi}}</h2>
    <h3>{{xingxi}},{{mingzi}}</h3> -->
    <h1>sum:{{sum}}</h1>
    <h2>sum * 10:{{bigSum}}</h2>
    <h3>{{msg}},{{name}}</h3>
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
    <!-- &nbsp;&nbsp;&nbsp;
    <button @click="JIA(n)">+</button>
    &nbsp;&nbsp;&nbsp;
    <button @click="JIAN(n)">-</button>
    &nbsp;&nbsp;&nbsp;
    <button @click="jiaodd(n)">+odd</button>
    &nbsp;&nbsp;&nbsp;
    <button @click="jiawait(n)">+wait</button> -->
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
      // plus(){
      //   this.$store.commit('JIA',this.n)
      // },
      // minus(){
      //   this.$store.commit('JIAN',this.n)
      // },
      // plusOdd(){
      //   this.$store.dispatch('jiaodd',this.n)
      // },
      // plusWait(){
      //   this.$store.dispatch('jiawait',this.n)
      // },
      // 借助mapMutations，mapActions生成对应的方法，方法会调用commit，dispatch去联系mutations，actions（对象写法）
      ...mapMutations({plus:'JIA',minus:'JIAN'}),
      ...mapActions({plusOdd:'jiaodd',plusWait:'jiawait'}),
      // 借助mapMutations，mapActions生成对应的方法，方法会调用commit，dispatch去联系mutations，actions（数组写法）
      // ...mapMutations(['JIA','JIAN']),
      // ...mapActions(['jiaodd','jiawait'])
    },
    computed:{
      // sum(){
      //   return this.$store.state.sum
      // },
      // name(){
      //   return this.$store.state.name
      // },
      // msg(){
      //   return this.$store.state.msg
      // },
      // bigSum(){
      //   return this.$store.getters.bigSum
      // },
      // 借助mapState、mapGetters生成计算属性，从state、getter中读取数据。（对象写法）
      // ...mapState({he:'sum',mingzi:'name',xingxi:'msg'}),
      // ...mapGetters({chengshi:'bigSum'}),
      // 借助mapState、mapGetters生成计算属性，从state、getter中读取数据。（数组写法）
      ...mapState(['sum','name','msg']),
      ...mapGetters(['bigSum'])
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