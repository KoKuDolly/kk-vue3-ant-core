import { createApp } from 'vue'
import App from './App.vue'
// 引入覆盖后的globalConfig
import '@example/config/global.config.js'
// 引入自己项目的store 和 router
import routerFun from './router/'
import store from './store'
import KK from '@/'
import '@/styles/index.less'

const app = createApp(App)
const router = routerFun(store)

app.use(router).use(store).use(KK).mount('#app')
