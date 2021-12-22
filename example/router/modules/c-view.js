export default [
  {
    path: '/repo',
    name: 'repo',
    redirect: '/repo/list',
    component: () => import('@example/views/ci-view/'),
    meta: {
      title: 'REPO',
      hidden: false,
      icon: 'PieChartOutlined',
      type: 'c-view',
      key: '/repo',
    },
    children: [
      {
        path: 'list',
        name: 'REPO_LIST',
        component: () => import('@example/views/ci-view/repo/'),
        meta: {
          title: 'REPO_LIST',
          openKeys: '/repo',
          selectedKeys: '/repo/list',
          hidden: false,
          icon: 'PieChartOutlined',
          key: '/repo/list',
        },
      },
    ],
  },
  {
    path: '/repoEvent',
    name: 'repoEvent',
    redirect: '/repoEvent/list',
    component: () => import('@example/views/ci-view/'),
    meta: {
      title: 'EVENT',
      hidden: false,
      icon: 'DesktopOutlined',
      type: 'c-view',
      key: '/repoEvent',
    },
    children: [
      {
        path: 'list',
        name: 'REPO_EVENT_LIST',
        component: () => import('@example/views/ci-view/repoEvent/'),
        meta: {
          title: 'EVENT_LIST',
          openKeys: '/repoEvent',
          selectedKeys: '/repoEvent/list',
          hidden: false,
          icon: 'DesktopOutlined',
          key: '/repoEvent/list',
        },
      },
    ],
  },
  {
    path: '/repoEventJob',
    name: 'repoEventJob',
    redirect: '/repoEventJob/list',
    component: () => import('@example/views/ci-view/'),
    meta: {
      title: 'JOB',
      hidden: false,
      icon: 'InboxOutlined',
      type: 'c-view',
      key: '/repoEventJob',
    },
    children: [
      {
        path: 'list',
        name: 'REPO_EVENT_JOB_LIST',
        component: () => import('@example/views/ci-view/repoEventJob/'),
        meta: {
          title: 'JOB_LIST',
          openKeys: '/repoEventJob',
          selectedKeys: '/repoEventJob/list',
          hidden: false,
          icon: 'InboxOutlined',
          key: '/repoEventJob/list',
        },
      },
      {
        path: 'detail',
        name: 'REPO_EVENT_JOB_DETAIL',
        component: () => import('@example/views/ci-view/repoEventDetail/'),
        meta: {
          title: 'JOB_DETAIL',
          openKeys: '/repoEventJob',
          selectedKeys: '/repoEventJob/list',
          hidden: true,
          icon: 'InboxOutlined',
          key: '/repoEventJob/detail',
        },
      },
    ],
  },
]
