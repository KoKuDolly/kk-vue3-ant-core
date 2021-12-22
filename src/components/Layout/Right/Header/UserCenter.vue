<template>
  <div class="user-center-container">
    <Dropdown>
      <span class="el-dropdown-link"> admin<DownOutlined /> </span>
      <template #overlay>
        <Menu>
          <MenuItem>退出登录</MenuItem>
        </Menu>
      </template>
    </Dropdown>
  </div>
</template>
<script>
import { defineComponent } from 'vue'
import { Dropdown, Menu } from 'ant-design-vue'
import { DownOutlined } from '@ant-design/icons-vue'
const MenuItem = Menu.Item

export default defineComponent({
  name: 'UserCenter',
  components: { Dropdown, DownOutlined, Menu, MenuItem },
  setup() {},
})
</script>
<style lang="less">
.user-center-container {
  width: auto;
  padding: 0 12px;
  display: inline-block;
  height: 64px;
  text-align: center;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
}
</style>
