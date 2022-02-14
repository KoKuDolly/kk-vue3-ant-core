import { request } from '@/plugins/request'
/**
 * cluster
 */
export function loginApi(data) {
  return request({
    url: 'login/',
    method: 'post',
    data,
  })
}

export function logOutApi() {}
