const path = require('path')
// const {
//     VueLoaderPlugin
// } = require('vue-loader')

module.exports = {
    output: {
        path: './dist',
        path: path.resolve(__dirname, 'dist'),
        filename: 'core-bundle.js',
        libraryTarget: 'umd'
    },
    module: {
        rules: [{
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
            }
            //     // {
            //     //     test: /\.js$/,
            //     //     exclude: /node_modules/,
            //     //     use: {
            //     //         loader: "babel-loader"
            //     //     }
            //     // },
            // {
            //     test: /\.vue$/,
            //     use: 'vue-loader'
            // }
        ]
    },
    // plugins: [
    //     new VueLoaderPlugin()
    // ]
}