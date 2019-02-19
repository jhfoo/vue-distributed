const path = require('path')
const webpack = require('webpack');
const {
    VueLoaderPlugin
} = require('vue-loader')

module.exports = {
    output: {
        path: './dist',
        path: path.resolve(__dirname, 'dist'),
        filename: 'app-bundle.js',
        libraryTarget: 'umd'
    },
    externals: {
        corelib: 'CoreLib',
        subapplib: 'SubappLib'
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
                test: /\.vue$/,
                use: 'vue-loader'
            }
        ]
    },
    plugins: [
        new VueLoaderPlugin(),
        new webpack.IgnorePlugin({
            resourceRegExp: /subapp-bundle/
        })
    ]
}