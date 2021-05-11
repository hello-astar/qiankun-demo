/*
 * @Description: 
 * @Author: astar
 * @Date: 2021-05-11 22:35:17
 * @LastEditTime: 2021-05-11 22:40:25
 * @LastEditors: astar
 */
import appRouterConfig from './appRouterConfig'

const pipe = x => () => import(`@/views/${x}`)

let getRouter = (appRouterConfig) => {
  for (let i = 0; i < appRouterConfig.length; i++) {
    let { component, children } = appRouterConfig[i]
    appRouterConfig[i].component = pipe(component)
    if (children && children.length) {
      appRouterConfig[i].component = pipe(component)
      appRouterConfig[i].children = getRouter(children)
    }
  }
  return appRouterConfig
}

const appRouter = getRouter(appRouterConfig)

const defaultRouter = [
  { path: '/404', name: '404', component: () => import('@/views/404.vue') }
]

export default [
  ...appRouter,
  ...defaultRouter
]
