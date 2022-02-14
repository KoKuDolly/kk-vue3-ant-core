// 白名单路由 login
export default [
  {
    path: '/login',
    name: 'login',
    component: () => import('@/components/normal/login/'),
    meta: {
      hidden: true,
      name: 'login',
      type: 'normal',
    },
  },
]
