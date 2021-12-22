import config from '@/config/global.config.js'
import { getlocalStorage, setlocalStorage } from '@/utils/storage.js'

const logo1 = () => config.LAYOUT.LOGO_URL
const logo2 = () => config.LAYOUT.LOGO_MINI_URL

export const layout = {
  namespaced: true,
  state: {
    asiderCollapsed: config.LAYOUT.ASIDER_COLLAPSED,
    left: config.LAYOUT.ASIDER_WIDTH_LONG,
    logo: logo1(),
  },
  actions: {
    initLayout({ commit }) {
      commit('INIT_LAYOUT')
    },
  },
  mutations: {
    INIT_LAYOUT(state) {
      const localLayout = getlocalStorage('layout')
      if (localLayout) {
        const { asiderCollapsed, left, logo } = localLayout
        state.asiderCollapsed = asiderCollapsed
        state.left = left
        state.logo = logo
      } else {
        setlocalStorage('layout', state)
      }
    },
    TOGGLE_ASIDER(state, payload) {
      if (payload) {
        state.left = config.LAYOUT.ASIDER_WIDTH_SHORT
        state.logo = logo2()
      } else {
        state.left = config.LAYOUT.ASIDER_WIDTH_LONG
        state.logo = logo1()
      }
      state.asiderCollapsed = payload
      setlocalStorage('layout', state)
    },
  },
}
