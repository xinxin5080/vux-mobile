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
    },
    {
      path: '/goodslist',
      name: 'goodslist',
      component: () => import(/* webpackChunkName: "goodslist" */ './views/goods/Goodslist.vue')
    },
    {
      path: '/goodsdetails/:id',
      name: 'goodsdetails',
      component: () => import(/* webpackChunkName: "goodsdetails" */ './views/goods/Goodsdetails.vue')
    },
    {
      path: '/goodstext/:id',
      name: 'goodstext',
      component: () => import(/* webpackChunkName: "goodsdetails" */ './views/goods/Goodstext.vue')
    },
    {
      path: '/goodspublish/:id',
      name: 'goodspublish',
      component: () => import(/* webpackChunkName: "goodspublish" */ './views/goods/Goodspublish.vue')
    }
  ]
})
