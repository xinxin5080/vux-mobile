<template>
  <div>
     <x-header>图文详情</x-header>
     <div class="img-detail">
       <div>
         <h3 class="img-title">{{describe.title}}</h3>
         <p class="img-info">
           <span class="time">{{describe.add_time}}</span>
           <span>{{describe.click}}次点击</span>
           <span>xxxxx</span>
         </p>
       </div>
       <ul>
         <li>
           <vue-preview :slides="imgs">
           </vue-preview>
         </li>
       </ul>
       <div class="content" v-html="describe.content"></div>
     </div>
     <publish></publish>
  </div>
</template>
<script>
import { XHeader } from 'vux'
import { imgmin, imgdescribe } from '@/api'
import publish from '@/components/publish'
export default {
  components: {
    XHeader,
    publish
  },
  data () {
    return {
      id: this.$route.params.id,
      imgs: [],
      describe: []
    }
  },
  created () {
    this.init()
    this.init2()
  },
  methods: {
    init () {
      imgmin(this.id)
        .then(res => {
          // 给返回的数据遍历添加数组,达到符合图片预览要求的数组
          res.message.map(item => {
            item.msrc = item.src
            item.w = 600
            item.h = 400
          })
          this.imgs = res.message
        })
    },
    init2 () {
      imgdescribe(this.id)
        .then(res => {
          this.describe = res.message[0]
        })
    }
  }
}
</script>
<style lang="scss">
  img {
    width: 100%;
    height: 100%;
  }
  li > div > div{
    display: flex;
    flex-wrap: wrap;
    &>figure{
      width: 33.33%;
    }
  }
</style>

<style lang="scss" scoped>
.img-detail {
  // margin-top: 40px;
  margin-bottom: 55px;

  .img-title {
    font-size: 16px;
    font-weight: bold;
  }
  .img-info {
    display: flex;
    justify-content: space-around;
    color: #26a2ff;
    font-size: 14px;
  }
  .content {
    font-size: 14px;
  }
}
</style>
