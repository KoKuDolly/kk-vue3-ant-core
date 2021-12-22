import { addJobApi } from '@example/api/ci-view.js'
import { message } from 'ant-design-vue'

export default function useCreateJob() {
  const handlAddJob = (record) => {
    const { id } = record
    addJobApi({ id })
      .then((res) => {
        console.log(res)
        message.success(res.data.msg || '创建job成功')
      })
      .catch((error) => {
        message.error(error.message || 'error')
      })
  }

  return {
    handlAddJob,
  }
}
