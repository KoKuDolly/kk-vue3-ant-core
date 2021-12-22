import { request } from '@/plugins/request'
/**
 * cluster
 */
export function getClusterListApi() {
  return request({
    url: 'cluster/',
    method: 'get',
  })
}
/**
 * repo
 */
// 新增 repo
export function addRepoApi(payload) {
  return request({
    url: 'repo/',
    method: 'post',
    data: payload,
  })
}
// repo 列表
export function getRepoApi() {
  return request({
    url: 'repo/',
    method: 'get',
    params: {
      pageSize: 10,
      currentPage: 1,
    },
  })
}
// repo check
export function checkRepoApi({ id }) {
  return request({
    url: `repo/${id}/`,
    method: 'get',
  })
}
/**
 * event
 */
// event 列表
export function getEventApi() {
  return request({
    url: `repo/event/`,
    method: 'get',
    params: {
      pageSize: 10,
      currentPage: 1,
    },
  })
}
// event add
export function addEventApi({ data }) {
  return request({
    url: `repo/event/`,
    method: 'post',
    data,
  })
}
// event edit
export function editEventApi({ id, data }) {
  return request({
    url: `repo/event/${id}/`,
    method: 'patch',
    data,
  })
}
// event check
export function checkEventApi({ id }) {
  return request({
    url: `repo/event/${id}/`,
    method: 'get',
  })
}
/**
 * job
 */

// Job list
export function getJobListApi() {
  return request({
    url: `repo/event/job/`,
    method: 'get',
    params: {
      pageSize: 10,
      currentPage: 1,
    },
  })
}
// Job add
export function addJobApi({ id }) {
  return request({
    url: `repo/event/job/`,
    method: 'post',
    data: { id },
  })
}
// Job Delete
export function deleteJobApi({ id }) {
  return request({
    url: `repo/event/job/`,
    method: 'delete',
    data: { id },
  })
}
// Job Detail
export function getJobDetailApi({ id }) {
  return request({
    url: `repo/event/job/${id}/`,
    method: 'get',
  })
}

// ---->
// job steps
export function getJobApi({ eventId }) {
  return request({
    url: `job/${eventId}`,
    method: 'get',
  })
}
// log 每种job的日志记录
export function getLogApi({ jobType }) {
  return request({
    url: `log/${jobType}`,
    method: 'get',
  })
}
// check 只给部分用户使用，暂时不做
export function specialCheckApi() {
  return request({
    url: 'check/',
    method: 'get',
  })
}
