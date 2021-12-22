import { computed } from 'vue'
import { useRoute } from 'vue-router'
import { useStore } from 'vuex'
export default function useRouterMenuHooks() {
  // router 模式
  const route = useRoute()
  const store = useStore()
  const menus = computed(() => store.state.router.routers)
  const fPath = '/' + route.path.split('/')[1]
  const routerBreadCrumbData = menus.value.filter((__) => {
    return __.path === fPath
  })

  return {
    routerBreadCrumbData,
  }
}
