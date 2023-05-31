const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const pages = ['index', '404', '2048/index'];
// const pages = ['index', '404'];

const config = {
    devtool: 'eval-source-map',
    entry: pages.reduce((config, page) => {
        config[page] = `./src/${page}.js`;
        return config;
    }, {}),
    output: {
        filename: '[name].js',
        path: path.resolve(__dirname, 'public'),
        clean: true,
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader'],
            },
        ],
    },
    optimization: {
        splitChunks: {
            chunks: 'all',
        },
    },
    plugins: pages.map(
        (page) =>
            new HtmlWebpackPlugin({
                inject: true,
                template: `./src/${page}.html`,
                filename: `${page}.html`,
                chunks: [page],
            })
    ),
};

module.exports = config;
