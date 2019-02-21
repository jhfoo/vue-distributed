'use strict'
const path = require('path')
const webpack = require('webpack');
const {
    VueLoaderPlugin
} = require('vue-loader')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
    output: {
        // path: './dist',
        path: path.resolve(__dirname, 'dist'),
        filename: 'app-bundle.js',
        libraryTarget: 'umd'
    },
    externals: {
        corelib: 'CoreLib',
        subapplib: 'SubappLib'
    },
    devServer: {
        host: '192.168.0.32',
        contentBase: path.join(__dirname, 'dist'),
        hot: true,
        watchOptions: {
            poll: true
        }
    },
    module: {
        noParse: /\/native-require.js$/,
        rules: [
            //     // {
            //     //     test: /\.js$/,
            //     //     exclude: /node_modules/,
            //     //     use: {
            //     //         loader: "babel-loader"
            //     //     }
            //     // },
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader']
            },
            {
                test: /\.styl(us)?$/,
                use: [
                    'vue-style-loader',
                    'css-loader',
                    'stylus-loader'
                ]
            },
            {
                test: /\.vue$/,
                use: 'vue-loader'
            }
        ]
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new VueLoaderPlugin(),
        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: 'html/index.html',
            inject: true
        }),
        new webpack.IgnorePlugin({
            resourceRegExp: /subapp-bundle/
        })
    ]
}