require('babel-register') ({
  presets: [ 'env' ]
});

// module.exports = require('./test.js')
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
