<template>
  <div>
    <ul>
      <li v-for="m in msg" :key="m.id">
      <span>{{m.content}}</span>&nbsp;&nbsp;
      <button @click="pushJump(m)">push跳转</button>&nbsp;&nbsp;
      <button @click="replaceJump(m)">replace跳转</button>&nbsp;&nbsp;
      </li>
    </ul>
    <hr />
    <ul>
      <router-view></router-view>
    </ul>
  </div>
</template>

<script>
  export default {
    name: 'Message',
    data(){
      return {
        msg:[
          {id:'001',content:'aaa'},
          {id:'002',content:'bbb'},
          {id:'003',content:'ccc'},
        ]
      }
    },
    methods:{
      pushJump(m){
        this.$router.push({
          name:'detail',
          params:{
            id:m.id,
            text:m.content
          }
        })
      },
      replaceJump(m){
        this.$router.replace({
          name:'detail',
          params:{
            id:m.id,
            text:m.content
          }
        })
      }
    },
    mounted(){
      console.log(this.$router);
    }
  }
</script>

<style>

</style>