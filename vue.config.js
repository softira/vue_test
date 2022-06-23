module.exports = {
  // pages: {
  //   index: {
  //     // page 的入口
  //     entry: 'src/tanshuai.js',
  //   },
  // },
  lintOnSave: false, // 关闭语法检查
  
  // 第一种开启代理服务器方式
  // devServer: {
  //   proxy: 'http://localhost:5000'
  // }
  
  // 第二种开启代理服务器方式
  devServer: {
    proxy: {
      '/demo1': {
        target: 'http://localhost:5000',
        pathRewrite: {'^/demo1':''},
        // ws: true, // 是否支持webSocket，默认为true
        // changeOrigin: true // 用于控制请求头中的host值，默认为true
      },
      '/demo2': {
        target: 'http://localhost:5001',
        pathRewrite: {'^/demo2':''},
      }
    }
  }
}
