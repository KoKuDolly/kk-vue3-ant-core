import authMaps from '@example/utils/authMap/index.js'

// console.log(authMaps)

export default [
  {
    path: authMaps.REPO.path,
    name: authMaps.REPO.name,
    redirect: `${authMaps.REPO.path}/${authMaps.REPO_LIST.path}`,
    component: () => import('@example/views/ci-view/'),
    meta: {
      title: authMaps.REPO.name,
      hidden: false,
      icon: 'PieChartOutlined',
      type: 'c-view',
      key: authMaps.REPO.path,
    },
    children: [
      {
        path: authMaps.REPO_LIST.path,
        name: authMaps.REPO_LIST.name,
        component: () => import('@example/views/ci-view/repo/'),
        meta: {
          title: authMaps.REPO_LIST.name,
          openKeys: authMaps.REPO.path,
          selectedKeys: `${authMaps.REPO.path}/${authMaps.REPO_LIST.path}`,
          hidden: false,
          icon: 'PieChartOutlined',
          key: `${authMaps.REPO.path}/${authMaps.REPO_LIST.path}`,
        },
      },
    ],
  },
  {
    path: authMaps.EVENT.path,
    name: authMaps.EVENT.name,
    redirect: `${authMaps.EVENT.path}/${authMaps.EVENT_LIST.path}`,
    component: () => import('@example/views/ci-view/'),
    meta: {
      title: authMaps.EVENT.name,
      hidden: false,
      icon: 'DesktopOutlined',
      type: 'c-view',
      key: authMaps.EVENT.path,
    },
    children: [
      {
        path: authMaps.EVENT_LIST.path,
        name: authMaps.EVENT_LIST.name,
        component: () => import('@example/views/ci-view/event/'),
        meta: {
          title: authMaps.EVENT_LIST.name,
          openKeys: authMaps.EVENT.path,
          selectedKeys: `${authMaps.EVENT.path}/${authMaps.EVENT_LIST.path}`,
          hidden: false,
          icon: 'DesktopOutlined',
          key: `${authMaps.EVENT.path}/${authMaps.EVENT_LIST.path}`,
        },
      },
    ],
  },
  {
    path: authMaps.CI.path,
    name: authMaps.CI.name,
    redirect: `${authMaps.CI.path}/${authMaps.CI_LIST.path}`,
    component: () => import('@example/views/ci-view/'),
    meta: {
      title: authMaps.CI.name,
      hidden: false,
      icon: 'InboxOutlined',
      type: 'c-view',
      key: authMaps.CI.path,
    },
    children: [
      {
        path: authMaps.CI_LIST.path,
        name: authMaps.CI_LIST.name,
        component: () => import('@example/views/ci-view/ci/'),
        meta: {
          title: authMaps.CI_LIST.name,
          openKeys: authMaps.CI.path,
          selectedKeys: `${authMaps.CI.path}/${authMaps.CI_LIST.path}`,
          hidden: false,
          icon: 'InboxOutlined',
          key: `${authMaps.CI.path}/${authMaps.CI_LIST.path}`,
        },
      },
      {
        path: authMaps.CI_DETAIL.path,
        name: authMaps.CI_DETAIL.name,
        component: () => import('@example/views/ci-view/ci/detail/'),
        meta: {
          title: authMaps.CI_DETAIL.name,
          openKeys: authMaps.CI.path,
          selectedKeys: `${authMaps.CI.path}/${authMaps.CI_LIST.path}`,
          hidden: true,
          icon: 'InboxOutlined',
          key: `${authMaps.CI.path}/${authMaps.CI_DETAIL.path}`,
        },
      },
    ],
  },
  {
    path: authMaps.CD.path,
    name: authMaps.CD.name,
    redirect: `${authMaps.CD.path}/${authMaps.CD_LIST.path}`,
    component: () => import('@example/views/ci-view/'),
    meta: {
      title: authMaps.CD.name,
      hidden: false,
      icon: 'InboxOutlined',
      type: 'c-view',
      key: authMaps.CD.path,
    },
    children: [
      {
        path: authMaps.CD_LIST.path,
        name: authMaps.CD_LIST.name,
        component: () => import('@example/views/ci-view/cd/'),
        meta: {
          title: authMaps.CD_LIST.name,
          openKeys: authMaps.CD.path,
          selectedKeys: `${authMaps.CD.path}/${authMaps.CD_LIST.path}`,
          hidden: false,
          icon: 'InboxOutlined',
          key: `${authMaps.CD.path}/${authMaps.CD_LIST.path}`,
        },
      },
      {
        path: authMaps.CD_DETAIL.path,
        name: authMaps.CD_DETAIL.name,
        component: () => import('@example/views/ci-view/cd/detail/'),
        meta: {
          title: authMaps.CD_DETAIL.name,
          openKeys: authMaps.CD.path,
          selectedKeys: `${authMaps.CD.path}/${authMaps.CD_LIST.path}`,
          hidden: true,
          icon: 'InboxOutlined',
          key: `${authMaps.CD.path}/${authMaps.CD_DETAIL.path}`,
        },
      },
    ],
  },
]
