import { createRouter, createWebHistory } from 'vue-router'

function getRouter(routeMaps) {
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
        children: [...routeMaps],
      },
    ],
  })
}

export default getRouter
