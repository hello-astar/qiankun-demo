// 2023-3-31 5:57:20 PM从bin/start.js自动生成
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
    }
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
  },
  {
    'name': 'react-test3',
    'path': '/react/test3',
    'meta': {
      'title': 'react test3',
      'hidden': false
    },
    'children': [
      {
        'path': '/react/test3/aaa',
        'name': 'react-test3-aaa',
        'component': 'Test1',
        'meta': {
          'title': 'react-test3-aaa'
        }
      }
    ]
  }
]
