import KK from '@/'
import normal from './modules/normal.js'
import cView from './modules/c-view.js'
import consts from './modules/consts.js'
export { cView, normal }

const { routerMap } = KK

const asyncRouterMap = [...cView, ...normal]
routerMap.asyncRouterMap = asyncRouterMap

export const routes = [
  {
    path: '/',
    name: 'Layout',
    redirect: '/home',
    component: () => import('@/components/Layout/'),
    meta: {
      title: 'Layout',
      hidden: false,
      icon: 'PieChartOutlined',
    },
    children: routerMap.constantRouterMap.concat(...routerMap.asyncRouterMap),
  },
  ...consts,
]

export default (store) => {
  return KK.router(store, routes)
}
