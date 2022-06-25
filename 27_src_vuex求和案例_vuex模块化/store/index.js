// 引入Vue
import Vue from 'vue'
// 引入Vuex
import Vuex from 'vuex'

import countOptions from './countOptions'
import personOptions from './personOptions'
// 使用vuex
Vue.use(Vuex)




export default new Vuex.Store({
  modules:{
    countAbout:countOptions,
    personAbout:personOptions
  }
})
