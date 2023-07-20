import { createStore } from 'vuex'
import axios from "axios";
const config = require('@/config')

export default createStore({
  state: {
    tokens: []
  },
  getters: {
    TOKENS(state) {return state.tokens}
  },
  mutations: {
    setTokens(state, tokens) {state.tokens = tokens}
  },
  actions: {
    getTokens({ state, commit }) {
      let axiosHeader = { headers: {"Authorization": config.authToken} }
      axios.get(`${config.ycUrl}/keys`, axiosHeader)
          .then(response => {
            commit('setTokens', response.data.keys)
          })
          .catch(error => {
            console.log(error);
          })
    },
    addToken({commit}, token) {
      let axiosHeader = { headers: {"Authorization": config.authToken} }
      axios.post(`${config.ycUrl}/keys`, token, axiosHeader)
          .then(response => {
            console.log(response.data)
          })
          .catch(error => {
            console.log(error);
          })
    }
  },
  modules: {
  }
})
