<template>
    <div class="ff">
      <div class="title">
        <a href="#">主页</a>
        <i>/</i>
        <span>API</span>
      </div>
      <div class="ff-main">
        <h1>主题</h1>
        <p>get/topics主题</p>
        <div class="href-a">接受get参数</div>
        <div class="content">
          <ul>
            <li>page Number 页数
            </li>
            <li>tab String 主题分类。目前有 ask share job good</li>
            <li>limit Number 每一页的主题数量</li>
            <li>mdrender String 当为 false 时，不渲染。默认为 true，渲染出现的所有 markdown 格式文本。</li>
          </ul>
        </div>
      </div>
    </div>
</template>

<script>
    export default {
        name: "Interface"
    }
</script>

<style >
  .ff{
    min-height: 100%;
  }
  .title{
    background: #f6f6f6;
    overflow: hidden;
    font-size: 0px;
    padding: 10px;
  }
  .title a{
    color: #80bd01;
    font-size: 14px;
    line-height: 20px;
  }
  .title i{
    font-size: 14px;
    color: #ccc;
    padding: 0 5px;
  }
  .title span{
    font-size: 14px;
    color: #999;
  }
  .href-a a{
    color: #08c;
    font-size: 15px;
    margin: 15px 0;
  }
  h1{
    font-size: 26px;
    margin-bottom: 15px;
    font-weight: 700;
  }
  .ff-main{
    padding: 10px;
  }
  .ff-main p{
    font-size: 15px;
    margin: 15px 0;
  }
  .content{
    padding: 20px;
  }
  .content ul li{
    list-style: circle;
  }
</style>
