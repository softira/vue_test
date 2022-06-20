<template>
  <div class="demo">
    <hr />
    <h1>name:{{name}}</h1>
    <h1>address:{{address}}</h1>
    <button @click.stop="getSchoolName">getSchoolName</button>
    <button @click="unbind">unbind</button>
    <button @click="death">deatroy</button>
  </div>
</template>

<script>

  export default {
    name: 'School',
    data() {
      return {
        name:'CQNU',
        address:"ChongQing",
      }
    },
    methods: {
      getSchoolName(){
        this.$emit('logName',this.name,666,888,999);
        this.$emit('test');
      },
      unbind(){
        // this.$off('logName') // 解绑一个自定义事件
        // this.$off(['logName', 'test']) // 解绑多个的自定义事件
        this.$off() // 解绑全部自定义事件
      },
      death(){
        this.$destroy() // 销毁当前School组件的实例，销毁后所有School实例的自定义事件都不奏效了
      }
    },
  }
</script>

<style scoped>
  .demo{background: red;}
</style>