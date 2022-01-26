import { routes } from '@example/router/'
import { deepCopy } from '@/utils/tools.js'
import storage from '@/utils/storage.js'

export const hasPermission = (menus, route) => {
  if (route.meta && route.meta.code) {
    return menus.some((menu) => menu.code === route.meta.code)
  }
  return true
}

export const filterAsyncRouter = (asyncRouterMap, menus) => {
  const accessedRouters = asyncRouterMap.filter((route) => {
    if (hasPermission(menus, route)) {
      if (!route.hidden && route.meta && route.meta.code) {
        const menu = menus.find((m) => m.code === route.meta.code)
        route.sort = menu.sort || 0
      }
      if (route.children && route.children.length) {
        route.children = filterAsyncRouter(route.children, menus)
      }
      return true
    }
    return false
  })
  return accessedRouters.sort((a, b) => a.sort - b.sort)
}

export const router = {
  namespaced: true,
  state: {
    routers: [],
    sessionId: null,
  },
  actions: {
    init({ commit }) {
      commit('GET_USERINFO')
    },
    generateRoutes({ commit }) {
      return new Promise((resolve) => {
        // const { menus } = data
        const asyncRouterMap = deepCopy(routes)
        // const accessedRouters = filterAsyncRouter(asyncRouterMap, menus)
        // commit('SET_ROUTERS', accessedRouters)
        // resolve(accessedRouters)
        commit('SET_ROUTERS', asyncRouterMap)
        resolve(asyncRouterMap)
      })
    },
    login({ commit }, payload) {
      commit('SET_USERINFO', payload)
    },
    logOut({ commit }) {
      commit('SET_USERINFO', { token: '', user: '' })
    },
  },
  mutations: {
    GET_USERINFO(state) {
      state.sessionId = storage.getSessionStorage('KK_SESSION_ID')
      state.username = storage.getSessionStorage('KK_USER_NAME')
    },
    SET_ROUTERS(state, payload) {
      state.routers = payload
    },
    SET_USERINFO(state, payload) {
      const { token, user } = payload
      state.sessionId = token
      state.username = user
      storage.setSessionStorage('KK_SESSION_ID', token)
      storage.setSessionStorage('KK_USER_NAME', user)
    },
  },
  getters: {
    routers: (state) => state.routers,
  },
}
