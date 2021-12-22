import { createApp } from 'vue'
import App from './App.vue'
// 引入自己项目的store 和 router
import routerMap from './router/'
// kk-vue3-ant-components-core
import KK from '../src/index'

const store = KK.store
const router = KK.router(routerMap)

const app = createApp(App)

app.use(router).use(store).use(KK).mount('#app')
