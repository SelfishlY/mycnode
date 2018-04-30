<template>
  <div id="all">
    <div class="cell" v-for="(item,index) in home_data">
      <a class="avatar" href="#"><img :src="item.author.avatar_url" alt=""></a>
      <div class="cell-text">
        <span v-if="item.top" class="put_top">置顶</span>
        <span v-else class="put1_top">问答</span>
        <!--<a href="#">{{item.title}}</a>-->
        <router-link :to="'content/'+item.id">{{item.title}}</router-link>
      </div>
      <span class="reply_count">{{item.reply_count}}/{{item.visit_count}}</span>
      <span class="last-time">{{chageTime(Date.parse(item.create_at))}}</span>
    </div>
  </div>
</template>

<script>
  export default {
    props:{
      home_data:{
      }
    },
    mounted(){
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

<style >
  .cell{
    overflow: hidden;
    font-size: 0px;
    position: relative;
    padding: 10px;
    border-bottom: 1px solid #f0f0f0;
  }
  .avatar{
    float: left;
  }
  .avatar img{
    width: 30px;
    height: 30px;
  }
  .cell-text{
    font-size: 14px;
    line-height: 30px;
    padding-left: 40px;
    height: 30px;
  }
  .cell-text a{
    text-overflow:ellipsis;
    white-space:nowrap;
    overflow:hidden;
    display: inline-block;
    width: 81%;
  }
  .put_top{
    background: #80bd01;
    padding: 2px 4px;
    border-radius: 3px;
    color: #fff;
    font-size: 12px;
  }
  .put1_top{
    background: #e5e5e5;
    padding: 2px 4px;
    border-radius: 3px;
    color: #999;
    font-size: 12px;
  }
  .reply_count{
    font-size: 10px;
    position: absolute;
    color: #b4b4b4;
    left: 85px;
    bottom: 5px;
  }
  @media (max-width: 361px){
    .cell-text a{
      width: 175px!important;
    }
  }
  .last-time{
    position: absolute;
    right: 5px;
    bottom: 5px;
    font-size: 14px;
    color: #7e8c8d;
  }
</style>
