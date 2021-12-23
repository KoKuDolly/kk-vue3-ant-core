import RenderMenuItems from '@/components/Layout/Asider/AsiderMenu/vue/components/renderMenuItems.vue'
import AceEditor from '@/components/AceEditor'
import BreadCrumb from '@/components/BreadCrumb/'
import fullScreen from '@/components/fullScreen/'
import Layout from '@/components/Layout/'
import normal from '@/components/normal/'
import renderIcon from '@/components/renderIcon/'
import Special from '@/components/Special/'
import switchTabPage from '@/components/switchTabPage/'
import switchTheme from '@/components/switchTheme/'

import plugins from '@/plugins/'
import routerMap from '@/router/router.map.js'

import store from '@/store/'
import router from '@/router/'

const request = plugins.request

const Right = Layout.Right
const Footer = Layout.Footer
const Body = Layout.Body
const Header = Layout.Header
const ToggleIcon = Layout.ToggleIcon
const UserCenter = Layout.UserCenter
const NotFound404 = normal.NotFound404
const Home = normal.Home
const Login = normal.Login
const KKForm = Special.KKForm
const KKModal = Special.KKModal
const KKModalDetail = Special.KKModalDetail
const KKUpload = Special.KKUpload

export const components = {
  RenderMenuItems,
  AceEditor,
  BreadCrumb,
  fullScreen,
  Layout,
  Right,
  Footer,
  Body,
  Header,
  ToggleIcon,
  UserCenter,
  NotFound404,
  Home,
  Login,
  renderIcon,
  KKForm,
  KKModal,
  KKModalDetail,
  KKUpload,
  switchTabPage,
  switchTheme,
}

export {
  RenderMenuItems,
  AceEditor,
  BreadCrumb,
  fullScreen,
  Layout,
  Right,
  Footer,
  Body,
  Header,
  ToggleIcon,
  UserCenter,
  NotFound404,
  Home,
  Login,
  renderIcon,
  KKForm,
  KKModal,
  KKModalDetail,
  KKUpload,
  switchTabPage,
  switchTheme,
  request,
  store,
  router,
  routerMap,
}

function installComponents(app) {
  // console.log(app)
  Object.keys(components).forEach((key) => {
    app.component(key, components[key])
  })
}

export default {
  install(app) {
    installComponents(app)
  },
  request,
  store,
  router,
  routerMap,
}
