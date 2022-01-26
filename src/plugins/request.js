import axios from 'axios'
import {
  responseCodeInclude200,
  responseCodeNotInclude200,
} from './responseCodeFilter.js'

import storage from '@/utils/storage.js'

const baseUrl = process.env.VUE_APP_BASE_URL

const instance = axios.create({
  baseURL: baseUrl,
  withCredentials: true,
  timeout: 10000,
})

instance.interceptors.request.use(
  (config) => {
    config.headers.Authorization = storage.getSessionStorage('KK_SESSION_ID')
    return config
  },
  (error) => {
    return Promise.reject(error)
  }
)

instance.interceptors.response.use(
  function (response) {
    // 全局的提示
    responseCodeInclude200(response)
    return response
  },
  function (error) {
    // 全局的网络非200提示
    responseCodeNotInclude200(error)
    return Promise.reject(error)
  }
)

export const request = instance
