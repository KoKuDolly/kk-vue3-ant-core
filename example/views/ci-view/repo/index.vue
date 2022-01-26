<template>
  <div class="ci-view-container">
    <div class="main-content-container-buttons">
      <Button type="primary" @click="handleAddRepo">新增Repo</Button>
    </div>
    <Skeleton active :loading="loading">
      <div class="main-content-container-table">
        <Table
          :data-source="pageData"
          :columns="columns"
          rowKey="id"
          :pagination="pagination"
        >
          <template #bodyCell="{ column, record }">
            <template v-if="column.key === 'action'">
              <span class="table-columns-action-container">
                <span @click="handleCheck(record)">详情</span>
              </span>
              <span class="table-columns-action-container">
                <span @click="handleEditRepo(record)">编辑</span>
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
        v-if="modalConfig.type === 'editRepo'"
        ref="kkform"
        v-model="editRepoFormData"
        :config="editRepoFormConfig"
        :rules="editRepoRules"
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
import useEditRepo from './hooks/useEditRepo'

export default defineComponent({
  name: 'repo-list',
  components: {
    Button,
    Table,
    Skeleton,
    KKModal,
    KKForm,
    KKModalDetail,
  },
  setup() {
    const { pageData, columns, loading, pagination, getPageData } =
      useTableData()

    const kkform = ref()
    const { modalVisible, modalConfig } = useModal()

    const {
      createRepoFormData,
      createRepoFormConfig,
      createRepoRules,
      handleAddRepo,
      catchSelected,
    } = useCreateRepo(modalVisible, modalConfig, kkform, getPageData)

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

    const {
      editRepoFormData,
      editRepoFormConfig,
      editRepoRules,
      handleEditRepo,
    } = useEditRepo(modalVisible, modalConfig, kkform, getPageData)
    return {
      // table
      pageData,
      columns,
      loading,
      pagination,
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
      // edit repo
      editRepoFormData,
      editRepoFormConfig,
      editRepoRules,
      handleEditRepo,
    }
  },
})
</script>
<style lang="less"></style>
