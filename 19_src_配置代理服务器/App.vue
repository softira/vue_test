<template>
  <div id="root">
    <button @click="getStudentData">getStudentData</button>
    <button @click="getCarData">getCarData</button>
    <button @click="getLocalStudentData">getLocalStudentData</button>
  </div>
</template>

<script>
  import axios from 'axios'

  export default {
    name: 'App',
    methods: {
      getStudentData(){
        axios.get('http://localhost:8080/demo1/students').then(
          response => {
            console.log(response.data)
          },
          error =>{
            console.log(error.message)
          }
        )
        // let xhr = new XMLHttpRequest();
        // xhr.open('GET','http://localhost:8080/students');
        // xhr.send();
        // xhr.onreadystatechange = res => {
        //   console.log(xhr.response);
        // }
      },
      getCarData(){
        axios.get('http://localhost:8080/demo2/cars').then(
          response => {
            console.log(response.data)
          },
          error =>{
            console.log(error.message)
          }
        )
      },
      getLocalStudentData(){
        axios.get('http://localhost:8080/students').then(
          response => {
            console.log(response.data)
          },
          error =>{
            console.log(error.message)
          }
        )
      }
    },
  }
</script>

<style >
  
</style>