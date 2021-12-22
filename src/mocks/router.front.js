// 模拟的前端路由
export const menuData = [
  {
    path: '1',
    name: 'Option 1',
    components: 'components',
    meta: {
      title: '',
      activeMenu: '',
      icon: 'PieChartOutlined',
      sort: 0,
      hidden: true,
      props: true,
      query: {},
      params: {},
      url: '',
      code: '', // 前端页面权限
      // 资源权限
      requirePermission: {
        resource: 'a',
        verb: 'b',
      },
    },
    children: [],
  },
  {
    path: '2',
    name: 'Option 2',
    components: 'components',
    meta: {
      title: '',
      activeMenu: '',
      icon: 'PieChartOutlined',
      sort: 0,
      hidden: true,
      props: true,
      query: {},
      params: {},
      url: '',
      code: '', // 前端页面权限
      // 资源权限
      requirePermission: {
        resource: 'a',
        verb: 'b',
      },
    },
    children: [],
  },
  {
    path: 'sub1',
    name: 'sub 1',
    components: 'components',
    meta: {
      title: '',
      activeMenu: '',
      icon: 'PieChartOutlined',
      sort: 0,
      hidden: true,
      props: true,
      query: {},
      params: {},
      url: '',
      code: '', // 前端页面权限
      // 资源权限
      requirePermission: {
        resource: 'a',
        verb: 'b',
      },
    },
    children: [
      {
        path: '3',
        name: 'Option 3',
        components: 'components',
        meta: {
          title: '',
          activeMenu: '',
          icon: '',
          sort: 0,
          hidden: true,
          props: true,
          query: {},
          params: {},
          url: '',
          code: '', // 前端页面权限
          // 资源权限
          requirePermission: {
            resource: 'a',
            verb: 'b',
          },
        },
        children: [],
      },
    ],
  },
  {
    path: 'sub 2',
    name: 'sub 2',
    components: 'components',
    meta: {
      title: '',
      activeMenu: '',
      icon: 'PieChartOutlined',
      sort: 0,
      hidden: true,
      props: true,
      query: {},
      params: {},
      url: '',
      code: '', // 前端页面权限
      // 资源权限
      requirePermission: {
        resource: 'a',
        verb: 'b',
      },
    },
    children: [
      {
        path: 'sub3',
        name: 'sub 3',
        components: 'components',
        meta: {
          title: '',
          activeMenu: '',
          icon: 'PieChartOutlined',
          sort: 0,
          hidden: true,
          props: true,
          query: {},
          params: {},
          url: '',
          code: '', // 前端页面权限
          // 资源权限
          requirePermission: {
            resource: 'a',
            verb: 'b',
          },
        },
        children: [
          {
            path: 'sub4',
            name: 'sub 4',
            components: 'components',
            meta: {
              title: '',
              activeMenu: '',
              icon: 'PieChartOutlined',
              sort: 0,
              hidden: true,
              props: true,
              query: {},
              params: {},
              url: '',
              code: '', // 前端页面权限
              // 资源权限
              requirePermission: {
                resource: 'a',
                verb: 'b',
              },
            },
            children: [
              {
                path: '4',
                name: 'Option 4',
                components: 'components',
                meta: {
                  title: '',
                  activeMenu: '',
                  icon: 'PieChartOutlined',
                  sort: 0,
                  hidden: true,
                  props: true,
                  query: {},
                  params: {},
                  url: '',
                  code: '', // 前端页面权限
                  // 资源权限
                  requirePermission: {
                    resource: 'a',
                    verb: 'b',
                  },
                },
                children: [],
              },
            ],
          },
        ],
      },
    ],
  },
]
