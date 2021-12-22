<template>
  <div class="logo-container">
    <img :src="src" />
  </div>
</template>

<script>
import { computed, defineComponent } from 'vue'
import { useStore } from 'vuex'

export default defineComponent({
  name: 'logo',
  setup() {
    const store = useStore()
    const src = computed(() => store.state.layout.logo)

    return {
      src,
    }
  },
})
</script>
<style lang="less">
.logo-container {
  background: #001529;
  height: 64px;
  line-height: 64px;
  text-align: center;
  img {
    height: 80%;
    vertical-align: middle;
  }
}
</style>
