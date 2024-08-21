const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  
  NODE_ENV: '"production"',      
  API_HOST:'"http://81.94.150.58:3000/"', 
  transpileDependencies: true, 
})
