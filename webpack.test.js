const { merge } = require('webpack-merge');
const { EnvironmentPlugin } = require('webpack');
const commonConfig = require('./webpack.common');

const prodConfig = {
    mode: 'development',
    watch: true,
    plugins: [
        new EnvironmentPlugin({
            MANAMGER_PSWORD: 'ChampionPDIi1',
            DIVISION_MANAMGER_PSWORD: 'ChampionPDIii10',
            ENV_TYPE: 'testing',
        }),
    ],
};

module.exports = merge(commonConfig, prodConfig);
