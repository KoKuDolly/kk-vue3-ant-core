<template>
  <div class="toggole-icon-container" @click="toggleSlider">
    <RenderIcon v-if="!compoShrink" data="MenuFoldOutlined" />
    <RenderIcon v-else data="MenuUnfoldOutlined" />
  </div>
</template>
<script>
import { defineComponent, computed, ref } from 'vue'
import { useStore } from 'vuex'
import RenderIcon from '@/components/renderIcon/'

export default defineComponent({
  name: 'ToggoleIcon',
  components: {
    RenderIcon,
  },
  setup() {
    const store = useStore()
    const collapsed = computed(() => store.state.layout.asiderCollapsed)

    const compoShrink = ref(false)
    compoShrink.value = collapsed.value

    const toggleSlider = () => {
      compoShrink.value = !compoShrink.value
      store.commit('layout/TOGGLE_ASIDER', compoShrink.value)
    }

    return {
      compoShrink,
      toggleSlider,
    }
  },
})
</script>
<style lang="less">
.toggole-icon-container {
  display: inline-block;
  width: 64px;
  height: 64px;
  text-align: center;
  cursor: pointer;
  transition: all 0.2s ease-in-out;

  font-size: 20px;
}
</style>
