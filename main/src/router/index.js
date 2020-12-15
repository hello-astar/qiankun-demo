import VueRouter from 'vue-router';

let layout = () => import('@/views/layout.vue')
export const appRouter = [
  {
    path: '/',
    component: layout,
    redirect: '/vue'
  }, {
    path: '/vue',
    component: layout
  }, {
    path: '/*',
    component: () => import('@/views/404.vue'),
    name: '404'
  }
]

export default new VueRouter({
  mode: 'history',
  routes: [
    ...appRouter
  ]
})