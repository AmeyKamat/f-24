const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: './src/index.js',
    output: {
        path: __dirname + '/dist',
        publicPath: '/',
        filename: 'bundle.js'
    },
    devServer: {
        contentBase: './dist',
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: ['babel-loader']
            },
            {
                test: /\.(less|css)$/,
                use: [
                    'style-loader',
                    'css-loader',
                    'less-loader',
                ]
            },
            {
                test: /\.(png|svg|jpg|gif)$/,
                use: [
                    'file-loader',
                ],
           }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: path.resolve('./index.html'),
        }),
    ]
};
