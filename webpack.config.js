const CleanWebpackPlugin = require('clean-webpack-plugin');

module.exports = {
  entry: './src/app/app.ts',
  plugins: [
    new CleanWebpackPlugin(['public/build'])
  ],
  output: {
    path: __dirname + '/public',
    filename: 'build/[name].js'
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js']
  },
  module: {
    rules: [
      { test: /\.tsx?$/, loader: 'ts-loader' }
    ]
  },
  optimization: {
      minimize: false
  }
}