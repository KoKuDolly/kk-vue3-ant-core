<template>
  <div class="ci-view-repo-event-container">
    <Skeleton active :loading="loading">
      <div class="main-content-container-table">
        <Table :data-source="pageData" :columns="columns" rowKey="time">
          <template #bodyCell="{ column, record }">
            <template v-if="column.key === 'action'">
              <span class="table-columns-action-container">
                <span @click="toJobDetail(record)">查看Job详情</span>
              </span>
              <span class="table-columns-action-container">
                <Popconfirm
                  title="是否要删除Job?"
                  ok-text="是"
                  cancel-text="否"
                  @confirm="handleDeleteJob(record)"
                >
                  <span>删除Job</span>
                </Popconfirm>
              </span>
            </template>
          </template>
        </Table>
      </div>
    </Skeleton>
  </div>
</template>
<script>
import { defineComponent } from 'vue'
import { Table, Popconfirm, Skeleton } from 'ant-design-vue'
import usePageData from './hooks/usePageData'
// import RenderIcon from '@/components/renderIcon/'·
import usetoJobDetail from './hooks/usetoJobDetail'
import useDelete from './hooks/useDelete'

export default defineComponent({
  name: 'repoEvent',
  components: {
    Table,
    Popconfirm,
    Skeleton,
  },
  setup() {
    const { pageData, columns, getPageData, loading } = usePageData()

    const { toJobDetail } = usetoJobDetail()

    const { handleDeleteJob } = useDelete(getPageData)

    return {
      pageData,
      columns,
      toJobDetail,
      handleDeleteJob,
      loading,
    }
  },
})
</script>
<style lang="less"></style>
