const path = require('path')
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