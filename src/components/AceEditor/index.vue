<template>
  <div>
    <v-ace-editor
      v-model:value="content"
      @init="editorInit"
      :options="{ useWorker: true }"
      lang="sh"
      theme="terminal"
      style="height: 300px; width: 100%"
      class="kk-v-ace-editor"
      :readonly="true"
    />
  </div>
</template>
<script>
import { ref } from 'vue'
import { VAceEditor } from 'vue3-ace-editor'

import 'ace-builds/src-min-noconflict/mode-sh'
import 'ace-builds/src-min-noconflict/theme-terminal'

import ace from 'ace-builds'
import workerJsonUrl from 'file-loader?esModule=false!ace-builds/src-noconflict/worker-json.js'
ace.config.setModuleUrl('ace/mode/json_worker', workerJsonUrl)

export default {
  name: 'AceEditor',
  components: { VAceEditor },
  props: {
    modelValue: String,
  },
  setup(props) {
    const content = ref(props.modelValue)
    const editorInit = (e) => {
      console.log('init', e)
    }
    return {
      content,
      editorInit,
    }
  },
}
</script>
