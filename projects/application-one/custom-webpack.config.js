// const appName = require('../../package.json').name;
const appName = 'app1';
module.exports = {
    devServer: {
        headers: {
            'Access-Control-Allow-Origin': '*',
        },
    },
    output: {
        library: `${appName}-[name]`,
        libraryTarget: 'umd',
        jsonpFunction: `webpackJsonp_${appName}`,
    },
};