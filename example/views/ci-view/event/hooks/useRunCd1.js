import { useRouter } from 'vue-router'
import { addCdApi } from '@example/api/upload.js'
import { responseCodeSuccessOrFailed } from '@/plugins/responseCodeFilter.js'
import authMap from '@example/utils/authMap'

export default function useRunCd1(getPageData) {
  const router = useRouter()
  const handleRunCd = (record) => {
    const { id } = record
    addCdApi({ id }).then((res) => {
      if (responseCodeSuccessOrFailed(res) !== 1)
        router.push({ name: authMap.CD.name })
      else getPageData('noop')
    })
  }

  return {
    handleRunCd,
  }
}
