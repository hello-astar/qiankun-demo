import Vue from 'vue'
import App from './App.vue'
import '@/components/elementui.js'
import 'element-ui/lib/theme-chalk/index.css'
import '@/assets/styles/common.scss'
import startQiankun from './qiankun'

Vue.config.productionTip = false

Vue.prototype.$ELEMENT = { size: 'small' };

new Vue({
  render: h => h(App),
}).$mount('#app')

startQiankun()