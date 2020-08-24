
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin
const stamp = new Date().getTime()
module.exports = {
  devServer: {
    // 设置主机地址
    host: '192.168.43.186',
    disableHostCheck: true,
// 设置默认端口
    port: 8382,
    hot: true,

    proxy: {
      '/api': {
        target: 'http://123.56.77.96:9000',
        changeOrigin: false,
        pathRewrite: {
          '^/api': ''
        }
      }
    }
  },
  publicPath:  '',
  outputDir: 'user',
  productionSourceMap: false,
  assetsDir: 'static',
  css: {
    extract:  {
      filename: `css/[name].${stamp}.css`,
      chunkFilename: `css/[name].${stamp}.css`
    },
    sourceMap: false,
    loaderOptions: {
      sass: {
        // prependData: ' @import "@/assets/style/base.scss"; '
      },
      postcss: {
        plugins: [
          require('postcss-pxtorem')({
            rootValue: 75, // 换算的基数
            selectorBlackList: ['cube-', 'mint-', 'mt-','vant-','van-'], // 忽略转换正则匹配项
            propList: ['*']
          })
        ]
      }
    },
    requireModuleExtension: true
  },

  chainWebpack: config => { 
      config.output.chunkFilename(`js/[name].${stamp}.js`)
      config.output.filename(`js/[name].${stamp}.js`)

  },

  configureWebpack: config => {
    config.externals = {
      'vue': 'Vue',
      'vue-router': 'VueRouter', 
      'vuex': 'Vuex', 
      'axios': 'axios'
    }
    if (process.env.NODE_ENV == 'production') {
      const plugins = [] 
      plugins.push(new BundleAnalyzerPlugin())
      config.plugins = [...config.plugins, ...plugins]
    }
  }

}
