<template>
  <div>
     <headbtn headtitle="新闻资讯"></headbtn>
     <div class="news-list">
       <ul>
         <li v-for="(item,index) in newsdata" :key="index" @click="jumpto(item.id)">
           <div class="news-item">
             <img :src="item.img_url" alt="">
             <div class="content">
               <p class="content-title">{{item.title}}</p>
               <p class="content-info">
                 <span class="content-time">{{item.add_time | filterTime}}</span>
                 <span class="content-click">{{item.id}}</span>
                </p>
             </div>
           </div>
         </li>
       </ul>
     </div>
  </div>
</template>
<script>
import headbtn from '@/components/heads'
import { newslist } from '@/api'
export default {
  components: {
    headbtn
  },
  data () {
    return {
      newsdata: ''// 列表数据
    }
  },
  created () {
    newslist()
      .then(res => {
        console.log(res)
        this.newsdata = res.message
      })
  },
  methods: {
    jumpto (id) {
      this.$router.push({ name: 'newsdetails', params: { id } })
    }
  }
}
</script>
<style lang="scss" scoped>
.news-list {
  ul {
    // padding: 40px 0 0 0;
    li {
      padding: 5px;
    }
  }
  .news-item {
    display: flex;
    justify-content: space-between;
    align-items: center;
    img {
      width: 100px;
      height: 50px;
      margin-right: 10px;
      flex: 1;
    }
    .content {
      flex: 2;
      width: 250px;
      .content-title {
        font-size: 14px;
        font-weight: bold;
      }
      .content-info {
        display: flex;
        justify-content: space-between;
        color: #26a2ff;
        font-size: 12px;
      }
    }
  }
}
</style>
