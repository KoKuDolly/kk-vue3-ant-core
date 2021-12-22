const user1 = {
  isAdministrator: true,
}
const user2 = {
  isAdministrator: false,
  resourcePermissions: {
    '*': 'all',
  },
}
const user3 = {
  isAdministrator: false,
  resourcePermissions: {
    a: ['*'],
  },
}
const user4 = {
  isAdministrator: false,
  resourcePermissions: {
    a: ['a', 'b', '*'],
    b: ['b', 'a'],
  },
}

const routes = [
  {
    path: '',
    name: '',
    requirePermission: {
      resource: 'a',
    },
  },
  {
    path: '',
    name: '',
  },
  {
    path: '',
    name: '',
    requirePermission: {
      resource: 'a',
      verb: 'b',
    },
  },
]

function hasPermission(user, route) {
  // 用户如果是管理员，拥有该路由权限
  if (user.isAdministrator) {
    return true
  }
  // 非管理员，当前路由是否需要权限
  if (route.requirePermission) {
    // 非管理员，当前路由需要权限
    for (const resource of Object.keys(user.resourcePermissions)) {
      // 用户资源权限有 key 为 * 代表拥有该路由的所有权限
      if (resource === '*') {
        return true
      }
      // 如果用户不是管理员，且没有 资源权限 key 为 * 的时候
      if (
        route.requirePermission &&
        route.requirePermission.resource === resource
      ) {
        // 当该路由的需求权限 resource 字段的值 和 用户资源权限的某个 key 相同
        for (const verb of user.resourcePermissions[resource]) {
          // 用户的资源权限为 对象， 其中属性值为 数组
          // 当前路由的 resource 值 和 用户的 某个资源权限下的数组的任意一个资源 为 *，代表拥有该资源
          if (verb === '*') {
            return true
          }
          // 用户 某个资源的 任意一个值 和 路由的 资源权限的verb相通，代表有该路由权限
          if (verb === route.requirePermission.verb) {
            return true
          }
        }
      }
    }
    return false
  }
  return true
}
