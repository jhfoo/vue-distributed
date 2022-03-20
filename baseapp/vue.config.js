const { defineConfig } = require('@vue/cli-service'),
  webpack = require('webpack')

module.exports = defineConfig({
  transpileDependencies: true,
  devServer: {
    port: 8002,
  },
  configureWebpack: {
    plugins: [
      new webpack.container.ModuleFederationPlugin({
        name: 'baseapp',
        filename: 'remoteEntry.js',
        remotes: {
          login: 'login@http://192.168.86.126:8003/remoteEntry.js',
        },
        shared: {
          // vue: {
          //   singleton: true,
          // },
        },
      }),
    ],
  },
})
