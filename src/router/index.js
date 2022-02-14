import { createRouter, createWebHistory } from 'vue-router'

function getRouter(store, routes) {
  const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes,
  })

  if (store && store._actions['router/init']) {
    store.dispatch('router/init')
  }

  router.beforeEach((to) => {
    if (store.getters.sessionId) {
      if (to.name === 'login') {
        return '/'
      }
    } else {
      if (to.name !== 'login') {
        return '/login'
      }
    }
  })

  router.afterEach(() => {
    window.scrollTo(0, 0)
  })

  return router
}

export default getRouter
