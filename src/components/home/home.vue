<template>
<div class="home">
  <div class="home-nav" id="home-nav">
    <ul >
      <li v-for="(item,index) in getMap" @click="home_get(index)" ><router-link :to = "item.to">{{item.content}}</router-link></li>
      <!--<li @click="home_get($index)" class="home-checked"><router-link to="all" index="0">全部</router-link></li>-->
      <!--<li @click="home_get"><router-link to="good" index="1">精华</router-link></li>-->
      <!--<li @click="home_get"><router-link to="share" index="2">分享</router-link></li>-->
      <!--<li @click="home_get"><router-link to="ask" index="3">问答</router-link></li>-->
      <!--<li @click="home_get"><router-link to="job" index="4">招聘</router-link></li>-->
      <!--<li><router-link to="dev">客户端测试</router-link></li>-->
    </ul>
  </div>
  <div class="home-main" id="main">
    <router-view :home_data="home_data"></router-view>
    <loading v-show="loading"></loading>
  </div>
</div>
</template>

<script>
    import loading from '../loading/loading';
    export default {
      name: "home",
      data:function(){
        return {
          home_data:[],
          parameters :{
            tab:'',
            page:1,
            limit:30
          },
          loading:true,
          ajaxTimer:null,
        }
      },
      components : {
        loading : loading
      },
      created () {
        this.getMap=[{
          content:'全部',
          to:'all',
          getTo:''
        },{
          content:'精华',
          to:'good',
          getTo:'good'
        },{
          content:'分享',
          to:'share',
          getTo:'share'
        },{
          content:'问答',
          to:'ask',
          getTo:'ask'
        },{
          content:'招聘',
          to:'job',
          getTo:'job'
        },{
          content:'客户端测试',
          to:'dev',
          getTo:''
        }];
        this.htmlLoad(this.parameters);
        window.addEventListener('scroll', this.onScroll);
      },
      beforeDestroy(){

        window.removeEventListener('scroll', this.onScroll,false);
      },
      methods: {
        onScroll:function(){
          let _parameters = this.parameters;
          let _htmlLoad = this.htmlLoad;
          let _thisewaiheight = document.getElementById('header').offsetHeight+document.getElementById('home-nav').offsetHeight+20;
          let _thisHeight = document.getElementById('main').offsetHeight+_thisewaiheight;
          let _thisBoxheight=document.documentElement.clientHeight;
          let _thisScroll=document.body.scrollTop;
          if(_thisHeight==_thisScroll+_thisBoxheight){
            this.loading = true;
            clearTimeout(this.ajaxTimer);
            this.ajaxTimer = setTimeout(function () {
              _parameters.page++
              _htmlLoad(_parameters)
            },2000)
          }
        },
        home_get(index){
            this.parameters = {
            tab:this.getMap[index].getTo,
            page:this.page,
            limit:30
            }
            this.home_data = [];
            this.htmlLoad(this.parameters)
          },
        htmlLoad(parameters){
            let url = this.HOST+'/api/v1/topics'
            this.$http.get(url,{params:parameters}).then((data)=>{
              for(let i = 0;i<data.data.data.length;i++){
                this.home_data.push(data.data.data[i])
              }
              this.loading = false;
            })
          }
      }
    }
</script>

<style>
  .home-nav{
    background: #f6f6f6;
    overflow: hidden;
    padding: 10px;
  }
  .home-nav ul li{
    float: left;
  }
  .home-nav ul li a{
    display: inline-block;
    font-size: 14px;
    margin: 0 10px;
    padding: 4px 5px;
    border-radius: 3px;
    color: #80bd01;
  }
  .home-nav .active{
    background: #80bd01;
    color: #fff;
  }
</style>
