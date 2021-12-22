import { computed } from 'vue'
import { useStore } from 'vuex'
import { useRoute } from 'vue-router'

export default function useNormalMenuHooks() {
  // normal 模式
  const store = useStore()
  const route = useRoute()
  const menus = computed(() => store.state.router.routers)
  const cRoutes = route.path.split('/').slice(1)

  // console.log(menus, route)

  function getNormalMenus() {
    let rst = []
    const dfs = (menus, fPath) => {
      menus.forEach((item) => {
        let path = item.path
        if (path.startsWith('/')) {
          path = path.slice(1)
        }
        if (cRoutes.some((__) => __ === path)) {
          rst.push({
            ...item,
            path:
              fPath + (item.path.startsWith('/') ? item.path : '/' + item.path),
          })
        }
        if (item.children && item.children.length) {
          dfs(item.children, fPath + item.path)
        }
      })
    }
    dfs(menus.value, '')
    return rst
  }

  const normalBreadCrumbData = getNormalMenus()

  return {
    normalBreadCrumbData,
  }
}
