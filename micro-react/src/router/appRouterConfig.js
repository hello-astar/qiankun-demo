export default [
  { name: 'react-home', path: '/index', component: 'Home', meta: { title: 'react子菜单' } },
  { name: 'react-test1', path: '/test1', component: 'Test1', meta: { title: 'react test1' } },
  { name: 'react-test2', path: '/test2', params: '/:topic', component: 'Test2', nesting: true, meta: { title: 'react test2', hidden: false } },
]