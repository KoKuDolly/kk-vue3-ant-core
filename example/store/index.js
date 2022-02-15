import { store } from '@/index'
import { createStore } from 'vuex'
import { router } from './modules/router'
const { layout } = store

export default createStore({
  state: {},
  mutations: {},
  actions: {},
  modules: {
    router,
    layout,
  },
  getters: {
    username: (state) => state.router.username,
    sessionId: (state) => state.router.sessionId,
  },
})
