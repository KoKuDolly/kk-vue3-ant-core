import { createRouter, createWebHistory } from 'vue-router'

function getRouter(store, routeMaps) {
  console.log('src/router/index.js --- 4', store, routeMaps)
  return createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes: [
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
        children: routeMaps.constantRouterMap.concat(
          ...routeMaps.asyncRouterMap
        ),
      },
    ],
  })
}

export default getRouter
