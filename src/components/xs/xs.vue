<template>
    <div class="introduction">
      <div class="title">
        <a href="#">主页</a>
        <i>/</i>
        <span>Node.js新手入门</span>
      </div>
      <div class="introduction-main">
        <h1>Node.js入门</h1>
        <p>《快速搭建 Node.js 开发环境以及加速npm》</p>
        <div class="href-a"><a href="www.baidu.com">www.baidu.com</a></div>
        <p>《Node.js 包教包会》</p>
        <div class="href-a"><a href="www.baidu.com">www.xinlang.com</a></div>
        <p>《ECMAScript 6入门》</p>
        <div class="href-a"><a href="www.baidu.com">http://es6.ruanyifeng.com/</a></div>
        <p>《七天学会NodeJS》</p>
        <div class="href-a"><a href="www.baidu.com">https://github.com/nqdeng/7-days-nodejs</a></div>
        <p>《Node.js 包教包会》</p>
        <div class="href-a"><a href="www.baidu.com">www.xinlang.com</a></div>

      </div>
    </div>
</template>

<script>
    export default {
        name: "Introduction"
    }
</script>

<style >
  .introduction{
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
  .introduction-main{
    padding: 10px;
  }
  .introduction-main p{
    font-size: 15px;
    margin: 15px 0;
  }
</style>
