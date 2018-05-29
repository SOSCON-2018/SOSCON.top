import Vue from 'vue'
import Router from 'vue-router'
import home from '@/components/home'
import about from '@/components/about'
import aboutUs from '@/components/aboutUs'
import apply from '@/components/apply'
import community from '@/components/community'
import agenda from '@/components/agenda'
import news from '@/components/news'
import thanks from '@/components/thanks'
import individual_sponser from '@/components/individual_sponser'

Vue.use(Router)

export default new Router({
  mode: 'history',
  scrollBehavior (to, from, savedPosition) {
    if (to.hash) {
      return {
        selector: to.hash
      }
    }
  },
  routes: [
    {
      path: '/',
      name: 'home',
      component: home,
      meta:{
        Num:0
      }
    },
    {
      path: '/aboutUs',
      name: '/aboutUs',
      component:aboutUs,
      meta:{
        Num:1
      }
    },
    {
      path: '/apply',
      name: '/apply',
      component:apply,
      meta:{
        Num:1
      }
    },
    {
      path: '/individual_sponser',
      name: '/individual_sponser',
      component:individual_sponser,
      meta:{
        Num:1
      }
    },
    {
      path: '/community',
      name: '/community',
      component:community,
      meta:{
        Num:1
      }
    },
    {
      path: '/thanks',
      name: '/thanks',
      component:thanks,
      meta:{
        Num:1
      }
    },
    {
      path:'/agenda',
      name:'/agenda',
      component:agenda,
      meta:{
        Num:1
      }
    },
    {
      path:'/news',
      name:'/news',
      component:news,
      meta:{
        Num:1
      }
    },
  ]
})


