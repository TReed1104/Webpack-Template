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
    mode: 'development',
    entry: './src/index.js',
    output: {
        filename: 'app.bundle.js',
    },
    devServer: {
        hot: true,
        watchOptions: {
            poll: true
        }
    },
    resolve: {
        extensions: ['.vue', '.ts', '.tsx', '.js', '.jsx'],
    },
    module: {
        rules: [
            {
                test: /\.vue$/,
                use: 'vue-loader'
            },
            {
                test: /\.(ts|tsx)?$/,
                loader: 'ts-loader',
                exclude: /node_modules/,
                options: {
                    appendTsSuffixTo: [/\.vue$/],
                }
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