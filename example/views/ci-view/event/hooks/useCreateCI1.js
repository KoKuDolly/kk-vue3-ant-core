import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { addCIApi } from '@example/api/ci-view.js'
import { responseCodeSuccessOrFailed } from '@/plugins/responseCodeFilter.js'
import authMap from '@example/utils/authMap'

export default function useCreateCI1(
  modalVisible,
  modalConfig,
  kkform,
  getPageData
) {
  const CIFormData = ref({
    ci_cd: 'Y',
  })

  const handleAddCI = (record) => {
    const { id } = record
    modalVisible.value = true
    modalConfig.title = '运行CI'
    modalConfig.type = 'runCI'
    modalConfig.showFooter = true
    modalConfig.submit = () => submit(id)
    modalConfig.spin.tip = '运行CI中...'
  }

  const router = useRouter()

  const submit = (id) => {
    kkform.value.form.validate().then(() => {
      modalConfig.loading = true
      modalConfig.spin.spinning = true
      const ci_cd = CIFormData.value.ci_cd
      const params = {
        id,
        ci_cd,
      }
      addCIApi(params).then((res) => {
        modalConfig.loading = false
        modalConfig.spin.spinning = false
        modalVisible.value = false
        if (responseCodeSuccessOrFailed(res) !== 1) {
          if (ci_cd === 'N') {
            router.push({ name: authMap.CI.name })
          } else if (ci_cd === 'Y') {
            router.push({ name: authMap.CD.name })
          }
        } else {
          getPageData('noop')
        }
      })
    })
  }

  const CIFormConfig = [
    {
      label: '是否自动执行CD',
      key: 'ci_cd',
      type: 'radioGroup',
      options: [
        {
          label: '是',
          value: 'Y',
        },
        {
          label: '否',
          value: 'N',
        },
      ],
    },
  ]
  const CIFormRules = {}

  return {
    CIFormData,
    handleAddCI,
    CIFormConfig,
    CIFormRules,
  }
}
