<template>
  <div>
     <x-header>图文咨询</x-header>
      <div class="img-list">
        <div class="cate">
          <ul id="imgsul">
            <li><span>全部</span></li>
            <li @click="headletext(item.id)" v-for="(item ,index) in imgstext " :key="index">
              <span>{{item.title}}</span>
            </li>
          </ul>
        </div>
        <div class="img-list-box">
          <ul id="imgsul">
            <li v-for="(item2,index) in imgsdata" :key="index">
              <router-link :to='`/imgDetail/${item2.id}`'>
                  <img :src="item2.img_url" :alt="item2.title">
              </router-link>
              <p>
                <span class="title">{{item2.zhaiyao}}</span>
              </p>
            </li>
          </ul>
        </div>
      </div>
  </div>
</template>
<script>
import { XHeader } from 'vux'
import { imgstop, imgclassify } from '@/api'
export default {
  components: {
    XHeader
  },
  data () {
    return {
      imgstext: [],
      imgsdata: [],
      id: 0
    }
  },
  created () {
    this.init()
    this.init2()
  },
  methods: {
    init () {
      imgstop()
        .then(res => {
          this.imgstext = res.message
          // 给ul设置宽度
          // 计算宽度
          let w = this.imgstext.length * 70 + 'px'
          document.getElementById('imgsul').style.width = w
        })
    },
    init2 () {
      imgclassify(this.id)
        .then(res => {
          this.imgsdata = res.message
        })
    },
    // 点击
    headletext (id) {
      this.id = id
      this.init2()
    }
  }
}
</script>
<style lang="scss" scoped>
  .img-list {
    margin-bottom: 55px;
  }
  .cate {
    max-width: 100%;
    margin: 0;
    overflow-x:auto;
    overflow-y: hidden;
    font-size: 14px;
    ul {
      padding-left: 10px;
      margin: 5px 0;
      li {
        list-style: none;
        display: inline-block;
        padding: 0 0 0 5px;
        span {
          color:#0094ff;
        }
      }
    }
  }
  .img-list-box {
    ul {
      padding: 0;
      li {
        list-style: none;
        position: relative;
      }
    }
    p {
      font-size: 14px;
      color: #fff;
      position: absolute;
      bottom: 0px;
      left: 0px;
      background-color: rgba(0,0,0,0.4);
      .title {
        font-weight: bold;
      }
    }
    img {
      width: 100%;
    }
  }

  image[lazy=loading] {
    width: 100%;
    margin: auto;
  }
</style>
