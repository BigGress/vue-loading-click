const resolve = require("path").resolve;
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
    mode: "development",
    entry: resolve(__dirname, "../example/main.js"),
    output: {
        path: resolve(__dirname, "../example/dist"),
        filename: "index.js"
    },
    resolve: {
        extensions: [".js", ".vue", ".css"],
        alias: {
          vue: 'vue/dist/vue.js'
        }
    },
    module: {
        rules: [{
            test: /\.js$/,
            loader: "babel-loader",
            include: [resolve(__dirname, "../example")]
        }, {
            test: /\.vue$/,
            loader: "vue-loader",
            include: [resolve(__dirname, "../example")]
        }, {
          test: /\.css$/,
          use: [{
            loader: "style-loader"
          }, {
            loader: "css-loader"
          }]
        }]
    },
    plugins: [
        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: 'example/index.html',
            inject: true
        }),
    ],
    devServer: {
        contentBase: resolve(__dirname, "../example"),
        compress: true,
        port: 8000,
    }
}