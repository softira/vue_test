<template>
  <div>
    <h2 :style="{opacity}">This is News</h2>
    <ul>
      <li>news001 <input type="text"></li>
      <li>news002 <input type="text"></li>
      <li>news003 <input type="text"></li>
    </ul>
  </div>
</template>

<script>
  export default {
    name: 'News',
    data(){
      return {
        opacity:1
      }
    },
    activated(){
      this.timer = setInterval(()=>{
        if(this.opacity <= 0) this.opacity = 1
        this.opacity -=0.01
      },16)
    },
    deactivated(){
      clearInterval(this.timer)
    }
  }
</script>

<style>

</style>