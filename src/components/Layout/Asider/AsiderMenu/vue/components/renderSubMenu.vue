<template>
  <SubMenu :key="data.path">
    <template #icon v-if="data.meta.icon">
      <RenderIcon :data="data.meta.icon" />
    </template>
    <template v-if="data.meta.title" #title>{{ data.meta.title }}</template>
    <RenderMenuItems :data="data.children" />
  </SubMenu>
</template>
<script>
import { Menu } from 'ant-design-vue'
import RenderIcon from '@/components/renderIcon/'
// 这里引用 无法解析该组件
// import RenderMenuItems from './renderMenuItems.vue'
const SubMenu = Menu.SubMenu

export default {
  name: 'RenderSubMenu',
  components: {
    SubMenu,
    // RenderMenuItems,
    RenderIcon,
  },
  props: {
    data: Object,
  },
  setup() {},
}
</script>
