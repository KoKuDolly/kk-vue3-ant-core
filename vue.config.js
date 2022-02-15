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
    port: 4402,
    open: true,
    // proxy: {
    //   '/api': {
    //     target: 'http://localhost:4402',
    //     ws: true,
    //     secure: false,
    //     pathRewrite: {
    //       // ['^/api']: '',
    //     },
    //   },
    // },
    before: require('./src/mocks/mock-server.js'),
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
