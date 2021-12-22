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
        <Steps :current="current" size="small" @change="stepChange">
          <template v-for="(item, index) in jobLogDetailData" :key="item.id">
            <Step :title="item.tag" :disabled="initial < index"></Step>
          </template>
        </Steps>
        <template v-for="(item, index) in jobLogDetailData" :key="item.id">
          <Collapse v-model:activeKey="activeKey" v-if="index === current">
            <CollapsePanel :header="item.tag">
              <AceEditor v-model="item.record" />
            </CollapsePanel>
          </Collapse>
        </template>
      </Skeleton>
    </div>
  </div>
</template>
<script>
import { defineComponent } from 'vue'
import { Steps, Collapse, Skeleton } from 'ant-design-vue'
import useStepsHooks from './hooks/useStepsHooks'
import AceEditor from '@/components/AceEditor/'
import RenderIcon from '@/components/renderIcon/'

const Step = Steps.Step
const CollapsePanel = Collapse.Panel

export default defineComponent({
  name: 'repoEventDetail',
  components: {
    Steps,
    Step,
    Collapse,
    CollapsePanel,
    Skeleton,
    AceEditor,
    RenderIcon,
  },
  setup() {
    const {
      jobLogDetailData,
      initial,
      handleReload,
      loading,
      current,
      stepChange,
      activeKey,
    } = useStepsHooks()
    return {
      jobLogDetailData,
      initial,
      handleReload,
      loading,
      current,
      stepChange,
      activeKey,
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
