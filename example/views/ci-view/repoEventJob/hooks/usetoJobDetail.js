import { useRouter } from 'vue-router'
export default function usetoJobDetail() {
  const router = useRouter()
  const toJobDetail = (record) => {
    const { id } = record
    // console.log(id)
    router.push({
      name: 'REPO_EVENT_JOB_DETAIL',
      query: {
        id,
      },
    })
  }

  return {
    toJobDetail,
  }
}
