export default [
  {
    name: 'react-home',
    path: '/index',
    component: 'Home',
    meta: { title: 'react子菜单' }
  },
  {
    name: 'react-test1',
    path: '/test1',
    component: 'Test1',
    meta: { title: 'react test1' }
  },
  {
    name: 'react-test2',
    path: '/test2',
    params: '/:topic',
    component: 'Test2',
    nesting: true,
    meta: { title: 'react test2', hidden: false }
  },
  {
    name: 'react-test3',
    path: '/test3',
    component: 'Test3',
    meta: { title: 'react test3', hidden: false },
    children: [
      {
        path: 'aaa', name: 'react-test3-aaa', component: 'Test1', meta: { title: 'react-test3-aaa' }
      }
    ]
  }
]