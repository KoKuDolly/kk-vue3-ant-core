const path = require('path')

function resolve(dir) {
  return path.join(__dirname, dir)
}

module.exports = {
  pages: {
    index: {
      entry: 'example/index.js',
    },
  },
  devServer: {
    port: 4401,
    open: true,
    proxy: {
      '/api/upload': {
        target: 'http://10.2.1.241:8000/',
        ws: true,
        secure: false,
        pathRewrite: {
          ['^/api/upload']: '',
        },
      },
      '/api': {
        target: 'http://192.168.1.99:9002',
        ws: true,
        secure: false,
        pathRewrite: {
          ['^/api']: '',
        },
      },
    },
  },
  productionSourceMap: false,
  configureWebpack: {
    devtool: 'source-map',
    resolve: {
      alias: {
        '@': resolve('src'),
        '@example': resolve('example'),
      },
    },
  },
  css: {
    loaderOptions: {
      less: {
        lessOptions: {
          javascriptEnabled: true,
        },
      },
    },
  },
}
