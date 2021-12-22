import { ref } from 'vue'
import { getJobDetailApi } from '@example/api/ci-view.js'
import { useRoute } from 'vue-router'
import { message } from 'ant-design-vue'
import { formatJson } from '@example/utils/tools'

export default function useStepsHooks() {
  const current = ref(0)
  const loading = ref(false)
  const initial = ref(0)
  const activeKey = ref(0)
  let jobLogDetailData = ref([])
  const route = useRoute()

  const renderSteps = () => {
    loading.value = true
    getJobDetailApi({ id: route.query.id })
      .then((res) => {
        jobLogDetailData.value =
          res?.data?.data?.logs.map((__) => {
            if (__.tag === 'k8s_logs') {
              return {
                ...__,
                record: formatJson(__.record),
              }
            } else {
              return __
            }
          }) ?? []
        initial.value = res?.data?.data?.logs?.length ?? 0

        loading.value = false
      })
      .catch((err) => {
        message.error(err?.message ?? 'error')
      })
  }
  renderSteps()

  const handleReload = () => {
    renderSteps()
  }

  const stepChange = (cur) => {
    current.value = cur
  }

  return {
    jobLogDetailData,
    initial,
    handleReload,
    loading,
    current,
    stepChange,
    activeKey,
  }
}
