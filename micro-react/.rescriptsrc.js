const { name } = require('./package');
const path = require('path');
const resolve = (dir, sourceDir = __dirname) => path.join(sourceDir, dir);


module.exports = {
  webpack: config => {
    config.output.library = `${name}-[name]`;
    config.output.libraryTarget = 'umd';
    config.output.jsonpFunction = `webpackJsonp_${name}`;
    config.output.globalObject = 'window';

    config.resolve.alias = {
      '@': resolve('src'),
    }
    return config;
  },

  devServer: config => {
    config.headers = {
      'Access-Control-Allow-Origin': '*',
    };
    // config.historyApiFallback = true;

    // config.hot = false;
    // config.watchContentBase = false;
    // config.liveReload = false;

    return config;
  }
};
