<template>
    <div class="login">
      <div class="title">
        <a href="#">主页</a>
        <i>/</i>
        <span>Node.js新手入门</span>
      </div>
      <div class="inner">
        <form>
          <div class="username">
            <p>用户名</p>
            <input class="text-ipt" type="text" v-model="username">
          </div>
          <div class="password">
            <p>密码</p>
            <input class="text-ipt" type="text" v-model="password">
          </div>
          <div class="btn">
            <span value="登陆" class="sub"  @click="addlogin">登陆</span>
          </div>
        </form>
      </div>
    </div>
</template>

<script>
    export default {
        name: "login",
        data(){
          return {
            username:'',
            password:''
          }
        },
        methods:{
          addlogin () {
            if(this.password==123456&&this.username==123456){
              sessionStorage.isLogin=1;
              alert('登陆成功')
              let redirect = decodeURIComponent(this.$route.query.redirect || '/');
              alert(redirect)
              this.$router.push({//你需要接受路由的参数再跳转
                path: redirect
              });
            }else{
              alert('密码错误');
            }
          }
        }
    }
</script>

<style scoped>
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
  .inner{
    padding: 10px;
    font-size: 14px;
    line-height: 20px;
  }
  .inner div .text-ipt{
    border: 2px solid #ccc;
    border-radius: 5px;
    width: 280px;
    line-height: 20px;
    height: 30px;
    padding-left: 8px;
  }
  .btn{
    text-align: center;
    margin-top: 20px;
  }
  .inner .sub{
    appearance:none;
    background: #08c;
    width: 200px;
    height: 30px;
    border-radius: 5px;
    color: #fff;
    font-size: 16px;
    display: inline-block;
    line-height: 30px;
  }
</style>
