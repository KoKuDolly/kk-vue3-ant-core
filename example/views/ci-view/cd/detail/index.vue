<template>
  <div class="ci-view-repo-event-detail-container">
    <div class="operation-container">
      <RenderIcon
        data="RedoOutlined"
        class="reload-icon"
        @click="handleReload"
      />
    </div>
    <div class="step-container">
      <Skeleton active :loading="loading">
        <KKCodeMirror v-model="cdDetailData.data" />
      </Skeleton>
    </div>
  </div>
</template>
<script>
import { defineComponent } from 'vue'
import { Skeleton } from 'ant-design-vue'
import useStepsHooks from './hooks/useStepsHooks'
import RenderIcon from '@/components/renderIcon/'
import KKCodeMirror from '@/components/Special/KKCodeMirror/'

export default defineComponent({
  name: 'cd-detail',
  components: {
    Skeleton,
    RenderIcon,
    KKCodeMirror,
  },
  setup() {
    const { handleReload, loading, activeKey, cdDetailData } = useStepsHooks()
    return {
      handleReload,
      loading,
      activeKey,
      cdDetailData,
    }
  },
})
</script>
<style lang="less">
.ci-view-repo-event-detail-container {
  .step-container {
    margin: 0 0 20px 0;
  }
  .operation-container {
    margin-bottom: 20px;
    .reload-icon {
      text-align: right;
      .anticon.anticon-redo {
        cursor: pointer;
      }
    }
  }
}
</style>
