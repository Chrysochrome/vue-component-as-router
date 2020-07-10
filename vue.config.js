// const path = require('path')

var config = {
  configureWebpack: {
    entry: {
      // app: './src/App.vue'
    },
    output: {
      library: 'portal_application',
      libraryTarget: 'window',
      libraryExport: 'default',
      filename: 'app.bundle.js'
    }
  },
  chainWebpack: config => {
    config.optimization.delete('splitChunks')
  },
  css: { extract: false }
}

module.exports = config
