const path = require('path')


module.exports = {
  transpileDependencies: [
    'vuetify'
  ]
}

module.exports = {
  outputDir: path.resolve(__dirname, '../dist/static'),
  devServer: {
    proxy: {
      '/api': {
        target: 'http://localhost:3000'
      }
    }
  }
}