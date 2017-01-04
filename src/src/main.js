import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import VueResource from 'vue-resource'
import MuseUI from 'muse-ui'
import 'muse-ui/dist/muse-ui.css'
import store from './store'


Vue.use(VueRouter)
Vue.use(VueResource)
Vue.use(MuseUI)//使用插件

//路由组
const routes = [


];
const  router = new VueRouter({
    mode: 'history',
    base: __dirname,
    routes // （缩写）相当于 routes: routes
});
new Vue({
  el: '#app',
  store,
   render: h => h(App)
})
