import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './style/iconfont.scss'
import './style/reset.scss'
import VuePreview from 'vue-preview'
Vue.use(VuePreview)
Vue.filter('filterTime', function (times) {
  let time = new Date(times)
  let y = time.getFullYear()
  let m = time.getMonth() + 1
  let d = time.getDate()
  return y + '/' + m + '/' + d
})
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
