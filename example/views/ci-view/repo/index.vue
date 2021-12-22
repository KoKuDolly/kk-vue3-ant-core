<template>
  <div class="ci-view-container">
    <div class="main-content-container-buttons">
      <Button type="primary" @click="handleAddRepo">新增Repo</Button>
    </div>
    <Skeleton active :loading="loading">
      <div class="main-content-container-table">
        <Table :data-source="pageData" :columns="columns" rowKey="id">
          <template #bodyCell="{ column, record }">
            <template v-if="column.key === 'action'">
              <span class="table-columns-action-container">
                <span @click="handleCheck(record)">查看Repo</span>
              </span>
              <span class="table-columns-action-container">
                <span @click="handleAddEvent(record)">新增Event</span>
              </span>
            </template>
          </template>
        </Table>
      </div>
    </Skeleton>
    <KKModal :modalConfig="modalConfig" v-model:visible="modalVisible">
      <KKModalDetail
        v-if="modalConfig.type === 'checkRepo'"
        v-model="checkRepoFormData"
        :config="checkRepoConfig"
      />
      <KKForm
        v-if="modalConfig.type === 'addRepo'"
        ref="kkform"
        v-model="createRepoFormData"
        :config="createRepoFormConfig"
        :rules="createRepoRules"
        @emit:selectChange="catchSelected"
      />
      <KKForm
        v-if="modalConfig.type === 'addRepoEvent'"
        ref="kkform"
        v-model="createEventFormData"
        :config="createEventFormConfig"
        :rules="createEventRules"
      />
    </KKModal>
  </div>
</template>
<script>
import { defineComponent, ref } from 'vue'
import { Button, Table, Skeleton } from 'ant-design-vue'
import KKModal from '@/components/Special/KKModal/'
import KKForm from '@/components/Special/KKForm/'
import KKModalDetail from '@/components/Special/KKModalDetail/'
import useTableData from './hooks/useTableData'
import useModal from './hooks/useModal'
import useCreateRepo from './hooks/useCreateRepo'
import useCheckRepo from './hooks/useCheckRepo'
import useCreateEvent from './hooks/useCreateEvent'

export default defineComponent({
  components: {
    Button,
    Table,
    Skeleton,
    KKModal,
    KKForm,
    KKModalDetail,
  },
  setup() {
    const { pageData, columns, loading } = useTableData()

    const kkform = ref()
    const { modalVisible, modalConfig } = useModal()

    const {
      createRepoFormData,
      createRepoFormConfig,
      createRepoRules,
      handleAddRepo,
      catchSelected,
    } = useCreateRepo(modalVisible, modalConfig, kkform)

    const { checkRepoFormData, checkRepoConfig, handleCheck } = useCheckRepo(
      modalVisible,
      modalConfig
    )

    const {
      createEventFormData,
      createEventFormConfig,
      createEventRules,
      handleAddEvent,
    } = useCreateEvent(modalVisible, modalConfig, kkform)

    return {
      // table
      pageData,
      columns,
      loading,
      // form $refs
      kkform,
      // modal
      modalVisible,
      modalConfig,
      // check repo
      checkRepoFormData,
      checkRepoConfig,
      handleCheck,
      // add repo
      createRepoFormData,
      createRepoFormConfig,
      createRepoRules,
      handleAddRepo,
      catchSelected,
      // add event
      createEventFormData,
      createEventFormConfig,
      createEventRules,
      handleAddEvent,
    }
  },
})
</script>
<style lang="less"></style>
