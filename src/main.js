import Vue from 'vue'
import VueRouter from 'vue-router'

// component
import AppNavbar from './component/AppNavbar.vue';
import AppAlbum from './component/AppAlbum.vue';
import AppAbout from './component/AppAbout.vue';
import AppPost from './component/AppPost.vue';
import AppUsers from './component/AppUsers.vue';


// use vue router
Vue.use(VueRouter);


//create routing path
const routes = [
  {
    name: 'AppUsers',
    path:'/',
    component:AppUsers,
  },
  {
    name:'AppPost',
    path:'/post',
    component:AppPost,
  },
  {
    name:'AppAlbum',
    path:'/album',
    component:AppAlbum,
  },
  {
    name:'AppAbout',
    path:'/about',
    component:AppAbout,
  }
]

//init router
const router = new VueRouter({ mode: 'history',routes: routes });

new Vue({
  el: '#app',
      router,
  render: h => h(AppNavbar)
})
