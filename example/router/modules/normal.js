export default [
  {
    path: '/home',
    name: 'home',
    component: () => import('@/components/normal/home/'),
    meta: {
      hidden: true,
      name: 'home',
      type: 'normal',
    },
  },
  {
    path: '/404',
    name: '404',
    component: () => import('@/components/normal/404/'),
    meta: {
      hidden: true,
      name: '404',
      type: 'normal',
    },
  },
  {
    path: '/:catchAll(.*)*',
    component: () => import('@/components/normal/404/'),
    meta: {
      hidden: true,
      type: 'normal',
    },
  },
]
