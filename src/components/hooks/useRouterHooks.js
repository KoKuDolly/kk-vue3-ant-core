import { ref } from 'vue'
import { useStore } from 'vuex'

export default function useAsiderMenuHooks() {
  const menuData = ref([])

  const store = useStore()
  const routers = store.getters['router/routers'].filter(
    (__) => !__.meta.hidden && __.meta.type !== 'normal'
  )

  const filterRouters = (routers) => {
    return routers.filter((route) => {
      if (route.meta && route.meta.hidden) {
        return false
      }
      if (route.children && route.children.length) {
        route.children = filterRouters(route.children)
      }
      return true
    })
  }

  const rst = filterRouters(routers)

  menuData.value = rst

  const click = () => {
    console.log('click')
  }

  return { menuData, click }
}
