import { ref, reactive } from 'vue'
export default function useModal() {
  const modalVisible = ref(false)
  const modalConfig = reactive({
    title: '新增',
    type: 'addRepo',
    cancelText: '取 消',
    confirmText: '确 定',
    showFooter: true,
    loading: false,
    spin: {
      spinning: false,
      tip: '',
    },
  })
  return {
    modalVisible,
    modalConfig,
  }
}
