<template>
  <div class="demo">
    <input type="text" v-model="name">
    &nbsp;&nbsp;
    <button @click="addPerson(name)">addPerson</button>
    &nbsp;&nbsp;
    <button @click="addTan(name)">addTan</button>
    &nbsp;&nbsp;
    <button @click="addServer()">addServer</button>
    <h3>sum:{{sum}}</h3>
    <h3>{{firstName}}</h3>
    <ul>
      <li v-for="p in person" :key="p.id">{{p.name}}</li>
    </ul>
  </div>
</template>

<script>
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
        this.$store.commit('personAbout/ADD',personObj)
        this.name = ''
      },
      addTan(){
        let personObj = {id: nanoid(),name:this.name};
        this.$store.dispatch('personAbout/tan',personObj)
        this.name = ''
      },
      addServer(){
        this.$store.dispatch('personAbout/server',nanoid())
      }
    },
    computed:{
      sum(){
        return this.$store.state.countAbout.sum
      },
      person(){
        return this.$store.state.personAbout.person
      },
      firstName(){
        return this.$store.getters['personAbout/getFirst']
      }
    },
    mounted(){
      console.log(this.$store);
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