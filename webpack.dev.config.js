const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const {
  CleanWebpackPlugin
} = require('clean-webpack-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin')
const app = require('./app')
module.exports = {
  mode: 'development',
  entry: Object.fromEntries(
    Object.entries(app).map(e => [e[0], e[1].js])
  ),
  output: {
    filename: '[name]_[hash].js',
    path: __dirname + '/dist'
  },
  module: {
    rules: [{
      test: /\.scss$/,
      use: ['style-loader', {
        loader: "css-loader",
        options: {
          modules: {
            compileType: 'icss'
          }
        }
      }, 'sass-loader']
    }, {
      test: /\.css$/,
      use: ['style-loader', 'css-loader']
    }, {
      test: /\.(ttf|eof|woff|woff2|svg|png|jpg|gif)/,
      use: ['file-loader']
    }]
  },
  devServer: {
    useLocalIp: true,
    contentBase: './dist',
    host: '0.0.0.0',
    port: 8080
  },
  plugins: [...Object.keys(app).map(key => new HtmlWebpackPlugin({
      filename: `${key}.html`,
      inject: 'body',
      chunks: [key],
      template: app[key].html
    })),
    new CopyWebpackPlugin({
      patterns: [{
        from: path.resolve(__dirname, 'public'),
        to: path.resolve(__dirname, 'dist'),
        noErrorOnMissing: true
      }]
    }),
    new CleanWebpackPlugin(),
  ]
}