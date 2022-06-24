<template>
  <div class="demo">
    <h1>sum:{{$store.state.sum}}</h1>
    <h2>sum * 10:{{$store.getters.bigSum}}</h2>
    <select v-model.number="n">
      <option value="1">1</option>
      <option value="2">2</option>
      <option value="3">3</option>
    </select>
    &nbsp;&nbsp;&nbsp;
    <button @click="plus">+</button>
    &nbsp;&nbsp;&nbsp;
    <button @click="minus">-</button>
    &nbsp;&nbsp;&nbsp;
    <button @click="plusOdd">+odd</button>
    &nbsp;&nbsp;&nbsp;
    <button @click="plusWait">+wait</button>
  </div>
</template>

<script>
  export default {
    name:'Count',
    data() {
      return {
        n:1
      }
    },
    methods: {
      plus(){
        this.$store.commit('JIA',this.n)
      },
      minus(){
        this.$store.commit('JIAN',this.n)
      },
      plusOdd(){
        this.$store.dispatch('jiaodd',this.n)
      },
      plusWait(){
        this.$store.dispatch('jiawait',this.n)
      }
    },
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