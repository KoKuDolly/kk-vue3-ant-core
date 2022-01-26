<template>
  <div id="kk-code-mirror"></div>
</template>
<script>
import { onMounted } from 'vue'
import Codemirror from 'codemirror'
import 'codemirror/mode/yaml/yaml.js'
import 'codemirror/lib/codemirror.css'
import 'codemirror/theme/ayu-dark.css'

export default {
  name: 'kk-code-mirror',
  props: {
    modelValue: {
      Type: String,
    },
  },
  setup(props) {
    onMounted(() => {
      const container = document.querySelector('#kk-code-mirror')

      Codemirror(container, {
        value: props.modelValue,
        mode: {
          name: 'yaml',
        },
        theme: 'ayu-dark',
        tabSize: 2,
        readOnly: true,
      })
    })
  },
}
</script>
<style>
#kk-code-mirror .CodeMirror {
  border: 1px solid #eee;
  height: 500px;
  overflow: scroll;
  padding: 10px 10px 10px 20px;
}
</style>
