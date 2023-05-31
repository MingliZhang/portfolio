const { merge } = require('webpack-merge');
const { EnvironmentPlugin } = require('webpack');
const commonConfig = require('./webpack.common');

const devConfig = {
    mode: 'development',
    watch: true,
    plugins: [
        new EnvironmentPlugin({
            MANAMGER_PSWORD: 'devTestPassword',
            DVM_PSWORD: 'DivisionDevTestPassword',
            ENV_TYPE: 'development',
            FROZE_TIME: 1681172432796,
        }),
    ],
};

module.exports = merge(commonConfig, devConfig);
