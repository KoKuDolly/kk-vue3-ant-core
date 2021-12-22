<template>
  <div class="right-main-container" :style="{ paddingLeft: `${left}px` }">
    <Header>
      <template #fullScreen>
        <FullScreen />
      </template>
    </Header>
    <Body />
    <Footer />
  </div>
</template>
<script>
import { computed } from 'vue'
import { useStore } from 'vuex'
import Header from './Header/'
import Body from './Body.vue'
import Footer from './Footer.vue'
import FullScreen from '@/components/fullScreen/'

export default {
  name: 'Content',
  components: {
    Header,
    Body,
    Footer,
    FullScreen,
  },
  setup() {
    const store = useStore()
    const left = computed(() => store.state.layout.left)

    return {
      left,
    }
  },
}
</script>
<style lang="less"></style>
