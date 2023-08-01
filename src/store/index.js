import {createStore} from 'vuex'
import axios from "axios";
import router from "@/router";

const config = require('@/config')

export default createStore({
  state: {
    authToken: '',
    tokens: [],
    tokensLoading: false,
    tokenCreating: false,
  },
  getters: {
    AUTH_TOKEN(state) { return state.authToken },
    TOKENS(state) { return state.tokens },
    TOKENS_LOADING(state) { return state.tokensLoading },
  },
  mutations: {
    setAuthToken(state, authToken) { state.authToken = authToken },
    setTokens(state, tokens) { state.tokens = tokens }
  },
  actions: {
    // Authentication
    writeAuthToken({commit}, userToken) {
      localStorage.setItem('authToken', userToken)
      commit('setAuthToken', userToken)
    },
    checkAuthToken({commit}) {
      let token = localStorage.getItem('authToken')
      if (token) {
        commit('setAuthToken', token)
      }
    },
    clearAuthToken({commit}) {
      localStorage.removeItem('authToken')
      commit('setAuthToken', '')
    },
    // DSS Tokens
    getTokens({state, commit}) {
      state.tokensLoading = true
      let axiosHeader = {headers: {"Authorization": state.authToken}}
      axios.get(`${config.ycUrl}/keys`, axiosHeader)
        .then(response => {
          state.tokensLoading = false
          commit('setTokens', response.data.keys)
        })
        .catch(error => {
          state.tokensLoading = false
          console.log(error);
          this.dispatch('clearAuthToken')
          router.push('/signin')
        })
    },
    async addToken({state, commit}, token) {
      let axiosHeader = {headers: {"Authorization": state.authToken}}
      return await axios.post(`${config.ycUrl}/keys`, token, axiosHeader)
        .then(response => {
          this.dispatch('getTokens')
          return true
        })
        .catch(error => {
          console.log(error);
          return false
        })
    },
    removeToken({state, commit}, id) {
      let axiosHeader = {headers: {"Authorization": state.authToken}}
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
