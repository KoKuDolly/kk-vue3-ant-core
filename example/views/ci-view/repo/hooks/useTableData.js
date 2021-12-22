import { onMounted, ref } from 'vue'
import { getRepoApi } from '@example/api/ci-view.js'
import { message } from 'ant-design-vue'

export default function useTableData() {
  const loading = ref(false)
  const pageData = ref([])
  const getPageData = async () => {
    loading.value = true
    let rst
    try {
      rst = await getRepoApi()
      pageData.value = rst?.data?.data ?? []

      loading.value = false
    } catch (error) {
      pageData.value = rst?.data || [
        {
          id: 1,
          repo_name: 1,
        },
      ]
      message.error(error)
    }
  }

  onMounted(getPageData)

  const columns = [
    {
      title: '名称',
      dataIndex: 'repo_name',
      key: 'repo_name',
    },
    {
      title: '上次成功',
      dataIndex: 'last_success',
      key: 'dockerfile',
    },
    {
      title: '上次失败',
      dataIndex: 'last_failed',
      key: 'image',
    },
    {
      title: '上次持续时间',
      dataIndex: 'btime',
      key: 'btime',
    },
    {
      title: '操作',
      key: 'action',
      width: 240,
    },
  ]

  return {
    pageData,
    columns,
    loading,
  }
}
