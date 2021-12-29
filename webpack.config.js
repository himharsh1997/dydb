// Version if the local Node.js version supports async/await
// webpack.config.js
const path = require('path');

const webpack = require('webpack')
const slsw = require('serverless-webpack');
const TsconfigPathsPlugin = require('tsconfig-paths-webpack-plugin');

module.exports = (async () => {

  return {
    context: __dirname,
    mode: slsw.lib.webpack.isLocal ? 'development' : 'production',
    entry: slsw.lib.entries,
    plugins: [],
    resolve: {
      extensions: ['.mjs', '.json', '.ts'],
      symlinks: false,
      cacheWithContext: false,
      plugins: [new TsconfigPathsPlugin()]
    },
    module: {
      rules: [
        // all files with a `.ts` or `.tsx` extension will be handled by `ts-loader`
        {
          test: /\.(tsx?)$/,
          loader: 'ts-loader',
          exclude: [
            [
              path.resolve(__dirname, 'node_modules'),
              path.resolve(__dirname, '.serverless'),
              path.resolve(__dirname, '.webpack')
            ]
          ],
          options: {
            transpileOnly: true,
            experimentalWatchApi: true
          }
        }
      ]
      }
  };
})();