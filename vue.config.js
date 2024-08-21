const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true, 
  devServer: {
    proxy: 'http://81.94.150.58:3000'
  }
})
