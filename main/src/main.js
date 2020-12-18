import Vue from 'vue'
import App from './App.vue'
import '@/components/elementui.js'
import 'element-ui/lib/theme-chalk/index.css'
import '@/assets/styles/common.scss'
import startQiankun from './qiankun'
import VueRouter from 'vue-router';

Vue.config.productionTip = false

Vue.prototype.$ELEMENT = { size: 'small' };

Vue.use(VueRouter);

// 解决重复点击路由跳转导致错误问题
const originalPush = VueRouter.prototype.push

VueRouter.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err)
}

new Vue({
  router: new VueRouter({
    mode: 'history',
    routes: []
  }),
  render: h => h(App),
}).$mount('#app')

startQiankun()