module.exports = {
  devServer: {
    port: 2001,
    headers: {
      'Access-Control-Allow-Origin': '*'
    }
  },
  configureWebpack: {
    output: {
      // 微应用的包名，这里与主应用中注册的微应用名称一致${name}
      library: 'micro-vue',
      // 将你的 library 暴露为所有的模块定义下都可运行的方式
      libraryTarget: 'umd',
      // 按需加载相关，设置为 webpackJsonp_${name} 即可
      jsonpFunction: 'webpackJsonp_micro-vue'
    }
  },
}