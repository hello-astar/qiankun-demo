import {
  registerMicroApps,
  addGlobalUncaughtErrorHandler,
  start,
  initGlobalState,
  setDefaultMountApp
} from 'qiankun'

export default function () {
  registerMicroApps([
    {
      name: 'micro-vue',
      entry: '//localhost:2001',
      container: '#subapp-viewport',
      activeRule: '/vue',
      props: { msg: 'props to vue: 给vue子项目的props' }
    },
    {
      name: 'micro-react',
      entry: '//localhost:2002',
      container: '#subapp-viewport',
      activeRule: '/react',
      props: { msg: 'props to vue: 给vue子项目的props' }
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
  const state = { msg: '通过globalstate，大家都可以用' }
  const actions = initGlobalState(state)
  actions.onGlobalStateChange((state, prev) => {
    // state: 变更后的状态; prev 变更前的状态
    console.log(state, prev)
  }, true)
  actions.setGlobalState(state)

  setDefaultMountApp('/vue')

  start()
}
