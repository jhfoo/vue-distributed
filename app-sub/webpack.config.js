const path = require('path')
const {
    VueLoaderPlugin
} = require('vue-loader')

module.exports = {
    output: {
        path: './dist',
        path: path.resolve(__dirname, '../app-main/dist'),
        filename: 'subapp-bundle.js',
        libraryTarget: 'umd'
    },
    externals: {
        corelib: 'CoreLib'
    },
    module: {
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
        new VueLoaderPlugin()
    ]
}