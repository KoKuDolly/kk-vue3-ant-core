import { ref } from 'vue'
import { addCdApi } from '@example/api/upload'
import { message } from 'ant-design-vue'
import YAML from 'yaml'

export default function useRunCd(modalVisible, modalConfig, canNextStep) {
  const cdFormData = ref({})
  const cdFormConfig = ref([])
  const yamlJson = ref(null)

  const catchYamlJson = (val) => {
    yamlJson.value = val
  }

  const submit = () => {
    const val = cdFormData.value

    const containers = yamlJson.value.spec.template.spec.containers
    const keys = Object.keys(val)
    containers.forEach((__) => {
      if (keys.includes(__.name)) {
        __.image = val[__.name].label
      }
    })

    const params = {
      name: yamlJson?.value?.metadata?.name ?? '',
      yaml_content: YAML.stringify(yamlJson.value),
      ids: Object.keys(val)
        .map((__) => val[__].value)
        .join(','),
    }

    addCdApi(params)
      .then((res) => {
        message.success(res?.data?.data?.msg ?? 'run cd successful')
        modalVisible.value = false
      })
      .catch((error) => {
        message.error(error?.message ?? 'error')
      })
  }
  const handleRunCd = () => {
    modalVisible.value = true
    modalConfig.title = '运行CD'
    modalConfig.type = 'runCd'
    modalConfig.showFooter = true
    modalConfig.submit = submit
  }

  const catchNames = (name) => {
    // console.log(name)
    addCdApi({ name })
      .then((res) => {
        // console.log(res)
        if (res.data.data.data === null) {
          return message.error(res?.data?.data?.error ?? 'error')
        }
        canNextStep.value = true
        const tmp = res?.data?.data

        Object.keys(tmp).forEach((__) => {
          // form data
          cdFormData.value[__] = {
            value: '',
            label: '',
          }
          // form config
          cdFormConfig.value.push({
            label: __,
            key: __,
            options: tmp[__].map((_) => ({
              ..._,
              label: `${_?.image ?? ''}:${_?.image_tag ?? ''}`,
              value: _.id,
            })),
            type: 'select',
            labelInValue: true,
            rules: [
              {
                required: true,
                message: `请选择${__}`,
                trigger: 'change',
              },
            ],
          })
        })
      })
      .catch((err) => {
        message.error(err?.message ?? 'error')
        canNextStep.value = true
      })
  }
  return {
    cdFormData,
    cdFormConfig,
    handleRunCd,
    catchNames,
    catchYamlJson,
  }
}
