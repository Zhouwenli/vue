import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'
import SwiperImg from '@/components/SwiperImg'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'SwiperImg',
      component: SwiperImg
    }
  ]
})
