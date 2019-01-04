<template>
  <div>
    <XHeader>商品列表</XHeader>
    <div class="goods-list">
    <ul class="ul">
      <router-link :to='`/Goodsdetails/${item.id}`' tag="li" class="goods-li" v-for="(item,index) in goodsdata" :key="index">
        <div class="goods-container">
          <img :src="item.img_url" alt="">
          <h4 class="h4">{{item.title}}</h4>
          <div class="goods-info">
            <div class="price-info">
              <span class="price-new">{{item.sell_price}}</span>
              <span class="price-old">{{item.market_price}}</span>
            </div>
            <div class="sell-info">
              <span class="sell-status">剩余{{item.stock_quantity}}</span>
              <span class="sell-leftcount">{{item.zhaiyao}}</span>
            </div>
          </div>
        </div>
      </router-link>
    </ul>
    </div>
  </div>
</template>
<script>
import { XHeader } from 'vux'
import { goodslist } from '@/api'
export default {
  components: {
    XHeader
  },
  data () {
    return {
      goodsdata: []
    }
  },
  created () {
    this.init()
  },
  methods: {
    init () {
      goodslist(1)
        .then(res => {
          console.log(res)
          this.goodsdata = res.message
        })
    }
  }
}
</script>
<style lang="scss" scoped>
.goods-list {
  background-color: #f4f4f4;
  .ul {
    display: flex;
    flex-wrap: wrap;
    font-size: 10px;
  }
  .h4 {
    font-size: 12px;
    font-weight: bold;
    height: 32px;
    // 多行文本超出省略号
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 2;
    overflow: hidden;
  }
  .goods-li {
    width: 50%;
    box-sizing: border-box;
    padding-top: 5px;
    display: flex;
    justify-content: column;
    .goods-container {
      width: 100%;
      background-color: #fff;
      padding: 5px;
      display: flex;
      flex-direction: column;
      justify-content: center;
    }
    .price-info {
      display: flex;
      justify-content: space-between;
      .price-new {
        color: red;
      }
      .price-old {
        text-decoration: line-through;
      }
    }
    .sell-info {
      display: flex;
      justify-content: space-between;
    }
  }

  .goods-li:nth-child(2n+1) {
    padding-right: 5px;
  }
  .goods-li:nth-child(2n) {
    padding-left: 5px;
  }
}
</style>
