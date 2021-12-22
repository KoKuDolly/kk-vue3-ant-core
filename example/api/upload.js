import { request } from '@/plugins/request'
// 新增cd post 请求
export function addCdApi(payload) {
  // payload 格式
  // {
  // 	name: cd_name,
  // 	yaml_content:"asjdflkajklsdfjlajd",
  // 	ids: "1,2,3"
  // }
  return request({
    url: 'upload/repo/event/cd/',
    method: 'post',
    data: payload,
  })
}
