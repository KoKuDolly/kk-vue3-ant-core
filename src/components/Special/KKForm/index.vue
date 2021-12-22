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
      v-for="(item, index) in config"
      :key="index"
      :label="item.label"
      :name="item.key"
    >
      <Select
        v-if="item.type && item.type === 'select'"
        v-model:value="values[item.key]"
        allowClear
        :options="item.options"
        labelInValue
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
  setup(props) {
    const { labelCol, wrapperCol } = useFormHooks()
    const form = ref()
    const values = ref(props.modelValue)

    return {
      labelCol,
      wrapperCol,
      form,
      values,
    }
  },
}
</script>
