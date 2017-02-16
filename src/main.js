// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import VueResource from 'vue-resource'
import MintUI from 'mint-ui'
import App from './App'
import router from './router'
import store from './store'
import {currency} from 'assets/js/currency.js'

import "assets/stylus/index.styl"
import "mint-ui/lib/style.css"
import "assets/css/animate.css"

Vue.use(MintUI)
Vue.use(VueResource)

Vue.filter('currency', currency)

const router_push_fn = router.push
const router_replace_fn = router.replace
router.push = function (...arr) {
  store.commit("set_next_path", true)
  router_push_fn.apply(router, arr)
}
router.replace = function (...arr) {
  store.commit("set_next_path", true)
  router_replace_fn.apply(router, arr)
}

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App }
})
