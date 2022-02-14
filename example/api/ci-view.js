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
    timeout: 30000,
  })
}
// 编辑 repo
export function editRepoApi({ id, data }) {
  return request({
    url: `repo/${id}/`,
    method: 'patch',
    data,
    timeout: 30000,
  })
}
// repo 列表
export function getRepoApi(
  params = {
    pageSize: 10,
    currentPage: 1,
  }
) {
  return request({
    url: 'repo/',
    method: 'get',
    params,
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
export function getEventApi(
  params = {
    pageSize: 10,
    currentPage: 1,
  }
) {
  return request({
    url: `repo/event/`,
    method: 'get',
    params,
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
export function getCIListApi(
  params = {
    pageSize: 10,
    currentPage: 1,
  }
) {
  return request({
    url: `repo/event/job/`,
    method: 'get',
    params,
  })
}
// Job add
export function addCIApi(data) {
  return request({
    url: `repo/event/job/`,
    method: 'post',
    data,
  })
}
// Job Delete
export function deleteCIApi({ id }) {
  return request({
    url: `repo/event/job/`,
    method: 'delete',
    data: { id },
  })
}
// Job Detail
export function getCIDetailApi({ id }) {
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

// cd 接口
export function getCDListApi() {
  return request({
    url: 'repo/event/cd/',
    method: 'get',
  })
}

// 查看某一个cd 的接口
export function checkCDListApi({ id }) {
  return request({
    url: `repo/event/cd/${id}/`,
    method: 'get',
  })
}
