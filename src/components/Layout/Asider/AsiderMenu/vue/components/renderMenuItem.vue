<template>
  <MenuItem :key="data.meta.key" :title="data.meta.title">
    <template #icon v-if="data.meta.icon">
      <RenderIcon :data="data.meta.icon" />
    </template>
    <span>{{ data.meta.title }}</span>
  </MenuItem>
</template>
<script>
import { Menu } from 'ant-design-vue'
import RenderIcon from '@/components/renderIcon/'
const MenuItem = Menu.Item

export default {
  name: 'RenderMenuItem',
  components: { MenuItem, RenderIcon },
  props: {
    data: Object,
  },
  setup() {},
}
</script>
