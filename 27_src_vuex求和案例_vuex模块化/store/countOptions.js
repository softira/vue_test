export default  {
  namespaced: true,
  
  actions:{
    jiaodd(context,val){
      if(context.state.sum % 2)
        context.commit('JIA',val)
    },
    jiawait(context,val){
      setTimeout(()=>{
        context.commit('JIA',val)
      },2000)
    },
  },
  mutations:{
    JIA(state,val){
      state.sum += val
    },
    JIAN(state,val){
      state.sum -= val
    },
  },
  state:{
    sum: 0,
    name: 'TS',
    msg: 'hello',
  },
  getters:{
    bigSum(state){
      return state.sum * 10
    },
  }
}

