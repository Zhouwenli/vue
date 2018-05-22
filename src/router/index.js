import Vue from 'vue'
import Router from 'vue-router'
import Index from '../components/index/Index.vue'
import List from '../components/index/List.vue'
import Home from '../components/Home.vue'
import Login from '../components/Login.vue'
import IndexPage from '@/components/IndexPage'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'IndexPage',
      component: IndexPage,
      children: [
        {
          // 当 /user/:id/profile 匹配成功，
          // UserProfile 会被渲染在 User 的 <router-view> 中
          path: '/',
          component: Index
        },{
        	path:'/list',
        	component:List
        }
      ]
    },
    {
    path: '/home',
    name: 'home',
    component: Home
  	},
  	{
    path: '/login',
    name: 'login',
    component: Login
  	},
  ]
})
