import Vue from 'vue'
import App from './App.vue'
import router from './router'

import '@/core'

if(location.search && location.search.indexOf('console=true')>-1) {
  new VConsole()
}

Vue.prototype.isMobile = navigator.userAgent.match(/(phone|pad|pod|iPhone|iPod|ios|iPad|Android|Mobile|BlackBerry|IEMobile|MQQBrowser|JUC|Fennec|wOSBrowser|BrowserNG|WebOS|Symbian|Windows Phone)/i)

Vue.prototype.isWechat = navigator.userAgent.toLowerCase().match(/micromessenger/i)=="micromessenger"

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
