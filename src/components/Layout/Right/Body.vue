<template>
  <div class="content-container">
    <BreadCrumb mode="normal" />
    <div class="content-inner-container">
      <Card>
        <router-view></router-view>
      </Card>
    </div>
  </div>
</template>
<script>
import BreadCrumb from '@/components/BreadCrumb/'
import { Card } from 'ant-design-vue'
export default {
  name: '',
  components: {
    BreadCrumb,
    Card,
  },
}
</script>
<style lang="less">
.content-container {
  display: flex;
  flex-direction: column;
  flex: auto;
  .content-inner-container {
    // margin: 24px 24px 0;
    padding: 18px;
    background: #f5f7f9;
  }
}
</style>
