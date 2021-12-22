import { deleteJobApi } from '@example/api/ci-view.js'
import { message } from 'ant-design-vue'

export default function useDelete(getPageData) {
  const handleDeleteJob = (record) => {
    const { id } = record
    deleteJobApi({ id })
      .then(() => {
        getPageData()
      })
      .catch((error) => {
        message.error(error?.message ?? 'error')
      })
  }

  return {
    handleDeleteJob,
  }
}
