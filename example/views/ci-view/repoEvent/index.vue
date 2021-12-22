<template>
  <div class="ci-view-repo-event-container">
    <Skeleton active :loading="loading">
      <div class="main-content-container-table">
        <Table :data-source="pageData" :columns="columns" rowKey="time">
          <template #bodyCell="{ column, record }">
            <template v-if="column.key === 'action'">
              <span class="table-columns-action-container">
                <span @click="handleCheckEvent(record)">查看Event</span>
              </span>
              <span class="table-columns-action-container">
                <span @click="handleEditEvent(record)">编辑Event</span>
              </span>
              <span class="table-columns-action-container">
                <Popconfirm
                  title="是否要新增Job?"
                  ok-text="是"
                  cancel-text="否"
                  @confirm="handlAddJob(record)"
                >
                  <span>新增Job</span>
                </Popconfirm>
              </span>
              <span class="table-columns-action-container">
                <span @click="handleRunCd(record)">运行Cd</span>
              </span>
            </template>
          </template>
        </Table>
      </div>
    </Skeleton>
    <KKModal :modalConfig="modalConfig" v-model:visible="modalVisible">
      <KKModalDetail
        v-if="modalConfig.type === 'checkRepoEvent'"
        v-model="checkEventFormData"
        :config="checkEventConfig"
      />
      <KKForm
        v-if="modalConfig.type === 'editRepoEvent'"
        ref="kkform"
        v-model="editEventFormData"
        :config="editEventFormConfig"
        :rules="editEventRules"
      />
      <template v-if="modalConfig.type === 'runCd'">
        <Steps size="small" :current="currentStep">
          <Step title="从文件读取yaml"></Step>
          <Step title="选择对应的image"></Step>
        </Steps>
        <div
          class="steps-content steps-content-form"
          v-show="currentStep === 0"
        >
          <KKUpload
            @emit:names="catchNames"
            @emit:yamlJson="catchYamlJson"
            @emit:fileListLength="catchFileListLength"
          />
        </div>
        <div class="steps-content" v-show="currentStep === 1">
          <KKForm ref="kkform" v-model="cdFormData" :config="cdFormConfig" />
        </div>
      </template>
      <template #footer v-if="modalConfig.type === 'runCd'">
        <Button type="primary" @click="prevStep" v-if="currentStep === 1"
          >上一步</Button
        >
        <Button
          type="primary"
          @click="nextStep"
          v-if="currentStep === 0"
          :disabled="!canNextStep"
          >下一步</Button
        >
        <Button @click="modalVisible = false">{{
          modalConfig.cancelText
        }}</Button>
        <Button
          type="primary"
          @click="modalConfig.submit"
          v-if="currentStep === 1"
          >{{ modalConfig.confirmText }}</Button
        >
      </template>
    </KKModal>
  </div>
</template>
<script>
import { defineComponent, ref } from 'vue'
import { Table, Popconfirm, Skeleton, Steps, Button } from 'ant-design-vue'
import KKModal from '@/components/Special/KKModal/'
import KKForm from '@/components/Special/KKForm/'
import KKModalDetail from '@/components/Special/KKModalDetail/'
import KKUpload from '@/components/Special/KKUpload/'
import useTableData from './hooks/useTableData'
import useModal from './hooks/useModal'
import useCheckEvent from './hooks/useCheckEvent'
import useEditEvent from './hooks/useEditEvent'
import useCreateJob from './hooks/useCreateJob'
import useRunCd from './hooks/useRunCd'
import useSteps from './hooks/useSteps'

const Step = Steps.Step

export default defineComponent({
  name: 'repoEvent',
  components: {
    Table,
    // Tooltip,
    Popconfirm,
    Skeleton,
    Steps,
    Step,
    Button,
    KKUpload,
    // RenderIcon,
    KKModal,
    KKForm,
    KKModalDetail,
  },
  setup() {
    const { pageData, columns, loading, getPageData } = useTableData()

    const kkform = ref()
    const { modalVisible, modalConfig } = useModal()

    const { checkEventFormData, checkEventConfig, handleCheckEvent } =
      useCheckEvent(modalVisible, modalConfig)

    const { handlAddJob } = useCreateJob()

    const {
      editEventFormData,
      editEventFormConfig,
      editEventRules,
      handleEditEvent,
    } = useEditEvent(modalVisible, modalConfig, kkform, getPageData)

    // steps
    const {
      currentStep,
      canNextStep,
      nextStep,
      prevStep,
      catchFileListLength,
    } = useSteps(modalVisible)

    const { handleRunCd, catchNames, cdFormData, cdFormConfig, catchYamlJson } =
      useRunCd(modalVisible, modalConfig, canNextStep)

    return {
      // table
      pageData,
      columns,
      // loading
      loading,
      // form $refs
      kkform,
      // modal
      modalVisible,
      modalConfig,
      // check event
      checkEventFormData,
      checkEventConfig,
      handleCheckEvent,
      // add job
      handlAddJob,
      // edit event
      editEventFormData,
      editEventFormConfig,
      editEventRules,
      handleEditEvent,
      // run cd
      handleRunCd,
      catchNames,
      cdFormData,
      cdFormConfig,
      catchYamlJson,
      // step
      currentStep,
      nextStep,
      prevStep,
      canNextStep,
      catchFileListLength,
    }
  },
})
</script>
<style lang="less">
.steps-content {
  margin-top: 20px;
}

.steps-content-form {
  margin-left: 80px;
}
</style>
