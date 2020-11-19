'use strict'
const webpack = require('webpack')
const { VueLoaderPlugin } = require('vue-loader')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin')
const path = require('path')

function resolve(dir) {
    return path.join(__dirname, '..', dir)
}

module.exports = {
    mode: 'production',
    entry: './src/app.js',
    output: {
        filename: 'app.bundle.js',
    },
    resolve: {
        extensions: ['.vue', '.js', '.jsx'],
    },
    module: {
        rules: [
            {
                test: /\.vue$/,
                use: 'vue-loader'
            },
            {
                test: /\.(css|scss|sass)$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    'css-loader',
                    'sass-loader'
                ]
            },
            {
                test: /\.(js|jsx)$/,
                exclude: /(node_modules)/,
                use: {
                    loader: "babel-loader"
                }
            },
        ]
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new VueLoaderPlugin(),
        new HtmlWebpackPlugin({
            template: 'src/pages/index.html',
            filename: './index.html',
            inject: true
        }),
        new CopyWebpackPlugin(
            {
                patterns: [
                    {
                        from: resolve('content'),
                        to: resolve('dist/content'),
                        toType: 'dir',
                        noErrorOnMissing: true
                    }
                ]
            }
        ),
        new MiniCssExtractPlugin({
            filename: 'main.css'
        })
    ]
}