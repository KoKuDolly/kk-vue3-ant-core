import { ref } from 'vue'
import YAML from 'yaml'

export default function useUpload() {
  // names yaml读取的containers的name集合字符串
  const names = ref('')
  const yamlJson = ref(null)
  const fileLists = ref([])

  const beforeUpload = (file) => {
    const reader = new FileReader()
    reader.readAsText(file)
    reader.onerror = (e) => {
      console.log('error' + e)
    }
    reader.onload = () => {
      const yamlStr = reader.result
      yamlJson.value = YAML.parse(yamlStr)
      yamlJson.value?.spec?.template?.spec?.containers?.forEach((__) => {
        __.image = ''
      })
      names.value = yamlJson.value?.spec?.template?.spec?.containers
        ?.map((__) => __.name)
        ?.join(',')
    }
    return false
  }

  const uploadChange = ({ fileList }) => {
    fileLists.value = fileList.slice(-1)
  }
  return {
    beforeUpload,
    names,
    yamlJson,
    uploadChange,
    fileLists,
  }
}
