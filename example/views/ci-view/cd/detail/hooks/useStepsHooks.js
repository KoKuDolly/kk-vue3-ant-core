import { reactive, ref } from 'vue'
import { checkCDListApi } from '@example/api/ci-view.js'
import { useRoute } from 'vue-router'
import { formatJson } from '@example/utils/tools'

export default function useStepsHooks() {
  const loading = ref(false)
  const activeKey = ref(0)
  const cdDetailData = reactive({
    data: '',
    name: '',
  })
  const route = useRoute()

  const renderSteps = () => {
    loading.value = true
    checkCDListApi({ id: route.query.id }).then((res) => {
      const data = res?.data?.data?.yaml_content ?? ''
      cdDetailData.data = formatJson(data)
      cdDetailData.name = res?.data?.data?.name ?? ''
      loading.value = false
    })
  }
  renderSteps()

  const handleReload = () => {
    renderSteps()
  }

  return {
    handleReload,
    loading,
    activeKey,
    cdDetailData,
  }
}
