module.exports = {
  devServer: {
    port: 2000,
    headers: {
      'Access-Control-Allow-Origin': '*' // 解决跨域
    }
  }
}