<template>
  <div class="ci-view-repo-event-container">
    <Skeleton active :loading="loading">
      <div class="main-content-container-table">
        <Table
          :data-source="pageData"
          :columns="columns"
          rowKey="time"
          :pagination="pagination"
        >
          <template #bodyCell="{ column, record }">
            <template v-if="column.key === 'action'">
              <span class="table-columns-action-container">
                <span @click="toCIDetail(record)">详情</span>
              </span>
              <span class="table-columns-action-container">
                <Popconfirm
                  title="是否要删除CI?"
                  ok-text="是"
                  cancel-text="否"
                  @confirm="handleDeleteCI(record)"
                >
                  <span>删除</span>
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
import usetoCIDetail from './hooks/usetoCIDetail'
import useDelete from './hooks/useDelete'

export default defineComponent({
  name: 'ci-list',
  components: {
    Table,
    Popconfirm,
    Skeleton,
  },
  setup() {
    const { pageData, columns, getPageData, loading, pagination } =
      usePageData()

    const { toCIDetail } = usetoCIDetail()

    const { handleDeleteCI } = useDelete(getPageData)

    return {
      pageData,
      columns,
      toCIDetail,
      handleDeleteCI,
      loading,
      pagination,
    }
  },
})
</script>
<style lang="less"></style>
