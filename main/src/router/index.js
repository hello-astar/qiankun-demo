import VueRouter from 'vue-router';

export const appRouter = [
  { path: '/', redirect: '/home' },
  { name: 'home', path: '/home', component: () => import('@/views/home.vue'), meta: { title: '首页' } }
]

export default new VueRouter({
  routes: [
    ...appRouter
  ]
})