<template>
  <div>
     <x-header>购物车</x-header>
     <div class="cart">
       <!--  -->
     <div class="empty-cart" v-if="mycart.length===0">
       <img src="" alt="" class="empty-cart-img">
       <div class="empty-cart-text">购物车还是空的</div>
       <div class="btn">去逛逛</div>
     </div>
     <!--  -->
       <!-- 类控制器 icon-checkbox-marked-circ(选中)
      icon-checkbox-blank-circle-outline(未选中) -->
      <!-- 通过select的状态来判断 -->
     <div class="cart-container" v-else v-for="(item,index) in mycart" :key="index">
       <span class="iconfont toogle" :class="item.state===true?'icon-checkbox-marked-circ': 'icon-checkbox-blank-circle-outline'" @click="iconbnt(index)"></span>
       <div class="item-detail">
         <img :src="item.img" alt="">
         <div class="item-info">
           <h3>{{item.title}}</h3>
           <div class="pay">
             <div class="pay-price">￥{{item.price}}</div>
             <div class="edit-quantity">
               <!-- - -->
               <p class="operate-btn iconfont icon-minus" @click="subtract(index)">
               </p>
               <p class="btn-input">{{item.num}}</p>
               <!-- + -->
               <p class="operate-btn iconfont icon-plus" @click="add(index)"></p>
             </div>
           </div>
         </div>
       </div>
       </div>
     <div class="cart-footer">
       <div class="cart-footer-left">
         <span class="iconfont toogle" :class="all?'icon-checkbox-marked-circ': 'icon-checkbox-blank-circle-outline'"></span>
         <span>全选</span>
        </div>
       <div class="cart-footer-center">
         <span>合计：</span>
         <span class="total-price">￥{{total}}</span>
        </div>
       <div class="cart-footer-right">
         <span class="goto-pay">结算({{num}})</span>
       </div>
     </div>
     </div>
  </div>
</template>
<script>
import { XHeader } from 'vux'
export default {
  components: {
    XHeader
  },
  data () {
    return {
      mycart: ''
    }
  },
  created () {
    this.init()
    // 触发vux
    // this.$store.commit('num')
  },
  methods: {
    init () {
      this.mycart = JSON.parse(localStorage.getItem('mygoods') || '[]')
    },
    // 状态
    iconbnt (index) {
      this.mycart[index].state = !this.mycart[index].state
    },
    // 减
    subtract (index) {
      this.mycart[index].num -= 1
      if (this.mycart[index].num <= 0) {
        // 将当前的清除
        this.mycart.splice(1, 1)
      }
    },
    // 加
    add (index) {
      this.mycart[index].num += 1
    }
  },
  // 离开页面的时候将数据保存
  beforeDestroy () {
    localStorage.setItem('mygoods', JSON.stringify(this.mycart))
  },
  computed: {
    // 全选
    all () {
      let check = true
      // 遍历找到state
      this.mycart.map(item => {
        if (item.state === false) {
          check = false
        }
      })
      return check
    },
    // 合计
    total () {
      let alltotal = ''
      // 遍历
      this.mycart.map(item => {
        alltotal = item.price * item.num
      })
      return alltotal
    },
    // 数量
    num () {
      let numto = 0
      this.mycart.map(item => {
        numto += item.num
      })
      return numto
    }
  }
}
</script>
<style lang="scss" scoped>
.cart {
  height: 320px;
  // margin-top: 45px;
  font-size: 14px;
  .empty-cart {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-end;
    height: 100%;
    .empty-cart-img {
      height: 90px;
      width: 90px;
    }
    .empty-cart-text {
      font-size: 20px;
      color: #999;
      padding: 15px 0;
    }
    .btn {
      font-size: 20px;
      padding: 15px 55px;
      text-align: center;
      margin: 0 auto;
      border-radius: 10px;
      background: #ed601b;
      color: #fff;
    }
  }
  .cart-container {
    display: flex;
    align-items: center;
    margin: 5px;
    padding: 8px 10px;
    border: 1px solid #eeeeee;
    border-radius: 20px;
    .toogle {
      width: 20px;
      height: 20px;
      line-height: 20px;
      font-size: 20px;
    }
    .icon-checkbox-marked-circ {
      color: #ff5500;
    }
    .icon-checkbox-blank-circle-outline {
      color: #666666;
    }
  }
  .item-detail {
    display: flex;
    flex: 1;
    img {
      margin: 2px 0 2px 5px;
      width: 90px;
      height: 90px;
    }
    .item-info {
      width: 100%;
      padding: 5px 10px;
      display: flex;
      flex-direction: column;
      justify-content: space-around;
      h3 {
        font-size: 16px;
        font-weight: 400;
      }
      .pay {
        display: flex;
        justify-content: space-between;
        .pay-price {
          color: #ff5500;
          font-weight: bold;
          line-height: 30px;
        }
        .edit-quantity {
          display: flex;
          height: 30px;
          line-height: 30px;
          .operate-btn {
            padding: 0 10px;
            font-size: 20px;
            color: #bababa;
          }
          .btn-minus {
            font-size: 14px;
          }
        }
      }
    }
  }
  .cart-footer {
    display: flex;
    justify-content: space-between;
    position: fixed;
    bottom: 0;
    left: 0;
    height: 50px;
    line-height: 50px;
    width: 100%;
    border-top: 1px solid #e7e7e7;
    background-color: #fff;
    .cart-footer-left {
      display: flex;
      justify-content: cneter;
      align-items: center;
      span {
        display: block;
        height: 50px;
        padding: 0 5px;
      }
    }
    .cart-footer-center {
      .total-price {
        color: #ff5500;
        font-weight: bold;
      }
    }
    .cart-footer-right {
      display: flex;
      flex-direction: column;
      padding: 0 20px;
      background-color: #ff5500;
      .goto-pay {
        color: #fff;
      }
    }
    .icon-checkbox-marked-circ {
      color: #ff5500;
    }
    .icon-checkbox-blank-circle-outline {
      color: #666666;
    }
  }
}
</style>
