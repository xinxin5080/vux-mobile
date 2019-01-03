<template>
  <div class="home">
    <!-- 轮播图 -->
    <swiper :list="dome_list" auto ></swiper>
    <!-- 图标 -->
    <ul class="fonts-ul">
      <li v-for="(item,index) in navList" :key="index" @click="jumpTo(item.urlName)">
        <img :src="item.imgurl" alt="">
        <p>{{item.title}}</p>
      </li>
    </ul>
    <!-- 底部栏 -->
    <tabbar class="tabbar">
      <tabbar-item>
        <i slot="icon" class="iconfont icon-home" ></i>
        <span slot="label">首页</span>
      </tabbar-item>
      <tabbar-item show-dot>
        <i slot="icon" class="iconfont icon-weibiaoti2fuzhi12" ></i>
        <span slot="label">会员</span>
      </tabbar-item>
      <tabbar-item selected link="/component/demo" badge="2">
       <i slot="icon" class="iconfont icon-gouwuche" ></i>
        <span slot="label">购物车</span>
      </tabbar-item>
      <tabbar-item >
       <i slot="icon" class="iconfont icon-xiazai17" ></i>
        <span slot="label">搜索</span>
      </tabbar-item>
    </tabbar>

  </div>
</template>
<script>
import { Swiper, Tabbar, TabbarItem } from 'vux'
export default {
  components: {
    Swiper,
    Tabbar,
    TabbarItem
  },
  data () {
    return {
      dome_list: [{
        url: 'javascript:',
        img: require('../assets/imgs/1.jpg'),
        title: ''
      }, {
        url: 'javascript:',
        img: require('../assets/imgs/2.jpg'),
        title: ''
      }, {
        url: 'javascript:',
        img: require('../assets/imgs/3.jpg'),
        title: ''
      }],
      // src图片的渲染,数据要用模型 require,不然会被当成字符串
      navList: [
        { imgurl: require('../assets/imgs/menu01.png'), title: '新闻资讯', urlName: 'newsList' },
        { imgurl: require('../assets/imgs/menu02.png'), title: '图片分享', urlName: 'instagram' },
        { imgurl: require('../assets/imgs/menu03.png'), title: '商品购买', urlName: 'goodslist' },
        { imgurl: require('../assets/imgs/menu04.png'), title: '留言反馈', urlName: '' },
        { imgurl: require('../assets/imgs/menu05.png'), title: '视频专区', urlName: '' },
        { imgurl: require('../assets/imgs/menu06.png'), title: '反馈我们', urlName: '' }
      ]
    }
  },
  methods: {
    jumpTo (urlName) {
      console.log(123)
      this.$router.push({ name: urlName })
    }
  }
}
</script>
<style lang="scss" scoped>
.home{
  .fonts-ul{
    display: flex;
    flex-wrap: wrap;
    li{
      width: 33.3%;
      text-align: center;
      margin-top: 10px;
      img{
        width: 60px;
        height: 60px;
      }
    }
  }
}
.tabbar{
  position: fixed
}
</style>
