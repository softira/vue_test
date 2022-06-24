<template>
  <div>
    <slot>默认类容1</slot>
    <slot>默认类容2</slot>
    <slot name="link">默认类容3</slot>
    <slot name="turbo" :turbo="turbo" msg="hello">默认类容4</slot>
  </div>
</template>

<script>
export default {
  name: 'List',
  data() {
    return {
      turbo:[250,650,1000]
    }
  },
}
</script>

<style scoped>
  div{background: #ccc;margin: 10px;}
</style>