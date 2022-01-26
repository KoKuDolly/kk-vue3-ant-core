import { useRouter } from 'vue-router'
export default function useRouterChange() {
  const router = useRouter()
  const push = (name) => {
    router.push({
      name,
    })
  }

  return {
    push,
  }
}
