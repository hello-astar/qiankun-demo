import {
  registerMicroApps,
  addGlobalUncaughtErrorHandler,
  start,
  initGlobalState
} from 'qiankun'

const app = '传给子项目们~'
export default function () {
  registerMicroApps([
    {
      name: 'micro-vue',
      entry: '//localhost:2001',
      container: '#root-vue',
      activeRule: '/vue',
      props: { app }
    }
    // {
    //   name: 'micro-react',
    //   entry: '//localhost:3000',
    //   container: '#micro-react',
    //   activeRule: '/react',
    //   props: { app }
    // }
  ], {
      beforeLoad: () => {
        console.log('before load')
        return Promise.resolve()
      },
      afterMount: () => {
        console.log('after mount')
        return Promise.resolve()
      }
  })

  addGlobalUncaughtErrorHandler((event) => {
      const { message } = event
      // 加载失败时提示
      if (message && message.includes('died in status LOADING_SOURCE_CODE')) {
        console.log('微应用加载失败，请检查应用是否可运行', event)
      }
  })

  const state = { msg: '通过globalstate，大家都可以用' }
  const actions = initGlobalState(state)
  actions.onGlobalStateChange((state, prev) => {
    // state: 变更后的状态; prev 变更前的状态
    console.log(state, prev)
  })
  actions.setGlobalState(state)

  actions.onGlobalStateChange((state, prev) => {
    // state: 变更后的状态; prev 变更前的状态
    console.log(state, prev)
  })
  start()
}
