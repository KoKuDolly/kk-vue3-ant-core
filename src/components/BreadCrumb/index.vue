<template>
  <div class="bread-crumb-container">
    <template v-if="mode === 'router'">
      <Breadcrumb separator="/" :routes="breadCrumbData" @click="click">
        <template #itemRender="{ route, routes, paths }">
          <span v-if="routes.indexOf(route) === routes.length - 1">
            {{ route.meta.name }}
          </span>
          <router-link v-else :to="paths[1]">
            {{ route.meta.name }}
          </router-link>
        </template>
      </Breadcrumb>
    </template>
    <template v-else>
      <Breadcrumb>
        <template #separator><span>></span></template>
        <template v-for="(item, index) in breadData" :key="index">
          <BreadCrumbItem v-if="item.path === '/'">
            <a :href="item.path">
              <RenderIcon data="HomeOutlined" />
            </a>
          </BreadCrumbItem>
          <BreadCrumbItem
            v-else-if="item.path !== '/' && index < breadData.length - 1"
          >
            <a :href="item.path">{{ item.meta.title }}</a>
          </BreadCrumbItem>
          <BreadCrumbItem v-else>
            {{ item.meta.title }}
          </BreadCrumbItem>
        </template>
      </Breadcrumb>
    </template>
  </div>
</template>
<script>
import { defineComponent, ref, watch } from 'vue'
import { Breadcrumb } from 'ant-design-vue'
import RenderIcon from '@/components/renderIcon/'

import useNormalBreadCrumb from './hooks/useNormalBreadCrumb'
import useRouterBreadCrumb from './hooks/useRouterBreadCrumb'

import { useRoute } from 'vue-router'

const BreadCrumbItem = Breadcrumb.Item

export default defineComponent({
  name: 'BreadCrumb',
  components: {
    Breadcrumb,
    BreadCrumbItem,
    RenderIcon,
  },
  props: {
    mode: {
      Type: String,
      default: 'router',
      validator: (prop) => {
        return ['router', 'normal'].indexOf(prop) > -1
      },
    },
  },
  setup(props) {
    let breadCrumbData = ref([])

    const { normalBreadCrumbData } = useNormalBreadCrumb()
    const { routerBreadCrumbData } = useRouterBreadCrumb()

    if (props.mode === 'router') {
      breadCrumbData = routerBreadCrumbData
    } else {
      breadCrumbData = normalBreadCrumbData
    }

    const route = useRoute()
    const breadData = ref([])

    watch(
      () => route.fullPath,
      () => {
        breadData.value = route.matched
      },
      {
        immediate: true,
      }
    )
    return {
      breadCrumbData,
      breadData,
    }
  },
})
</script>
<style lang="less">
.bread-crumb-container {
  display: inline-block;
  margin-left: 18px;
}
</style>
