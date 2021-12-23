import routeMaps from '@/router/router.map.js'
import { deepCopy } from '@/utils/tools.js'

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
  },
  actions: {
    generateRoutes({ commit }) {
      return new Promise((resolve) => {
        // const { menus } = data
        // console.log(routeMaps.asyncRouterMap)
        const asyncRouterMap = deepCopy(routeMaps.asyncRouterMap)
        // const accessedRouters = filterAsyncRouter(asyncRouterMap, menus)
        // commit('SET_ROUTERS', accessedRouters)
        // resolve(accessedRouters)
        commit('SET_ROUTERS', asyncRouterMap)
        resolve(asyncRouterMap)
      })
    },
  },
  mutations: {
    SET_ROUTERS(state, payload) {
      state.routers = payload
    },
  },
  getters: {
    routers: (state) => state.routers,
  },
}
