// 2021/5/12 上午12:52:54从bin/start.js自动生成
export default [
  {
    'name': 'vue-home',
    'path': '/vue/index',
    'meta': {
      'title': 'vue子菜单'
    }
  },
  {
    'name': 'vue-test',
    'path': '/vue/test',
    'meta': {
      'title': 'vue test'
    },
    'children': [
      {
        'path': '/vue/test/test1',
        'name': 'vue-test1',
        'component': 'test1.vue',
        'meta': {
          'title': 'vue test1'
        }
      },
      {
        'path': '/vue/test/test2',
        'name': 'vue-test2',
        'component': 'test2.vue',
        'meta': {
          'title': 'vue test2'
        }
      }
    ]
  },
  {
    'name': 'react-home',
    'path': '/react/index',
    'meta': {
      'title': 'react子菜单'
    }
  },
  {
    'name': 'react-test1',
    'path': '/react/test1',
    'meta': {
      'title': 'react test1'
    }
  },
  {
    'name': 'react-test2',
    'path': '/react/test2',
    'meta': {
      'title': 'react test2',
      'hidden': false
    }
  }
]
