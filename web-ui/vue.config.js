const { defineConfig } = require('@vue/cli-service')

module.exports = defineConfig({
  transpileDependencies: true,
  outputDir: '../templates',
  assetsDir: process.env.NODE_ENV === 'development' ? '': '../static',
  devServer: {
    open: true,
    proxy: {
      [process.env.VUE_APP_BASE_API]: {
        target: `http://127.0.0.1:5000`,
        changeOrigin: true,
        pathRewrite: {
          ['^' + process.env.VUE_APP_BASE_API]: ''
        }
      }
    }
  }
})
