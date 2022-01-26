<template>
  <template v-for="(item, index) in config" :key="index">
    <div class="kk-modal-detail kk-modal-detail-column">
      <label class="kk-modal-detail-column-label">{{ item.label }}</label>
      <span class="kk-modal-detail-column-content">{{
        modelValue[item.key]
      }}</span>
    </div>
  </template>
</template>
<script>
export default {
  name: 'KKModalDetail',
  props: {
    config: Array,
    modelValue: Object,
  },
  setup() {},
}
</script>
<style lang="less">
.kk-modal-detail-column {
  word-wrap: break-word;
  display: flex;
  flex-direction: row;
  .kk-modal-detail-column-label {
    &::after {
      content: '：';
      margin: 0 4px 0 2px;
    }
    display: inline-block;
    // width: 120px;
    flex: 2;
    text-align: right;
    padding-right: 8px;
  }
  .kk-modal-detail-column-content {
    flex: 5;
    word-break: break-all;
    // word-wrap: break-word;
    overflow-wrap: break-word;
    color: rgba(32, 30, 30, 0.8);
  }
}
</style>
