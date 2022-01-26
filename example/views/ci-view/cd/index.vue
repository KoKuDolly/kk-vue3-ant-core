<template>
  <div class="ci-view-repo-event-container">
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
                <span @click="toCDDetail(record)">详情</span>
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
import { Table, Skeleton } from 'ant-design-vue'
import usePageData from './hooks/usePageData'
import usetoCDDetail from './hooks/usetoCDDetail'

export default defineComponent({
  name: 'cd-list',
  components: {
    Table,

    Skeleton,
  },
  setup() {
    const { pageData, columns, loading, pagination } = usePageData()

    const { toCDDetail } = usetoCDDetail()

    return {
      pageData,
      columns,
      toCDDetail,
      loading,
      pagination,
    }
  },
})
</script>
<style lang="less"></style>
