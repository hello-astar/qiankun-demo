# Qiankun-Demo
项目通过微前端解决方案qiankun构建，包含由vue2生成的主应用main和由vue2、react生成的子应用micro-vue、micro-react。
具体实现可以看我的这篇博客 -- [微前端框架qiankun实践](https://hello-astar.github.io/2020/12/28/%E5%BE%AE%E5%89%8D%E7%AB%AF%E6%A1%86%E6%9E%B6qiankun%E5%AE%9E%E8%B7%B5/)
# 项目特点
- 直接运行`npm install`和 `npm run serve`可以一键安装和运行所有项目
- 脚本自动生成sideBar--侧边栏目录

# Get started
```
npm install
npm run serve
```
## To-Do-List
- [x] 项目子页面
- [x] 引入qiankun
- [x] bin/start.js 获取子项目的菜单，拼接为左侧菜单栏
- [ ] 兼容ie浏览器