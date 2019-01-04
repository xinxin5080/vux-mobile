import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    totalnum: 0
  },
  mutations: {
    num: (state) => {
      let tota = 0
      let mygoods = JSON.parse(localStorage.getItem('mygoods') || '[]')
      mygoods.map(item => {
        tota += item.num
      })
      state.totalnum = tota
    }
  },
  actions: {

  }
})
