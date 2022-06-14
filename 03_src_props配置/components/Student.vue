<template>
  <div>
    <hr />
    <h1>name:{{myName}}</h1>
    <h1>sex:{{mySex}}</h1>
    <h1>age:{{myAge+1}}</h1>
    <button @click="myAge++">age++</button>
  </div>
</template>

<script>
  export default {
    name: 'School',
    data() {
      return {
        myName:this.name,
        mySex:this.sex,
        myAge:this.age
      }
    },
    // 简单声明接收
    // props:['name','sex','age'],
    
    // 接收的同时对数据进行类型限制
    // props:{
    //   name:String,
    //   sex:String,
    //   age:Number
    // }
    
    // 接收的同时对数据：进行类型限制+默认值指定+必要性限制
    props:{
      name:{
        type:String,
        required:true
      },
      sex:{
        type:String,
        required:true
      },
      age:{
        type:Number,
        default:22
      }
    }
  }
</script>

<style>
  
</style>