<template>
  <div id="root">
    <Test1/>
    <Test2/>
    <Test3/>
  </div>
</template>

<script>
  // 引入组件
  import Test1 from './components/Test1'
  import Test2 from './components/Test2'
  import Test3 from './components/Test3'

  export default {
    name: 'App',
    components:{Test1,Test2,Test3}
    
  }
</script>

<style>
  #root{margin: 0 auto;width: 500px;}
  h1{background: #ccc;padding: 10px;margin: 10px 0;}
</style>