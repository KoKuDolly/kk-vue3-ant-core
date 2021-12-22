<template>
  <div class="layout-container">
    <Asider />
    <Right />
  </div>
</template>
<script>
import Asider from './Asider/'
import Right from './Right/'
import { useStore } from 'vuex'
import { useRoute } from 'vue-router'
import { defineComponent } from 'vue'

export default defineComponent({
  components: {
    Asider,
    Right,
  },
  setup() {
    //  初始化layout
    const store = useStore()
    store.dispatch('layout/initLayout')
    // 初始化 菜单 和 面包屑
    const route = useRoute()
    // console.log(route)
    store.dispatch('router/generateRoutes', route.path)
  },
})
</script>
<style lang="less">
.layout-container {
  display: flex;
  flex-direction: row;
  flex: auto;
  background: #f5f7f9;
  .asider-container {
    width: 180px;
    min-width: 180px;
    max-width: 180px;
    flex: 0 0 180px;
    background: #1d1e23;
    box-shadow: 2px 0 6px rgb(0 21 41 / 35%);
    position: fixed;
    top: 0;
    left: 0;
    min-height: 100vh;
    transition: all 0.2s ease-in-out;
  }
  .right-main-container {
    overflow-x: hidden;
    padding-left: 180px;
    min-height: 100vh;
    transition: all 0.2s ease-in-out;
    display: flex;
    flex-direction: column;
    flex: auto;
    background: #f5f7f9;
  }
  .header-container {
    width: calc(100% - 180px);
    position: fixed;
    top: 0;
    right: 0;
    left: 180px;
    z-index: 11;
    display: flex;
    box-shadow: 0 1px 4px rgb(0 21 41 / 8%);
    transition: all 0.2s ease-in-out;
    height: 64px;
    line-height: 64px;
    display: flex;
    flex: 0 0 auto;
    background: #fff;
  }
  .content-container {
    padding-top: 64px;
    flex: auto;
  }
  .footer-container {
    margin: 48px 0 24px 0;
    padding: 0 16px;
    text-align: center;
    flex: 0 0 auto;
  }
}
</style>
