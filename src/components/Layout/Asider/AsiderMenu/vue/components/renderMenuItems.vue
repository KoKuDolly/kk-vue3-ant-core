<template>
  <template v-for="(item, index) in data" :key="index">
    <template v-if="item.children && item.children.length">
      <RenderSubMenu :data="item" />
    </template>
    <template v-else>
      <RenderMenuItem :data="item" />
    </template>
  </template>
</template>
<script>
import RenderMenuItem from './renderMenuItem.vue'
import RenderSubMenu from './renderSubMenu.vue'
export default {
  name: 'RenderMenuItems',
  components: {
    RenderMenuItem,
    RenderSubMenu,
  },
  props: {
    data: Array,
  },
  setup() {},
}
</script>
