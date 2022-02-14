<template>
  <Modal
    :title="modalConfig.title"
    v-model:visible="childVisible"
    width="30%"
    :label-col="labelCol"
    :wrapper-col="wrapperCol"
    :destroyOnClose="true"
    :footer="modalConfig.showFooter ? void 0 : null"
  >
    <Spin :spinning="modalConfig.spin.spinning" :tip="modalConfig.spin.tip">
      <slot></slot>
    </Spin>

    <template #footer>
      <slot name="footer">
        <span class="Modal-footer">
          <Button @click="childVisible = false">{{
            modalConfig.cancelText
          }}</Button>
          <Button
            type="primary"
            @click="modalConfig.submit"
            :loading="modalConfig.loading"
            >{{ modalConfig.confirmText }}</Button
          >
        </span>
      </slot>
    </template>
  </Modal>
</template>
<script>
import { ref, watch } from 'vue'
import { Modal, Button, Spin } from 'ant-design-vue'
import useModal from './hooks/useModal'

export default {
  name: 'KKModal',
  components: {
    Modal,
    Button,
    Spin,
  },
  props: {
    modalConfig: Object,
    visible: Boolean,
  },
  emits: ['update:visible'],
  setup(props, { emit }) {
    const { labelCol, wrapperCol } = useModal()

    const childVisible = ref(false)

    watch(
      () => props.visible,
      (val) => {
        childVisible.value = val
      }
    )

    watch(childVisible, (val) => {
      emit('update:visible', val)
    })

    return {
      labelCol,
      wrapperCol,
      childVisible,
    }
  },
}
</script>
