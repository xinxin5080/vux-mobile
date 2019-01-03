import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './style/iconfont.scss'
import './style/reset.scss'
// import Vux from 'vux'
// Vue.use(Vux)
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
