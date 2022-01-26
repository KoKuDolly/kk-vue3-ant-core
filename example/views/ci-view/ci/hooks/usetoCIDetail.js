import { useRouter } from 'vue-router'
import authMap from '@/utils/authMap'
export default function usetoCIDetail() {
  const router = useRouter()
  const toCIDetail = (record) => {
    const { id } = record

    router.push({
      name: authMap.CI_DETAIL.name,
      query: {
        id,
      },
    })
  }

  return {
    toCIDetail,
  }
}
