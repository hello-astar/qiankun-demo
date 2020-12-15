/* eslint-disable no-undef */
import Vue from 'vue'
import App from './App.vue'
import router from './router/index.js'
import VueRouter from 'vue-router';

let instance = null
if (window.__POWERED_BY_QIANKUN__) {
  // 动态设置 webpack publicPath，防止资源加载出错
  __webpack_public_path__ = window.__INJECTED_PUBLIC_PATH_BY_QIANKUN__
}

function render (props) {
  if (props) {
    // Vue.prototype.$app = props // 将props挂在prototype上
  }


  Vue.config.productionTip = false
  
  Vue.use(VueRouter);

  instance = new Vue({
    router,
    render: h => h(App)
  }).$mount('#micro-vue')
}

/**
 * 不存在主应用时可直接单独运行
 */
if (!window.__POWERED_BY_QIANKUN__) {
  render()
}

export async function bootstrap () {
}

export async function mount (props) {
  console.log('通过props传递信息', props.app)
  props.onGlobalStateChange((state, prev) => {
    console.log(state, prev)
  })
  props.setGlobalState({ msg: '子应用修改globalstate' })
  render(props)
}

/**
 * 应用每次 切出/卸载 会调用的方法，通常在这里我们会卸载微应用的应用实例
 */
export async function unmount () {
  instance.$destroy()
  instance = null
}
