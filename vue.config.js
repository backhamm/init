module.exports = {
  productionSourceMap: false,
  publicPath: './',
  devServer: {
    port: 8080,
    proxy: {
      '/lg': {
        target: 'http://192.192.191.10:8021/',
        ws: true,
        changeOrigin: true,
        pathRewrite: {
          '^/lg': ''
        }
      }
    }
  },
  pluginOptions: {
    quasar: {
      importStrategy: 'kebab',
      rtlSupport: false
    }
  },
  transpileDependencies: [
    'quasar'
  ]
}
