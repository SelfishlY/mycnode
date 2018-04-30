import Vue from 'vue'
import Router from 'vue-router'
import home from  '../components/home/home'
import ff from  '../components/ff/ff'
import xs from  '../components/xs/xs'
import about from  '../components/about/about'
import register from  '../components/register/register'
import login from  '../components/login/login'
import content from '../components/content/content'
//首页路由配置
import all from  '../components/all/all'
import good from  '../components/good/good'
import share from  '../components/share/share'
import ask from  '../components/ask/ask'
import job from  '../components/job/job'
import dev from  '../components/dev/dev'
Vue.use(Router)
// const router = new VueRouter()
const routes = [
  {
    path: '/',
    redirect: './home'
  },
  {
    path: '/home',
    component: home,
    children:[
      {//首页路由配置
        path:'/',
        redirect:'/home/all'
      },
      {
        path:'all',
        component:all
      },
      {
        path:'good',
        component:good
      },
      {
        path:'share',
        component:share
      },
      {
        path:'ask',
        component:ask
      },
      {
        path:'job',
        component:job
      },
      {
        path:'dev',
        component:dev
      },
    ]
  },
  {
    path: '/ff',
    component: ff
  },
  {
    path: '/xs',
    component: xs
  },
  {
    path: '/about',
    component: about
  },
  {
    path: '/register',
    component: register
  },
  {
    path: '/login',
    component: login
  },
  {
    path: '/home/content/:id',
    component : content
  }
]
const router = new Router({
  linkActiveClass: 'active',
  routes
})
router.beforeEach((to, from, next) => {
    if(sessionStorage.isLogin==1){
      next()
    }else{
      if(to.path == '/login'){
        next()
      }else if(to.path == '/login'&&sessionStorage.isLogin==1){
        next('/home');
      }else{
        next('login')
      }
    }
})
export default router
