<template>
  <div>
      <XHeader>图文介绍</XHeader>
      <div>
        <h3 class="desc-title">{{goodslist.title}}</h3>
        <div class="desc-content" v-html="goodslist.content"></div>
      </div>
  </div>
</template>
<script>
import { XHeader } from 'vux'
import { goodstxt } from '@/api'
export default {
  components: {
    XHeader
  },
  data () {
    return {
      id: this.$route.params.id,
      goodslist: {}
    }
  },
  created () {
    this.init()
  },
  methods: {
    init () {
      goodstxt(this.id)
        .then(res => {
          this.goodslist = res.message[0]
        })
    }
  }
}
</script>
<style lang="scss" scoped>
img {
    display: block;
}

.goods-desc {
  margin-top: 50px;
  h3 {
    font-weight: bold;
    color: #26a2ff;
    font-size: 16px;
    margin-bottom: 5px;
  }
  .desc-content {
    font-size: 14px;
  }
}
</style>
