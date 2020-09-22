import Vue from 'vue'
import Router from 'vue-router'
import defaultPage from '@/layout/default.vue'
import blankPage from '@/layout/blank'
import Index from '@/page/index.vue'
import goodsList from '@/page/goodsList.vue'
import changeCity from '@/page/changeCity.vue'
import login from '@/page/login.vue'
import register from '@/page/register.vue'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'defaultPage',
      component: defaultPage,
      redirect: '/index',
      children: [
        {
          path: '/index',
          name: 'index',
          component: Index
        },
        {
          path: '/s/:name',
          name: 'goods',
          component: goodsList
        },
        {
          path: '/changeCity',
          name: 'changeCity',
          component: changeCity
        }
      ]
    },
    {
      path: '/blank',
      name: 'blankPage',
      component: blankPage,
      children: [
        {
          path: '/login',
          name: 'login',
          component: login
        },
        {
          path: '/register',
          name: 'register',
          component: register
        }
      ]
    }

  ],
  mode: 'history'
})
