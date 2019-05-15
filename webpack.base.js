let path = require("path");
let webpack = require("webpack");
let HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
    mode: "development",
    entry: path.resolve(__dirname, "./index.js"),
    output: {
        filename: '[name].js',
        path: path.resolve(__dirname,"build")
    },
    devServer:{
        port: 3000,
        open: true,
    },
    module: {
        rules: [{
            test: /\.js$/,
            use: {
                loader: 'babel-loader',
                options: {
                    presets: [
                        '@babel/preset-env',
                        '@babel/preset-react',
                    ],
                    plugins:[
                        '@babel/plugin-proposal-class-properties'
                    ]
                },
            },
            exclude: [
                path.join(__dirname,'../node_modules')
            ]
        },{
            test: /\.css$/,
            use: ['style-loader','css-loader'],
        },{
            test: /\.(eot|woff|woff2|ttf|svg)$/,
            use: [
              {
                loader: 'url-loader',
                options: {}
              }
            ]
        }]
    },
    plugins: [
        new webpack.DefinePlugin({
            PRODUCTION:JSON.stringify(false),
            SERVICE_URL: JSON.stringify("http://dev.example.com")
        }),
        new HtmlWebpackPlugin({
            template: './index.html',
            filename: "index.html"
        })
    ]
}