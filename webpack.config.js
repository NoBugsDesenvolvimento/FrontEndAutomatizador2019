const htmlWebpackPlugin = require("html-webpack-plugin")
const path = require("path");

module.exports = {
    entry: './src/index.js',
    output: {
        path: path.resolve('dist'),
        filename: 'main.js'
    },
    module: {
        rules: [{
            test: /\.(js|jsx)$/,
            exclude: /node_modules/,
            use: {
                loader: "babel-loader"
            }
        }, {
            test: /.css$/,
            use: ["style-loader","css-loader",]
        }, {
            test: /\.(ico|gif|png|jpe?g|svg)$/,
            use: "file-loader"
        }, {
            test: /\.(ttf|eot|woff2?|svg)$/,
            use: 'url-loader'
        }]
    },
    plugins: [
        new htmlWebpackPlugin({
            template: path.join(__dirname, "public/index.html")
        })
    ]
}