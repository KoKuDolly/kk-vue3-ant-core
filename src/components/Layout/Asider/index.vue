<template>
  <div
    class="asider-container"
    :style="{
      width: `${left}px`,
      minWidth: `${left}px`,
      maxWidth: `${left}px`,
      flex: `0 0 ${left}px`,
    }"
  >
    <Logo />
    <AsiderMenu />
  </div>
</template>
<script>
import { computed } from 'vue'
import { useStore } from 'vuex'
import Logo from './Logo.vue'
import AsiderMenu from './AsiderMenu/vue/'
export default {
  name: 'Asider',
  components: { Logo, AsiderMenu },
  setup() {
    const store = useStore()
    const left = computed(() => store.state.layout.left)
    return {
      left,
    }
  },
}
</script>
<style></style>

