import Vue from 'vue'
import Router from 'vue-router'
import Reacommend from 'components/reacommend/reacommend'
import Singer from 'components/singer/singer'
import Search from 'components/search/search'
import Rank from 'components/rank/rank'
import SingerDetail from 'components/singer-detail/singer-detail'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path:'/',
      redirect: '/reacommend'
     },
    {
     path:'/reacommend',
     component: Reacommend
    },
    {
      path:'/singer',
      component: Singer,
      children : [
        {
          path : ':id',
          component : SingerDetail
        }
      ]
     },
     {
      path:'/search',
      component: Search
     },
     {
      path:'/rank',
      component: Rank
     },
  ]
})
