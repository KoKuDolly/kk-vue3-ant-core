import { onMounted, ref } from 'vue'
import { getEventApi } from '@example/api/ci-view.js'
import { message } from 'ant-design-vue'

export default function useTableData() {
  const loading = ref(false)
  const pageData = ref([])
  const getPageData = async () => {
    loading.value = true
    let rst
    try {
      rst = await getEventApi()
      pageData.value = rst?.data?.data ?? []
      loading.value = false
    } catch (error) {
      message.error(error.message || 'error')
    }
  }

  onMounted(getPageData)

  const columns = [
    {
      title: '名称',
      dataIndex: 'name',
      key: 'name',
    },
    {
      title: '操作',
      key: 'action',
      width: 450,
    },
  ]

  return {
    pageData,
    columns,
    loading,
    getPageData,
  }
}
