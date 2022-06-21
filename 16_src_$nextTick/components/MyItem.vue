<template>
  <li>
    <label>
      <input type="checkbox" @change="change(doList.id)" :checked="doList.done"/>
      <!-- 如下代码也能实现功能，但是不推荐，因为修改了props里面的值，违反原则 -->
      <!-- <input type="checkbox" v-model="doList.done"/> -->
      <span v-show="!doList.show">{{doList.thing}}</span>
      <input 
        type="text" 
        v-show="doList.show"
        :value="doList.thing"
        @blur="blurThing(doList,$event)"
        ref="inpTit"
        >
    </label>
    <button class="btn btn-danger" @click="deleteThing(doList.id)">删除</button>
    <button v-show="!doList.show" class="btn btn-edit" @click="editThing(doList)">编辑</button>
  </li>
</template>

<script>
  export default {
    name:'MyItem',
    props:['doList'],
    methods:{
      // 勾选or取消勾选
      change(val){
        this.$bus.$emit('changeDone',val);
      },
      // 删除
      deleteThing(val){
        if(confirm('确认删除吗？')) this.$bus.$emit('deleteItem',val)
      },
      editThing(val){
        if(val.hasOwnProperty('show')){
          val.show = true
        }else{
          this.$set(val,'show',true)
        }
        this.$nextTick(function(){
          this.$refs.inpTit.focus()
        })
      },
      blurThing(val,e){
        if(e.target.value.trim() == '') return alert('输入不能为空')
        val.show = false;
        this.$bus.$emit('editVal',val.id,e.target.value)
      }
    }
  }
</script>

<style scpoed>
  /*item*/
  li {
    list-style: none;
    height: 36px;
    line-height: 36px;
    padding: 0 5px;
    border-bottom: 1px solid #ddd;
  }

  li label {
    float: left;
    cursor: pointer;
  }

  li label li input {
    vertical-align: middle;
    margin-right: 6px;
    position: relative;
    top: -1px;
  }

  li .btn {
    float: right;
    display: none;
    margin-top: 3px;
  }

  li:before {
    content: initial;
  }

  li:last-child {
    border-bottom: none;
  }

  li:hover {
    background: #ccc;
  }

  li:hover .btn {
    display: block;
  }
</style>