<template>
  <div class="container">
    <List>
      <ul>
        <li v-for="car in cars" :key="car.index">{{car}}</li>
      </ul>
    </List>
    <List>
      <ul>
        <li v-for="car in cars" :key="car.index">{{car}}</li>
      </ul>
      <a href="javascript:;" slot="link">官网1</a>
      <a href="javascript:;" slot="link">官网2</a>
    </List>
    <List>
      <template v-slot:link>
        <a href="javascript:;" slot="link">官网1</a>
        <a href="javascript:;" slot="link">官网2</a>
      </template>
    </List>
    <List>
      <template slot="turbo" scope="t">
        <ul>
          <li>{{t}}</li>
          <li v-for="t in t.turbo" :key="t.index">{{t}}</li>
        </ul>
      </template>
    </List>
    <List>
      <template slot="turbo" slot-scope="{turbo,msg}">
        <ul>
          <li>{{msg}}</li>
          <li>{{turbo}}</li>
          <li v-for="t in turbo" :key="t.index">{{t}}</li>
        </ul>
      </template>
    </List>
  </div>
</template>

<script>
  import List from './components/List'

  export default {
    name: 'App',
    components:{List},
    data() {
      return {
        cars:['铃木','川崎','本田']
      }
    },
  }
</script>

<style >
  
</style>