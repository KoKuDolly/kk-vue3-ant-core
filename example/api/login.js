import { request } from '@/plugins/request'
/**
 * cluster
 */
export function loginApi(data) {
  return request({
    url: 'kk/user/login',
    method: 'post',
    data,
  })
}

export function logOutApi() {}
