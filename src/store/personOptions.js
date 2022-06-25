// 引入axios
import axios from 'axios'

export default  {
  namespaced: true,

  actions:{
    tan(context,val){
      console.log(val.name);
      if(val.name.indexOf('谭') === 0){
        context.commit('ADD',val)
      }else{
        alert('必须姓谭')
      }
    },
    server(context,val){
      axios.get('https://api.uixsj.cn/hitokoto/get?type=social').then(
        response => {
          let personObj = {id:val,name:response.data}
          context.commit('ADD',personObj)
        },
        error => {
          console.warn(error.message)
        }
      )
    }
  },
  mutations:{
    ADD(state,val){
      state.person.unshift(val)
    }
  },
  state:{
    person:[{id:'',name:''}]
  },
  getters:{
    personNum(state){
      return state.person.length
    },
    getFirst(state){
      return state.person[0].name
    }
  }
}
