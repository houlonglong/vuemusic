import 'babel-polyfill'
import Vue from 'vue'
import App from './App'
import fastclick from 'fastclick'
import VueLazyload from 'vue-lazyload'
fastclick.attach(document.body)
import router from './router'
import 'common/stylus/index.styl'
Vue.config.productionTip = false
import store from './store'
Vue.use(VueLazyload, {
  preLoad: 1.3,
  error: 'dist/error.png',
  loading: require('common/image/default.gif'),
  attempt: 1
})
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})
