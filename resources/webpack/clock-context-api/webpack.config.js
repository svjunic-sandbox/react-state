/* eslint-disable */

console.log(process.env.NODE_ENV);

const path = require('path');
const webpack = require('webpack');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');

const DOCUMENT_ROOT = '../../../docs/';
const RESOURCES_ROOT = './src/';

module.exports = function () {
  const entries = {
    'js/index': path.join(__dirname, `${RESOURCES_ROOT}index.tsx`),
  };

  const watchOptions = {
    poll: true,
  };

  const output = {
    path: path.join(__dirname, DOCUMENT_ROOT),
    filename: '[name].js',
    chunkFilename: '[name].js',
    jsonpFunction: 'clock',
  };

  let optimization = {
    splitChunks: {
      name: 'js/vendor',
      //chunks: 'initial'
      chunks: 'all',
    },
  };

  if (process.env.NODE_ENV === 'production') {
    optimization = Object.assign(optimization, {
      minimizer: [
        new UglifyJsPlugin({
          uglifyOptions: {
            warnings: false,
            compress: {
              drop_console: true,
            },
          },
        }),
      ],
    });
  }

  const resolve = {
    alias: {
      '~': path.resolve(__dirname, 'src'),
      //"velocity-animate": "velocity-animate/velocity.min.js"
    },

    // 拡張子の省略（Duno次第でだめかも）
    extensions: ['tsx', '.ts', '.js', '.jsx'],

    // モジュール検索
    modules: [path.resolve(__dirname, 'src'), 'node_modules'],
  };

  const baseConfig = {
    target: 'web',

    module: {
      rules: [
        {
          test: /\.tsx?$/,
          exclude: [/node_modules/, /types/],
          use: [
            {
              loader: 'ts-loader',
              //options: {
              //  transpileOnly: true,
              //  configFile: 'tsconfig.json',
              //},
            },
          ],
        },
        {
          test: /\.s[ac]ss$/i,
          use: ['style-loader', 'css-loader', 'sass-loader'],
        },
      ],
    },

    plugins: [new webpack.NoEmitOnErrorsPlugin(), new webpack.optimize.AggressiveMergingPlugin()],
  };

  return [
    Object.assign(
      {
        mode: 'production',
        watchOptions: watchOptions,
        entry: entries,
        resolve: resolve,
        output: output,
        optimization: optimization,
      },
      baseConfig
    ),
  ];
};
