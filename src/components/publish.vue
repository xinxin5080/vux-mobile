<template>
  <div>
     <div class="comment">
      <div class="submitbox">
        <h3>提交评论</h3>
        <div>
            <x-textarea  placeholder="请输入留言" v-model="textdata" :height=100>
            </x-textarea>
            <x-button mini plain type="primary" @click.native="publishto">提交</x-button>
        </div>
      </div>
      <div class="commentbox">
        <h3 class="line"></h3>
        <ul>
          <li v-for="(item2, index) in comment" :key="index">
            <h4 class="comment-content">{{item2.content}}</h4>
            <p>
              <span class="comment-user">{{item2.user_name}}</span>
              <span class="comment-time">{{item2.add_time | filterTime}}</span>
            </p>
          </li>
        </ul>
      </div>
      <div class="button-group">
       <x-button @click.native="uploadto" type="primary" v-if="isyes" >加载更多</x-button>
       <x-button type="warn" v-else>没有更多了</x-button>
      </div>
    </div>
  </div>
</template>
<script>
import { commentlist, publish } from '@/api'
import { XTextarea, XButton, AlertModule } from 'vux'
// 引进qs转格式
import qs from 'qs'
export default {
  components: {
    XTextarea,
    XButton
  },
  data () {
    return {
      id: this.$route.params.id,
      isyes: true,
      textdata: '', // 评论内容
      comment: [],
      pageindex: 1 // 第几页
    }
  },
  created () {
    this.init()
  },
  methods: {
    init () {
      // 老数据
      let outcomment = this.comment
      commentlist(this.id, this.pageindex)
        .then(res => {
          this.comment = res.message
          if (this.comment.length < 10) {
            this.isyes = false
          }
          // 新数据
          let newcomment = res.message
          // 将新旧数据合在一起
          this.comment = [...outcomment, ...newcomment]
        })
    },
    // 加载更多
    uploadto () {
      this.pageindex += 1
      this.init()
    },
    // 提交评论
    publishto () {
      // 要传入id 和content=11的这种格式
      // {content: "222222"} 转成 content=11
      let str = { content: this.textdata }
      let strdata = qs.stringify(str)
      // 判断是否为空
      if (this.textdata.trim()) {
        publish(this.id, strdata)
          .then(res => {
            console.log(res)
            if (res.status === 0) {
              this.comment = []
              this.pageindex = 1
              this.init()
              // 清空输入框
              this.textdata = ''
              //  成功提示
              AlertModule.show({
                content: res.message
              })
            } else {
              //  失败提示
              AlertModule.show({
                content: res.message
              })
            }
          })
      } else {
        // 提示不可为空
        AlertModule.show({
          content: '不可为空'
        })
        // console.log('不可为空')
      }
    }
  }
}
</script>
<style lang="scss" scoped>
//
.inputbox {
  border: 1px solid #999;
}
.comment h3 {
  font-weight: bold;
  margin: 10px 0;
  font-size: 14px;
}
.line {
  border-top: 1px solid #999;
  padding-top: 10px;
}
.commentbox{
  li:not(:last-child) {
    border-bottom: 1px solid #999;
    margin: 5px 0;
  }
  p {
    font-size: 14px;
  }
  .comment-content {
    color: #999;
    font-size: 14px;
  }
}
.comment-user, .comment-time {
  font-size: 12px;
  color: #26a2ff;
}
</style>
