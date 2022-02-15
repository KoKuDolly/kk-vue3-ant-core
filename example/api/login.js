import { request } from '@/plugins/request'
// login
export function loginApi(data) {
  return request({
    url: 'kk/login',
    method: 'post',
    data,
  })
}

// userInfo
export function userInfoApi(data) {
  return request({
    url: '/kk/userInfo',
    method: 'post',
    data,
  })
}
// logout
export function logoutApi(data) {
  return request({
    url: '/kk/logout',
    method: 'post',
    data,
  })
}
