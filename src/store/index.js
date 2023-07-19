import { createStore } from 'vuex'

export default createStore({
  state: {
    tokens: [
      {
        company_name: 'Дорспецстрой',
        company_user: 'Мнацаканов Эдуард',
        user: 'Аня',
        key_id: '87lk12398dan',
        key_fns: true,
        archived: false,
        date_start: '2022-05-11T19:55:56+00:00',
        date_end: '2023-08-20T19:55:56+00:00',
        description: 'test token'
      }, {
        company_name: 'Мосинжиниринг',
        company_user: 'Мнацаканов Геогрий',
        user: 'Каролина',
        key_id: '12lk32357sty',
        key_fns: false,
        archived: false,
        date_start: '2022-11-10T19:55:56+00:00',
        date_end: '2024-02-09T19:55:56+00:00',
        description: 'test token 2'
      },
    ]
  },
  getters: {
    TOKENS(state) {return state.tokens}
  },
  mutations: {
  },
  actions: {
  },
  modules: {
  }
})
