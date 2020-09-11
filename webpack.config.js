const webpack = require('webpack');
const dotenv = require('dotenv');
const path = require('path');
const HtmlWebpackPlugin =  require('html-webpack-plugin');

module.exports = () => {
  /*const env = dotenv.config().parsed;
    const envKeys = Object.keys(env).reduce((prev, next) => {
        prev[`process.env.${next}`] = JSON.stringify(env[next]);
        return prev;
    }, {});*/
  return {
    entry: './src/index.js',
    mode: 'development',
    module: {
      rules: [
        {
          exclude: /node_modules/,
          loader: 'babel-loader',
          test: /\.(js)x?$/,
        },
        {
          test: /\.css$/,
          use: ['style-loader', 'css-loader'],
        },
      ],
    },
    output: {
      filename: 'main.js',
      path: path.resolve(__dirname, 'dist'),
    },
    plugins: [
      new HtmlWebpackPlugin({
        template: 'src/index.html',
      }),
      /*new webpack.DefinePlugin(envKeys),*/
    ],
    resolve: {
      extensions: ['.css', '.webpack.js', '.web.js', '.js'],
    },
  };
};
