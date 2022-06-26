<template>
  <div>
    <ul>
      <li v-for="m in msg" :key="m.id">
        <!-- 跳转路由并携带query参数，to的字符串写法 -->
        <!-- <router-link active-class="active" to="/Home/Message/Detail?a=a&b=b">{{m.content}}</router-link>&nbsp;&nbsp; -->
        <!-- 跳转路由并携带query参数，to的对象写法 -->
        <router-link 
          active-class="active" 
          :to="{
            name:'detail',
            query:{
              a:m
            }
          }"
        >{{m.content}}</router-link>&nbsp;&nbsp;
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
    mounted(){
      console.log(this.$route);
    }
  }
</script>

<style>

</style>