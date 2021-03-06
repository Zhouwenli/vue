// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
// import VueRouter from 'vue-router'
import router from './router'
import {AlertPlugin,ToastPlugin} from 'vux'
import vueResource from 'vue-resource'
import flex from './assets/js/flexible'
import common from './assets/css/common.css'

Vue.config.productionTip = false
Vue.use(AlertPlugin)
Vue.use(ToastPlugin)
Vue.use(vueResource)

// Vue.use(VueRouter)
Vue.prototype.$msgbox=function(title,msg){
	this.$vux.alert.show({
		title:title,
		value:msg
	})
}
// const router = new VueRouter({
//   mode: 'history',
//   router: router
// })
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
