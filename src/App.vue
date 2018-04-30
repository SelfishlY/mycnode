<template>
  <div id="app">
    <header id="header">
      <div class="search">
        <a href="#"><img src="../static/img/cnodejs_light.svg" alt=""></a>
        <form action="/search"><input type="text"></form>
      </div>
      <div class="nav">
        <ul>
          <li><router-link to="/home">首页</router-link></li>
          <li><router-link to="/xs">新手入门</router-link></li>
          <li><router-link to="/ff">API</router-link></li>
          <li><router-link to="/about">关于</router-link></li>
          <li><router-link to="/register">注册</router-link></li>
          <li><router-link to="/login">登录</router-link></li>
        </ul>
      </div>
    </header>
    <div class="main">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
export default {
  data:function(){
    return {
      count: 0,
    }
  },
}
</script>

<style>
  html{
    height: auto !important;
    height: 100%;
    min-height: 100%;
  }
body{
  background: #e1e1e1;
  font-family: "Helvetica Neue";
  height: auto !important;
  height: 100%;
  min-height: 100%;
}
  .main{
    border-radius: 5px 5px 0 0;
    background: #fff;
    width: 98%;
    margin: 0 auto;
    height: auto !important;
    height: 100%;
    min-height: 100%;
  }
header{
  min-height: 90px;
  width: 100%;
  background: #444;
  font-size: 13px;
  font-weight: 400;
  text-align: center;
  overflow: hidden;
  margin-bottom: 20px;
}
.search{
  height: 50%;
  margin-top: 5px;
  display: inline-block;
}
header img{
  width: 100%;
}
header form{
  display: inline-block;
}
header input{
  border: 0;
  width: 233px;
  padding: 3px 5px 3px 22px;
  width: 206px;
  background: url(../static/img/search.e53b380a.hashed.png) 4px 4px no-repeat #888;
  color: #666;
  margin-top: 2px;
  transition: all .5s;
  vertical-align: bottom;
  border-radius: 15px;
  height: 20px;
}
header input:hover{
  background: url(../static/img/search.e53b380a.hashed.png) 4px 4px no-repeat #fff;
}
header input:focus{
  background: url(../static/img/search.e53b380a.hashed.png) 4px 4px no-repeat #fff;
}
.search a{
  width: 120px;
  padding: 3px 20px;
  height: 34px;
  line-height: 34px;
  color: #ccc;
  font-weight: 700;
  display: inline-block;
}
.nav{
  text-align: center;
  display: inline-block;
}
.nav ul{
  overflow: hidden;
  display: inline-block;
}
.nav ul li{
  float: left;
}
.nav ul li a{
  color: #ccc;
  padding: 10px 15px;
  font-size: 13px;
  line-height: 20px;
}
.nav ul li a:hover{
  color: #fff;
}
  .active{
    color: #fff !important;
  }
</style>
