import { request } from '@/plugins/request'
// 新增cd post 请求
export function addCdApi(payload) {
  return request({
    url: 'repo/event/cd/',
    method: 'post',
    data: payload,
  })
}
