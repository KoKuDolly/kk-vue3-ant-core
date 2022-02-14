import { onMounted, reactive, ref } from 'vue'
import { getCDListApi } from '@example/api/ci-view.js'
import isPageChanged from '@example/utils/isPageChanged.js'

export default function usePageData() {
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

  const pagination = reactive({
    showSizeChanger: false,
    pageSizeOptions: ['10', '20', '30', '40', '50'],
    total: 0,
    pageSize: 10,
    current: 1,
    onChange: pageChange,
    showTotal: () => {},
  })

  const getPageData = async (operationType) => {
    isPageChanged({
      operationType,
      currentPageNum,
      currentPage,
      pageSize,
      pagination,
    })
    loading.value = true
    let rst = null

    const params = {
      pageSize: pageSize.value,
      currentPage: currentPage.value,
    }
    rst = await getCDListApi(params)
    pageData.value = rst?.data?.data ?? []

    currentPageNum.value = pageData.value.length

    pagination.current = currentPage.value
    pagination.pageSize = pageSize.value
    pagination.total = rst?.data?.count ?? 0
    pagination.showTotal = () => `总共 ${pagination.total} 条`

    loading.value = false
  }

  onMounted(getPageData)

  const columns = [
    {
      title: '序号',
      customRender({ index }) {
        return (pagination.current - 1) * pagination.pageSize + index + 1
      },
    },
    {
      title: '名称',
      dataIndex: 'name',
      key: 'name',
    },
    {
      title: 'status',
      dataIndex: 'status',
      key: 'status',
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
    getPageData,
    loading,
    pagination,
  }
}
