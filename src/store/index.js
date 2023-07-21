import {createStore} from 'vuex'
import axios from "axios";

const config = require('@/config')

export default createStore({
  state: {
    tokens: [],
    tokensLoading: false,
  },
  getters: {
    TOKENS(state) {
      return state.tokens
    },
    TOKENS_LOADING(state) {
      return state.tokensLoading
    },
  },
  mutations: {
    setTokens(state, tokens) {
      state.tokens = tokens
    }
  },
  actions: {
    getTokens({state, commit}) {
      state.tokensLoading = true
      let axiosHeader = {headers: {"Authorization": config.authToken}}
      axios.get(`${config.ycUrl}/keys`, axiosHeader)
        .then(response => {
          state.tokensLoading = false
          commit('setTokens', response.data.keys)
        })
        .catch(error => {
          state.tokensLoading = false
          console.log(error);
        })
    },
    addToken({commit}, token) {
      let axiosHeader = {headers: {"Authorization": config.authToken}}
      axios.post(`${config.ycUrl}/keys`, token, axiosHeader)
        .then(response => {
          this.dispatch('getTokens')
          console.log(response.data)
        })
        .catch(error => {
          console.log(error);
        })
    },
    removeToken({commit}, id) {
      let axiosHeader = {headers: {"Authorization": config.authToken}}
      axios.delete(`${config.ycUrl}/keys/${id}`, axiosHeader)
        .then(response => {
          this.dispatch('getTokens')
          console.log(response.data)
        })
        .catch(error => {
          console.log(error);
        })
    }
  },
  modules: {}
})
