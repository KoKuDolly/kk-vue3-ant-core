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
