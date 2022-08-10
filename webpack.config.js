const path = require('path')
const htmlWebpackPlugin = require('html-webpack-plugin')
const VueLoaderPlugin = require('vue-loader/lib/plugin')

module.exports = {
    entry: path.join(__dirname, 'src/main.js'),
    output: {
        path: path.join(__dirname, 'dist'),
        filename: 'bundle.js'
    },
    plugins: [
        new htmlWebpackPlugin({
            template:path.join(__dirname,'src/index.html'),
            filename:'index.html'
        }),
        new VueLoaderPlugin()
    ],
    module: {
        rules: [

            {test: /\.css$/, use: ['style-loader', 'css-loader']},
            {test: /\.less$/, use: ['style-loader', 'css-loader', 'less-loader']},
            {test: /\.sass$/, use: ['style-loader', 'css-loader', 'sass-loader']},
            {test: /\.vue$/, use: 'vue-loader'},
            {test: /\.(png|gif|jpg)$/, use: 'url-loader'},

            {test: /\.(woff|woff2|svg|eot|ttf)$/, use: 'url-loader'}
        ]
    }
}