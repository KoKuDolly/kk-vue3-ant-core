import { message } from 'ant-design-vue'
import store from '@/store/index.js'
// 全局消息提示
export const responseCodeInclude200 = (response) => {
  const {
    data: { code, msg, error },
  } = response
  switch (code) {
    case 'c10000':
    case 'c10004':
    case 'c10005':
    case 'c10009':
    case 'c20000':
    case 'c20002':
    case 'c20004':
    case 'c20006':
    case 'c20007':
    case 'c20008':
    case 'c20009':
    case 'c30000':
    case 'c30002':
    case 'c30004':
    case 'c30006':
    case 'c30011':
    case 'c30012':
    case 'c40002': {
      return message.success(msg || 'process successful')
    }
    case 'c10001':
    case 'c10002':
    case 'c10003':
    case 'c10006':
    case 'c10007':
    case 'c10008':
    case 'c10010':
    case 'c10011':
    case 'c10012':
    case 'c10013':
    case 'c20001':
    case 'c20003':
    case 'c20005':
    case 'c20010':
    case 'c30001':
    case 'c30003':
    case 'c30005':
    case 'c30007':
    case 'c30008':
    case 'c30009':
    case 'c30010':
    case 'c30013':
    case 'c30014':
    case 'c40000':
    case 'c40003':
    case 'c40008':
    case 'c40012':
    case 'c40013':
    case 'c40014': {
      return message.error(`${msg} ${error}` || '未知错误')
    }
    default: {
      return void 0
    }
  }
}

export const responseCodeNotInclude200 = (error) => {
  if (error.response) {
    switch (error.response.status) {
      case 401: {
        store.dispatch('router/logOut')
        location.href = '/login'
        break
      }
      default: {
        message.error(error.message)
      }
    }
  }
}
// 判断接口是否成功，但是不做 message 提示
// 1 失败  0 成功
export const responseCodeSuccessOrFailed = (response) => {
  const {
    data: { code },
  } = response
  switch (code) {
    case 100000:
    case 'c00000':
    case 'c10000':
    case 'c10004':
    case 'c10005':
    case 'c10009':
    case 'c20000':
    case 'c20002':
    case 'c20004':
    case 'c20006':
    case 'c20007':
    case 'c20008':
    case 'c20009':
    case 'c30000':
    case 'c30002':
    case 'c30004':
    case 'c30006':
    case 'c30011':
    case 'c30012':
    case 'c40002': {
      return 0
    }
    case 'c10001':
    case 'c10002':
    case 'c10003':
    case 'c10006':
    case 'c10007':
    case 'c10008':
    case 'c10010':
    case 'c10011':
    case 'c10012':
    case 'c10013':
    case 'c20001':
    case 'c20003':
    case 'c20005':
    case 'c20010':
    case 'c30001':
    case 'c30003':
    case 'c30005':
    case 'c30007':
    case 'c30008':
    case 'c30009':
    case 'c30010':
    case 'c30013':
    case 'c30014':
    case 'c40000':
    case 'c40003':
    case 'c40008':
    case 'c40012':
    case 'c40013':
    case 'c40014': {
      return 1
    }
    default: {
      return void 0
    }
  }
}
