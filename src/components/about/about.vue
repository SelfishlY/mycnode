<template>
    <div class="about">
      <div class="title">
        <a href="#">主页</a>
        <i>/</i>
        <span>关于</span>
      </div>
  <h1>关于</h1>
  <p>CNode 社区为国内最大最具影响力的 Node.js 开源技术社区，致力于 Node.js 的技术研究。</p>
  <p>CNode 社区由一批热爱 Node.js 技术的工程师发起，目前已经吸引了互联网各个公司的专业技术人员加入，我们非常欢迎更多对 Node.js 感兴趣的朋友。</p>
  <p>CNode 的 SLA 保证是，一个9，即 90.000000%。</p>
  <p>社区目前由 @alsotang 在维护，有问题请联系：https://github.com/alsotang</p>
  <p>请关注我们的官方微博：http://weibo.com/cnodejs</p>
    </div>
</template>

<script>
    export default {
        name: "about"
    }
</script>

<style >
  .about{
    height: 100%;
    background: #fff;padding: 10px;
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
  p{
    margin: 15px 0;
  }
</style>
