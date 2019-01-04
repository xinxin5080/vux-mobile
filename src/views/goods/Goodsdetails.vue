<template>
  <div>
    <x-header>商品详情</x-header>
    <!-- <mt-swipe >
      <mt-swipe-item><img src="" alt=""></mt-swipe-item>
    </mt-swipe> -->
    <!-- 轮播图 -->
    <swiper :list="imgs" class="swiperbox" height="300px" auto></swiper>
    <div>
      <h4 class="goods-title">{{describe.title}}</h4>
      <p class="goods-price">
        <span class="market-price">{{describe.market_price}}</span>
        <span class="sell-price">{{describe.sell_price}}</span>
     </p>
    </div>
    <div class="goods-info">
      <h4 class="goods-desc">商品参数</h4>
      <p>{{describe.goods_no}}</p>
      <p>{{describe.stock_quantity}}</p>
      <p>{{describe.add_time | filterTime}}</p>
    </div>
    <!-- <mt-button type="primary">图文介绍</mt-button>
    <mt-button type="danger">商品评论</mt-button> -->
      <x-button type="primary" @click.native="textbnt(describe.id)">图文介绍</x-button>
      <x-button type="warn" @click.native="publishbnt(describe.id)">商品评论</x-button>
    <div class="goods-footer">
      <div class="goods-footer-item contact"><span class="iconfont icon-kefu"></span><span>联系客服</span></div>
      <div class="goods-footer-item cart">
        <span class="iconfont icon-gouwuche"></span>
        <span>购物车</span>
        <span class="badge">{{$store.state.totalnum}}</span>
      </div>
      <div class="goods-footer-item add" @click="cartbnt"><span>加入购物车</span></div>
      <div class="goods-footer-item buy" @click="shopbnt"><span>立即购买</span></div>
    </div>
  </div>
</template>
<script>
import { XHeader, Swiper, XButton } from 'vux'
import { imgmin, goodsdescribe, goodscart } from '@/api'
export default {
  components: {
    XHeader,
    Swiper,
    XButton
  },
  data () {
    return {
      imgs: [],
      id: this.$route.params.id,
      describe: {},
      cart: {}
    }
  },
  mounted () {
    this.init()
    this.init2()
    this.$store.commit('num')
  },
  methods: {
    init () {
      imgmin(this.id)
        .then(res => {
          res.message.map(item => {
            item.img = item.src
            item.url = 'javascript:'
          })
          this.imgs = res.message
        })
    },
    init2 () {
      goodsdescribe(this.id)
        .then(res => {
          this.describe = res.message[0]
        })
      // 将购物需要的图片获取
      goodscart(this.id)
        .then(res => {
          this.cart = res.message[0]
        })
    },
    // 图文介绍
    textbnt (id) {
      this.$router.push({ name: 'goodstext', params: { id: id } })
    },
    // 评论
    publishbnt (id) {
      this.$router.push({ name: 'goodspublish', params: { id: id } })
    },
    // 购买
    shopbnt () {
      this.$router.push({ name: 'cart' })
    },
    // 加入购物车
    cartbnt () {
      // 1.0点击加入购物车,先判断又没当前这个商品
      // 获取本地存储的信息
      // JSON.parse() 方法用于将一个 JSON 字符串转换为对象
      // 如果[]不加""是空数组,JSON.parse无法转数组
      let mygoods = JSON.parse(localStorage.getItem('mygoods') || '[]')
      console.log(mygoods)
      // 通过findIndex查询中有无相同的id,有就返回当前id的索引
      // 无就返回-1
      let index = mygoods.findIndex(item =>
        item.id === parseInt(this.id)
      )
      if (index !== -1) {
      // 1.1有,就将数量+1
        mygoods[index].num += 1
        localStorage.setItem('mygoods', JSON.stringify(mygoods))
      } else {
        // 1.2没有,就将商品所需要的信息加进去
        // 状态,图片,标题,价格,数量,id以对象的形式保存在本地存储
        let tempObj = {
          state: true,
          img: this.cart.thumb_path,
          title: this.describe.title,
          price: this.describe.market_price,
          num: 1,
          id: this.describe.id
        }
        // 1.3将对象放进数组中
        mygoods.push(tempObj)
        // 1.4保存在本地,
        // JSON.stringify() 方法用于将 JavaScript 值转换为 JSON 字符串。
        localStorage.setItem('mygoods', JSON.stringify(mygoods))
      }
    }
  }
}
</script>
<style lang="scss" scoped>
.goods-detail {
  margin-bottom: 50px;
  padding: 0 10px;
}
.swiperbox {
  height: 300px;
  img {
    width: 90%;
  }
}

.goods-title {
  font-size: 16px;
  font-weight: bold;
  margin: 10px 0;
}
.goods-price {
  font-size: 14px;
  .market-price {
    text-decoration: line-through;
  }
  .sell-price {
    color: #e4393c;
  }
}

.goods-info {
  font-size: 14px;
   .goods-desc {
    margin-top: 10px;
    font-size: 16px;
    font-weight: bold;
  }
}

.goods-footer {
  display: flex;
  position: fixed;
  bottom: 0;
  left: 0;
  height: 50px;
  width: 100%;
  border-top: 1px solid #e7e7e7;
  background-color: #fff;
  .goods-footer-item {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
  .contact, .cart {
    width: 40%;
    font-size: 12px;
    position: relative;
  }
  .badge {
    position: absolute;
    top: 3%;
    left: 50%;
    width: 14px;
    height: 14px;
    border-radius: 7px;
    background-color: #e4393c;
    text-align: center;
    line-height: 14px;
    color: white;
  }
  .add, .buy {
    width: 60%;
    color: white;
    &>span {
      font-size: 20px;
    }
  }
  .add {
    background-color: #ff9600;
  }
  .buy {
    background-color: #e4393c;
  }
}
</style>
