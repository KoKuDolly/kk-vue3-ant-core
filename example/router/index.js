import KK from '@/'

import cView from './modules/c-view'
import normal from './modules/normal'

const { routerMap } = KK

const asyncRouterMap = [...cView, ...normal]
routerMap.asyncRouterMap = asyncRouterMap

export default (store) => {
  return KK.router(store, routerMap)
}
