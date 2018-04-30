<template>
    <div id="content1">
      <div class="top">
        <h1>{{content_data.title}}</h1>
        <span>·发布于{{chageTime(Date.parse(content_data.create_at))}}·作者 {{content_data.tab}} · {{content_data.visit_count}}次浏览 · 来自分享</span>
        <div class="title-content" v-html="content_data.content">
          {{content_data.content}}
        </div>
      </div>
      <div class="huifu">
        {{content_data.reply_count}}回复
      </div>
    </div>
</template>

<script>
    export default {
        // name: "content"
      data:function(){
        return{
          content_data:{}
        }
      },
      mounted(){
        // window.removeEventListener('scroll', this.onScroll,false);
        let uid= this.$route.params.id;
        let url = this.HOST+'/api/v1/topic/'+uid;
        console.log(url)
        this.$http.get(url).then( (data)=> {
          console.log(data.data.data)
          this.content_data=data.data.data;
        })
      },

      methods:{
        chageTime: function (timestamp){
          // 补全为13位
          var arrTimestamp = (timestamp + '').split('');
          for (var start = 0; start < 13; start++) {
            if (!arrTimestamp[start]) {
              arrTimestamp[start] = '0';
            }
          }
          timestamp = arrTimestamp.join('') * 1;

          var minute = 1000 * 60;
          var hour = minute * 60;
          var day = hour * 24;
          var halfamonth = day * 15;
          var month = day * 30;
          var now = new Date().getTime();
          var diffValue = now - timestamp;

          // 如果本地时间反而小于变量时间
          if (diffValue < 0) {
            return '不久前';
          }

          // 计算差异时间的量级
          var monthC = diffValue / month;
          var weekC = diffValue / (7 * day);
          var dayC = diffValue / day;
          var hourC = diffValue / hour;
          var minC = diffValue / minute;

          // 数值补0方法
          var zero = function (value) {
            if (value < 10) {
              return '0' + value;
            }
            return value;
          };

          // 使用
          if (monthC > 12) {
            // 超过1年，直接显示年月日
            return (function () {
              var date = new Date(timestamp);
              return date.getFullYear() + '年' + zero(date.getMonth() + 1) + '月' + zero(date.getDate()) + '日';
            })();
          } else if (monthC >= 1) {
            return parseInt(monthC) + "月前";
          } else if (weekC >= 1) {
            return parseInt(weekC) + "周前";
          } else if (dayC >= 1) {
            return parseInt(dayC) + "天前";
          } else if (hourC >= 1) {
            return parseInt(hourC) + "小时前";
          } else if (minC >= 1) {
            return parseInt(minC) + "分钟前";
          }
          return '刚刚';
          return timestamp
        }
      }
    }
</script>

<style>
  img{
    max-width: 100% !important;
  }
  .top h1{
    font-size: 22px;
    font-weight: 700;
    margin: 8px 10%;
    display: inline-block;
    vertical-align: bottom;
    width: 80%;
    line-height: 130%
  }
  .top span{
    font-size: 12px;
    color: #838383;
    margin-top: 10px;
    display: inline-block;
  }
  .title-content{
    padding: 10px;
    border-top: 1px solid #e5e5e5;
    font-size: 15px;
    line-height: 30px;
    margin-top: 20px;
  }
  .markdown-text{
    width: 100%;
  }
  .huifu{
    padding: 10px;
    background-color: #f6f6f6;
    border-radius: 3px 3px 0 0;
    font-size: 14px;
    color: #444;
  }
</style>
