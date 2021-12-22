<template>
  <div class="asider-menu-container">
    <Menu
      mode="inline"
      theme="dark"
      :inline-collapsed="collapsed"
      v-model:openKeys="openKeys"
      v-model:selectedKeys="selectedKeys"
      @click="handleMenuClick"
      @openChange="handleOpenChange"
      @select="handleSelect"
    >
      <RenderMenuItems :data="menuData" />
    </Menu>
  </div>
</template>

<script>
import { Menu } from 'ant-design-vue'
import RenderMenuItems from './components/renderMenuItems.vue'
import useRouterHooks from '@/components/hooks/useRouterHooks'
import useMenuHooks from '../hooks/useMenuHooks'

export default {
  name: 'AsiderMenu',
  components: {
    Menu,
    RenderMenuItems,
  },
  setup() {
    const { menuData } = useRouterHooks()
    const {
      collapsed,
      openKeys,
      selectedKeys,
      handleMenuClick,
      handleOpenChange,
      handleSelect,
    } = useMenuHooks(menuData)

    return {
      collapsed,
      openKeys,
      selectedKeys,
      handleMenuClick,
      menuData,
      handleOpenChange,
      handleSelect,
    }
  },
}
</script>
<style lang="less">
.asider-menu-container {
  width: auto;
  height: calc(100vh - 64px);
  overflow-y: auto;
  // background: #1d1e23;
  background: #001529;

  position: static;
}
</style>
