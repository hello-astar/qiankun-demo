// nodejs对es6的支持并不好，像class, import这些关键字，react的jsx都无法使用。但是babel可以将这些都转化为es5。此处讲讲如何在node端使用babel。

// babel-register可以理解成一个小插件，将es6的东西转成es5，github地址：https://github.com/babel/babel/tree/master/packages/babel-register。

// 使用很简单，只需要在文件中加入
require('babel-register') ({
  presets: [ 'env' ]
});

const fs = require('fs');
const path = require('path');
const config = [
  {
    name: 'micro-vue',
    activeRule: '/vue'
  }, {
    name: 'micro-react',
    activeRule: '/react',
  }
];

let content = [];

const createSideMenu = () => {
  const tips = `// ${
    (new Date()).toLocaleString()
  }从bin/start.js自动生成`;

  config.forEach(item => {
    const appRouterConfig = require(path.join(__dirname, `../${item.name}/src/router/appRouterConfig.js`));
    content = content.concat(appRouterConfig.default.map(ele => ({ name: ele.name, path: item.activeRule + ele.path, meta: ele.meta })));
  })
  fs.writeFileSync(path.join(__dirname, '../main/src/sideMenu.js'), tips + '\n' + `export default ${JSON.stringify(content, null, 2)}\n`.replace(/\"/g, "\'"));
}
createSideMenu();
