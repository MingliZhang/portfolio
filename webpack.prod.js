const { merge } = require('webpack-merge');
const { EnvironmentPlugin } = require('webpack');
const commonConfig = require('./webpack.common');

const prodConfig = {
    mode: 'production',
    plugins: [
        new EnvironmentPlugin({
            MANAMGER_PSWORD: 'ChampionPDIi1',
            DIVISION_MANAMGER_PSWORD: 'ChampionPDIii10',
            ENV_TYPE: 'production',
        }),
    ],
};

module.exports = merge(commonConfig, prodConfig);
