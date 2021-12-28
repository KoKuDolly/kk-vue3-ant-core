import axios from 'axios'
import { message } from 'ant-design-vue'

const baseUrl = '/api'

const instance = axios.create({
  baseURL: baseUrl,
  withCredentials: true,
  timeout: 10000,
})

instance.interceptors.request.use(
  (config) => {
    return config
  },
  (error) => {
    return Promise.reject(error)
  }
)

instance.interceptors.response.use(
  function (response) {
    return response
  },
  function (error) {
    console.log(error, error.name, error.message, error.body)
    // return Promise.reject(error)
    return message.error(error.message)
  }
)

export const request = instance
