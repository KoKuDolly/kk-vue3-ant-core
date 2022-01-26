import { useRouter } from 'vue-router'
import { addCIApi } from '@/api/ci-view.js'
import { responseCodeSuccessOrFailed } from '@/plugins/responseCodeFilter.js'
import authMap from '@/utils/authMap'

export default function useCreateJob(getPageData) {
  const router = useRouter()
  const handleAddCI = (record) => {
    const { id } = record
    addCIApi({ id }).then((res) => {
      if (responseCodeSuccessOrFailed(res) !== 1)
        router.push({ name: authMap.CI.name })
      else getPageData('noop')
    })
  }

  return {
    handleAddCI,
  }
}
