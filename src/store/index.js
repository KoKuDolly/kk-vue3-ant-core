import { createStore } from 'vuex'
import { router } from './modules/router'
import { layout } from './modules/layout'

export default (module) => {
  return createStore({
    state: {},
    mutations: {},
    actions: {},
    modules: {
      router,
      layout,
      ...module,
    },
  })
}
