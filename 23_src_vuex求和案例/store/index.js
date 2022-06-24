// 引入Vue
import Vue from 'vue'
// 引入Vuex
import Vuex from 'vuex'
// 使用vuex
Vue.use(Vuex)

// 准备actions对象
const actions = {
  // jia(context,val){
  //   context.commit('JIA',val)
  // },
  // jian(context,val){
  //   context.commit('JIAN',val)
  // },
  jiaodd(context,val){
    if(context.state.sum % 2)
      context.commit('JIA',val)
  },
  jiawait(context,val){
    setTimeout(()=>{
      context.commit('JIA',val)
    },2000)
  }
}
// 准备mutations对象
const mutations = {
  JIA(state,val){
    state.sum += val
  },
  JIAN(state,val){
    state.sum -= val
  }
}
// 准备state对象
const state = {
  sum: 0
}

export default new Vuex.Store({
  actions,
  mutations,
  state
})
