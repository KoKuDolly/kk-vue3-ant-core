import { onMounted, ref } from 'vue'
import { getJobListApi } from '@example/api/ci-view.js'
import { message } from 'ant-design-vue'

export default function usePageData() {
  const loading = ref(false)

  const pageData = ref([])

  const getPageData = async () => {
    loading.value = true
    let rst = null
    try {
      rst = await getJobListApi()
      pageData.value = rst?.data?.data ?? []
      loading.value = false
    } catch (error) {
      message.error(error?.message ?? 'error')
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
      title: 'k8s_job_status',
      dataIndex: 'k8s_job_status',
      key: 'k8s_job_status',
    },
    // {
    //   title: '运行',
    //   dataIndex: 'process',
    //   key: 'process',
    // },
    // {
    //   title: '提交',
    //   dataIndex: 'submit',
    //   key: 'submit',
    // },
    // {
    //   title: '消息',
    //   dataIndex: 'message',
    //   key: 'message',
    // },
    // {
    //   title: '持续时间',
    //   dataIndex: 'time',
    //   key: 'time',
    // },
    // {
    //   title: '完成',
    //   dataIndex: 'complete',
    //   key: 'complete',
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
    getPageData,
    loading,
  }
}
