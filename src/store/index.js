import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    error: null,
    componenteVista: 'InicioPaciente'
  },
  mutations: {
    setError(state,payload){
      state.error = payload
    },
    setComponente(state,payload){
      state.componenteVista=payload;
    }
  },
  actions: {
    cambiarComponente({commit},comp){
      commit('setComponente',comp)
      console.log(comp)
    },
    
  },
  modules: {
  }
})
