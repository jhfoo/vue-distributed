const { defineConfig } = require('@vue/cli-service'),
  webpack = require('webpack')

module.exports = defineConfig({
  publicPath: 'http://192.168.86.126:8003/',
  devServer: {
    port: 8003,
  },
  configureWebpack: {
    optimization: {
      splitChunks: false,
    },
    plugins: [
      new webpack.container.ModuleFederationPlugin({
        name: 'login',
        filename: 'remoteEntry.js',
        exposes: {
          './LoginView': './src/components/LoginView.vue',
        },
        shared: {
          vue: {
            singleton: true,
          },
        },
      }),
    ],
  },
  transpileDependencies: true,
})
