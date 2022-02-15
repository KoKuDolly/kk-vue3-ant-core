const tokens = {
  admin: {
    token: 'admin-token',
  },
  editor: {
    token: 'editor-token',
  },
}

const users = {
  'admin-token': {
    roles: ['admin'],
    introduction: 'I am a super administrator',
    avatar:
      'https://wpimg.wallstcn.com/f778738c-e4f8-4870-b634-56703b4acafe.gif',
    name: 'Super Admin',
  },
  'editor-token': {
    roles: ['editor'],
    introduction: 'I am an editor',
    avatar:
      'https://wpimg.wallstcn.com/f778738c-e4f8-4870-b634-56703b4acafe.gif',
    name: 'Normal Editor',
  },
}

module.exports = [
  // user login
  {
    url: '/kk/login',
    type: 'post',
    response: (config) => {
      // console.log(config)
      const { username } = config.body
      const token = tokens[username]

      if (!token) {
        return {
          code: 100001,
          message: 'not correct',
        }
      }

      return {
        code: 100000,
        data: token,
      }
    },
  },
  // get user info
  {
    url: '/kk/userInfo',
    type: 'post',
    response: (config) => {
      const { token } = config.body
      const info = users[token]

      if (!info) {
        return {
          code: 100002,
          message: 'login failed, unable to get user details',
        }
      }

      return {
        code: 100000,
        data: info,
      }
    },
  },
  // user logout
  {
    url: '/kk/logout',
    type: 'post',
    response: () => {
      return {
        code: 100000,
        data: 'success',
      }
    },
  },
]
