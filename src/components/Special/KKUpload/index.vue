<template>
  <Upload
    :beforeUpload="beforeUpload"
    class="kk-upload"
    @change="uploadChange"
    v-model:fileList="fileLists"
  >
    <Button>
      <RenderIcon data="UploadOutlined" />
      Click to Upload
    </Button>
  </Upload>
</template>
<script>
import { Upload, Button } from 'ant-design-vue'
import RenderIcon from '@/components/renderIcon/'
import useUpload from './hooks/useUpload'
import { watch } from '@vue/runtime-core'

export default {
  name: 'KKUpload',
  components: {
    Upload,
    Button,
    RenderIcon,
  },
  emits: ['emit:names', 'emit:yamlJson', 'emit:fileListLength'],
  setup(props, { emit }) {
    const { beforeUpload, names, yamlJson, uploadChange, fileLists } =
      useUpload()

    watch(
      () => names.value,
      (val) => {
        emit('emit:names', val)
      }
    )

    watch(
      () => yamlJson.value,
      (val) => {
        emit('emit:yamlJson', val)
      }
    )

    watch(fileLists, (val) => {
      emit('emit:fileListLength', val.length)
    })

    return {
      beforeUpload,
      uploadChange,
      fileLists,
    }
  },
}
</script>
