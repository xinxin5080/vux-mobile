import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/newsList',
      name: 'newsList',
      component: () => import(/* webpackChunkName: "newsList" */ './views/news/NewsList.vue')
    },
    {
      path: '/newsdetails/:id',
      name: 'newsdetails',
      component: () => import(/* webpackChunkName: "newsdetails" */ './views/news/Newsdetails.vue')
    },
    {
      path: '/instagram',
      name: 'instagram',
      component: () => import(/* webpackChunkName: "instagram" */ './views/imgs/Instagram.vue')
    },
    {
      path: '/imgDetail/:id',
      name: 'imgDetail',
      component: () => import(/* webpackChunkName: "imgDetail" */ './views/imgs/ImgDetail.vue')
    }
  ]
})
