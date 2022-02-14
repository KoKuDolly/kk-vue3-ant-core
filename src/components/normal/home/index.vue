<template>
  <div>home</div>
</template>
<script>
import requests from '../../../plugins/index'
export default {
  setup() {
    const { request } = requests
    request({
      url: '/api/kk/user/login/',
      method: 'post',
    })
      .then((res) => {
        console.log(res)
      })
      .catch((error) => {
        console.log(error)
      })
    return {}
  },
}
</script>
