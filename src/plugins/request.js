import axios from 'axios'

const baseUrl = process.env.VUE_APP_BASE_URL

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
    return Promise.reject(error)
  }
)

export const request = instance
