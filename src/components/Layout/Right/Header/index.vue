<template>
  <div
    class="header-container"
    :style="{ width: `calc(100% - ${left}px)`, left: `${left}px` }"
  >
    <ToggleIcon />
    <div class="header-container-content">
      <slot name="fullScreen"></slot>
      <slot name="switchTheme"></slot>
    </div>
    <div class="header-container-right">
      <UserCenter />
    </div>
  </div>
</template>
<script>
import { defineComponent, computed } from 'vue'
import { useStore } from 'vuex'
import UserCenter from './UserCenter.vue'
import ToggleIcon from './ToggleIcon.vue'

export default defineComponent({
  components: { UserCenter, ToggleIcon },
  setup() {
    const store = useStore()
    const left = computed(() => store.state.layout.left)
    return {
      left,
    }
  },
})
</script>
<style lang="less">
.header-container {
  border-bottom: 1px solid #ccc;
  .header-container-content {
    display: inline-block;
    overflow: hidden;
    flex: 1;
    // display: flex;
    // flex: auto;
    // flex-direction: row;
    .full-screen-container {
      // flex: 0 0 auto;
      // display: flex;
      // flex-direction: row;
      .render-icon {
        flex: 1;
        width: 32px;
        text-align: center;
        font-size: 20px;
        cursor: pointer;
      }
    }
  }
  .header-container-right {
    height: 64px;
    float: right;
  }
}
</style>
