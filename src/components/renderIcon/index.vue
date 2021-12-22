<template>
  <div class="render-icon">
    <PieChartOutlined v-if="data === 'PieChartOutlined'" />
    <DesktopOutlined v-if="data === 'DesktopOutlined'" />
    <InboxOutlined v-if="data === 'InboxOutlined'" />
    <MailOutlined v-if="data === 'MailOutlined'" />
    <AppstoreOutlined v-if="data === 'AppstoreOutlined'" />
    <MenuFoldOutlined v-if="data === 'MenuFoldOutlined'" />
    <MenuUnfoldOutlined v-if="data === 'MenuUnfoldOutlined'" />
    <CopyOutlined v-if="data === 'CopyOutlined'" />
    <RedoOutlined v-if="data === 'RedoOutlined'" title="刷新" />
    <!-- 全屏 -->
    <CompressOutlined v-if="data === 'CompressOutlined'" />
    <!-- 非全屏 -->
    <ExpandOutlined v-if="data === 'ExpandOutlined'" />
    <!-- 新增 -->
    <PlusOutlined v-if="data === 'PlusOutlined'" />
    <!-- 编辑 -->
    <EditOutlined v-if="data === 'EditOutlined'" />
    <!-- 删除 -->
    <DeleteOutlined v-if="data === 'DeleteOutlined'" />
    <!-- home -->
    <HomeOutlined v-if="data === 'HomeOutlined'" />
    <UploadOutlined v-if="data === 'UploadOutlined'" />
  </div>
</template>
<script>
import {
  PieChartOutlined,
  DesktopOutlined,
  InboxOutlined,
  MailOutlined,
  AppstoreOutlined,
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  CopyOutlined,
  RedoOutlined,
  CompressOutlined,
  ExpandOutlined,
  PlusOutlined,
  EditOutlined,
  DeleteOutlined,
  HomeOutlined,
  UploadOutlined,
} from '@ant-design/icons-vue'
export default {
  name: 'RenderIcon',
  props: {
    data: String,
  },
  components: {
    PieChartOutlined,
    DesktopOutlined,
    InboxOutlined,
    MailOutlined,
    AppstoreOutlined,
    MenuFoldOutlined,
    MenuUnfoldOutlined,
    CopyOutlined,
    RedoOutlined,
    CompressOutlined,
    ExpandOutlined,
    PlusOutlined,
    EditOutlined,
    DeleteOutlined,
    HomeOutlined,
    UploadOutlined,
  },
  setup() {},
}
</script>
<style>
.render-icon {
  display: inline-block;
}
</style>
