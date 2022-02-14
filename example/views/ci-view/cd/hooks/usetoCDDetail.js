import { useRouter } from 'vue-router'
import authMap from '@/utils/authMap'
export default function usetoCDDetail() {
  const router = useRouter()
  const toCDDetail = (record) => {
    const { id } = record

    router.push({
      name: authMap.CD_DETAIL.name,
      query: {
        id,
      },
    })
  }

  return {
    toCDDetail,
  }
}
