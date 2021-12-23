<template>
  <Form
    ref="form"
    :model="modelValue"
    label-width="80px"
    :label-col="labelCol"
    :wrapper-col="wrapperCol"
    :rules="rules"
  >
    <FormItem
      v-for="(item, index) in localeConfig"
      :key="index"
      :label="item.label"
      :name="item.key"
    >
      <Select
        v-if="item.type && item.type === 'select'"
        v-model:value="values[item.key]"
        allowClear
        :options="item.options"
        :labelInValue="item.labelInValue"
        @change="(value, option) => selectChange(value, option, item)"
      ></Select>
      <Input v-else v-model:value="values[item.key]" />
    </FormItem>
  </Form>
</template>
<script>
import { ref } from 'vue'
import { Form, Input, Select } from 'ant-design-vue'
import useFormHooks from './hooks/useFormHooks'
const FormItem = Form.Item

export default {
  name: 'KKForm',
  components: {
    Form,
    FormItem,
    Input,
    Select,
  },
  props: {
    modelValue: Object,
    config: Array,
    rules: Object,
  },
  emits: ['emit:selectChange'],
  setup(props, { emit }) {
    const { labelCol, wrapperCol } = useFormHooks()
    const form = ref()
    const values = ref(props.modelValue)

    const localeConfig = ref(props.config)

    localeConfig.value.forEach((__) => {
      if (__.remoteOptions && __.remoteOptionsConfig) {
        __.remoteOptions().then((res) => {
          __.options = res.data.data.map((_) => {
            return {
              ..._,
              label: _[__.remoteOptionsConfig.label],
              value: _[__.remoteOptionsConfig.value],
            }
          })
        })
      }
    })

    const selectChange = (value, option, item) => {
      emit('emit:selectChange', { item, value, option })
    }

    return {
      labelCol,
      wrapperCol,
      form,
      values,
      localeConfig,
      selectChange,
    }
  },
}
</script>
