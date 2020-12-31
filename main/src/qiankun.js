import {
  registerMicroApps,
  addGlobalUncaughtErrorHandler,
  start,
  initGlobalState,
  setDefaultMountApp
} from 'qiankun'

export default function () {
  // 注册子应用
  registerMicroApps([
    {
      name: 'micro-vue', // 子应用名
      entry: '//localhost:2001', // 入口地址
      container: '#subapp-viewport', // 渲染位置（此处表示渲染于主应用的subapp-viewport容器内）
      activeRule: '/vue', // 分配给子应用的路由，当主应用跳转到/vue下时，当前子应用启动
      props: {
        test: 'props to vue: 给vue子项目的props'
      }
    },
    {
      name: 'micro-react',
      entry: '//localhost:2002',
      container: '#subapp-viewport', // 可为子应用分配不同的container，本次将不示例
      activeRule: '/react',
      props: {
        test: 'props to react: 给react子项目的props'
      }
    }
  ],
  {
    beforeLoad: [
      app => {
        console.log('[LifeCycle] before load %c%s', 'color: green;', app.name);
      }
    ],
    beforeMount: [
      app => {
        console.log('[LifeCycle] before mount %c%s', 'color: green;', app.name);
      }
    ],
    afterMount: [
      app => {
        console.log('[LifeCycle] after unmount %c%s', 'color: green;', app.name);
      }
    ]
  })

  addGlobalUncaughtErrorHandler((event) => {
      const { message } = event
      // 加载失败时提示
      if (message && message.includes('died in status LOADING_SOURCE_CODE')) {
        console.log('微应用加载失败，请检查应用是否可运行', event)
      }
  })

  // 父组件传递globalstate
  const actions = initGlobalState({ msg: '通过globalstate，大家都可以用' })
  actions.onGlobalStateChange((state, prev) => {
    console.log(state, prev)
  }, true)

  // actions.setGlobalState(state)

  setDefaultMountApp('/vue')

  start()
}
