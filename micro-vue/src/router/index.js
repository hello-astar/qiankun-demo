export const appRouter = [
  { path: '/', redirect: '/index' },
  { name: 'micro-vue', path: '/index', component: () => import('@/views/home.vue'), meta: { title: 'vue子菜单' } }
]

export default [
  ...appRouter
]
