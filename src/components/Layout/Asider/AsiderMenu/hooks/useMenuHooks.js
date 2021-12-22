import { reactive, computed, toRefs, watch } from 'vue'
import { useStore } from 'vuex'
import { useRouter, useRoute } from 'vue-router'
export default function useMenuHooks() {
  const state = reactive({
    collapsed: false,
    selectedKeys: [],
    openKeys: [],
    preOpenKeys: [],
  })
  const store = useStore()
  state.collapsed = computed(() => store.state.layout.asiderCollapsed)
  state.openKeys = state.collapsed ? [] : state.preOpenKeys

  const router = useRouter()
  const route = useRoute()
  const handleMenuClick = ({ key }) => {
    router.push({ path: key })
  }

  watch(
    () => route.fullPath,
    () => {
      // 初始化 左侧菜单的展开与选中
      state.openKeys = [route.meta.openKeys]
      state.selectedKeys = [route.meta.selectedKeys]
    },
    {
      immediate: true,
    }
  )

  const handleOpenChange = (openKeys) => {
    state.openKeys = openKeys
  }
  const handleSelect = ({ selectedKeys }) => {
    state.selectedKeys = selectedKeys
  }

  return {
    ...toRefs(state),
    handleMenuClick,
    handleOpenChange,
    handleSelect,
  }
}
