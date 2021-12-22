<template>
  <div class="full-screen-container" @click="toggleFullScreen">
    <RenderIcon data="CompressOutlined" title="退出全屏" v-if="isFullScreen" />
    <RenderIcon data="ExpandOutlined" title="进入全屏" v-else />
  </div>
  <!-- <video class="my-video"></video> -->
</template>
<script>
import RenderIcon from '@/components/renderIcon/'
import { ref } from '@vue/reactivity'
export default {
  name: 'fullScreen',
  components: { RenderIcon },
  setup() {
    const isFullScreen = ref(false)
    const toggleVariable = () => {
      isFullScreen.value = !isFullScreen.value
    }
    const toggleScreen = () => {
      if (!document.fullscreenElement) {
        document.documentElement.requestFullscreen()
      } else {
        if (document.exitFullscreen) {
          document.exitFullscreen()
        }
      }
      //   const elem = document.querySelector('.my-video')
      //   if (!document.fullscreenElement) {
      //     elem
      //       .requestFullscreen()
      //       .then()
      //       .catch((err) => console.log(err.message, err.name))
      //   } else {
      //     document.exitFullscreen()
      //   }
    }

    const toggleFullScreen = () => {
      toggleVariable()
      toggleScreen()
    }
    return {
      isFullScreen,
      toggleFullScreen,
    }
  },
}
</script>
<style>
.full-screen-container {
  float: right;
  margin-right: 8px;
}
</style>
