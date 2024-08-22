var webpack = require('webpack')

module.exports = {
  configureWebpack: {
    plugins: [
      new webpack.DefinePlugin({
        'process.env': {
          'API_BASE_URL': 'http://81.94.150.58:3000/',
          'HOST': 'https://fr-4bdc.onrender.com/'
        }
      })
    ]
  },
  // options...
  devServer: {
    open: process.platform === 'darwin',
    host: process.env.HOST,
    https: false,
    disableHostCheck: true
  }
}
