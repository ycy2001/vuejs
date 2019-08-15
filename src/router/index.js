import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Index from '@/components/Index'
import Login from '@/components/Login'
import User from '@/components/User'
import Product from '@/components/Product'
import Bycar from '@/components/Bycar'
import Bycartwo from '@/components/Bycartwo'
import Address from '@/components/Address'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/index',
      name: 'Index',
      component: Index
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/user',
      name: 'User',
      component: User
    },
    {
      path: '/product',
      name: 'Product',
      component: Product
    },
    {
      path: '/bycar',
      name: 'Bycar',
      component: Bycar
    },
    {
      path: '/bycartwo',
      name: 'Bycartwo',
      component: Bycartwo
    },
    {
      path: '/address',
      name: 'Address',
      component: Address
    }
  ]
})
