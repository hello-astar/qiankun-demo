import 'whatwg-fetch';
import 'custom-event-polyfill';
import 'core-js/stable/promise';
import 'core-js/stable/symbol';
import 'core-js/stable/string/starts-with';
import 'core-js/web/url';
import Vue from 'vue'
import App from './App.vue'
import '@/components/elementui.js'
import 'element-ui/lib/theme-chalk/index.css'
import '@/assets/styles/common.scss'
import startQiankun from './qiankun'
import VueRouter from 'vue-router'
import routerConfig from '@/router'
import sideMenuConfig from './sideMenu'

Vue.config.productionTip = false

Vue.prototype.$ELEMENT = { size: 'small' };

Vue.use(VueRouter);

// 解决重复点击路由跳转导致错误问题
const originalPush = VueRouter.prototype.push

VueRouter.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err)
}

let router = new VueRouter({
  base: '/',
  mode: 'history',
  routes: routerConfig
})

router.beforeEach((to, from, next) => {
  let childrenPath = ['/vue', '/react']
  console.log(to.name, to.path, sideMenuConfig)
  if (to.name) {
    next();
  }
  else if (childrenPath.some((item) => to.path.includes(item))) {
    next();
  } else {
    next({ name: '404' });
  }
});

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')

startQiankun()