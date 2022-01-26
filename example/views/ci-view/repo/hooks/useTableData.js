import { onMounted, ref } from 'vue'
import { getRepoApi } from '@example/api/ci-view.js'
import isPageChanged from '@example/utils/isPageChanged.js'

export default function useTableData() {
  const loading = ref(false)
  const pageData = ref([])
  const currentPage = ref(1)
  const pageSize = ref(10)
  const currentPageNum = ref(0)

  const pageChange = (page, size) => {
    currentPage.value = page
    pageSize.value = size
    getPageData('pagechange')
  }

  const pagination = {
    showSizeChanger: false,
    pageSizeOptions: ['10', '20', '30', '40', '50'],
    total: 0,
    pageSize: 10,
    current: 1,
    onChange: pageChange,
  }

  const getPageData = async (operationType) => {
    // 拦截页码统一处理
    isPageChanged({
      operationType,
      currentPageNum,
      currentPage,
      pageSize,
      pagination,
    })

    loading.value = true
    let rst

    const params = {
      pageSize: pageSize.value,
      currentPage: currentPage.value,
    }
    rst = await getRepoApi(params)
    pageData.value = rst?.data?.data ?? []

    currentPageNum.value = pageData.value.length

    pagination.current = currentPage.value
    pagination.pageSize = pageSize.value
    pagination.total = rst?.data?.count ?? 0
    pagination.showTotal = () => `总共 ${pagination.total} 条`

    loading.value = false
  }

  onMounted(getPageData('noop'))

  const columns = [
    {
      title: '序号',
      customRender({ index }) {
        return (pagination.current - 1) * pagination.pageSize + index + 1
      },
    },
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
    // {
    //   title: '上次持续时间',
    //   dataIndex: 'btime',
    //   key: 'btime',
    // },
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
    pagination,
    getPageData,
  }
}
