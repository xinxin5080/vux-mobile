<template>
  <div>
    <headbtn headtitle="新闻详情"></headbtn>
    <!--  -->
    <div class="news-detail">
      <h1 class="news-title">{{newstext.title}}</h1>
      <p class="news-info">
        <span>{{newstext.add_time | filterTime}}</span>
        <span>{{newstext.click}}</span>
        <span>xxxx</span>
      </p>
    </div>
    <div class="news-content" v-html="newstext.content"></div>
    <!-- 评论 -->
    <publish></publish>
  </div>
</template>
<script>
import headbtn from '@/components/heads'
import publish from '@/components/publish'
import { newsdetails } from '@/api'

export default {
  components: {
    headbtn,
    publish
  },
  data () {
    return {
      newstext: {},
      id: this.$route.params.id
      // isyes: true,
      // textdata: '', // 评论内容
      // comment: [],
      // pageindex: 1 // 第几页
    }
  },
  created () {
    newsdetails(this.id)
      .then(res => {
        this.newstext = res.message[0]
      })
  }
}
</script>
<style lang="scss" scoped>
.news-detail {
  .news-title {
    font-size: 14px;
    font-weight: bold;
  }
  .news-info {
    font-size: 12px;
    color: #26a2ff;
    display: flex;
    justify-content: space-between;
  }
  .news-content {
    font-size: 12px;
  }
}
</style>
