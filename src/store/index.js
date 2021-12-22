import { createStore } from 'vuex'
import { router } from './modules/router'
import { layout } from './modules/layout'

export default createStore({
  state: {},
  mutations: {},
  actions: {},
  modules: {
    router,
    layout,
  },
})
