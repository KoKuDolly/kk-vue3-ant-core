import { routes } from '@example/router/'
import { deepCopy } from '@/utils/tools.js'
import storage from '@/utils/storage.js'
import { userInfoApi } from '@example/api/login'

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
    userInfo: null,
  },
  actions: {
    init({ commit }) {
      commit('INIT')
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
      const { token } = payload
      commit('SET_TOKEN', token)
    },
    getUserInfo({ commit, state }) {
      userInfoApi({ token: state.sessionId }).then((res) => {
        const userInfo = res?.data?.data ?? {}
        commit('SET_USERINFO', userInfo)
      })
    },
    logOut({ commit }) {
      commit('SET_TOKEN', '')
      commit('SET_USERINFO', null)
    },
  },
  mutations: {
    INIT(state) {
      state.sessionId = storage.getSessionStorage('KK_SESSION_ID')
      state.userInfo = storage.getSessionStorage('KK_USER_INFO')
    },
    SET_ROUTERS(state, payload) {
      state.routers = payload
    },
    SET_TOKEN(state, token) {
      state.sessionId = token
      storage.setSessionStorage('KK_SESSION_ID', token)
    },
    SET_USERINFO(state, userInfo) {
      if (userInfo) {
        state.userInfo = userInfo
      }
      storage.setSessionStorage('KK_USER_INFO', userInfo)
    },
  },
  getters: {
    routers: (state) => state.routers,
  },
}
