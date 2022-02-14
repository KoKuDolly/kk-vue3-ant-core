import { useRouter } from 'vue-router'
import { useStore } from 'vuex'
import { loginApi } from '@example/api/login.js'
import { responseCodeSuccessOrFailed } from '@/plugins/responseCodeFilter.js'

export default function useLoginHooks(model, form) {
  const router = useRouter()
  const store = useStore()

  const handleLogin = () => {
    form.value.validate().then(() => {
      const { username, password } = model
      const params = {
        user: username,
        password,
      }

      loginApi(params).then((res) => {
        if (responseCodeSuccessOrFailed(res) !== 1) {
          store.dispatch('router/login', res?.data ?? {})
          router.push('/')
        }
      })
    })
  }
  return {
    handleLogin,
  }
}
