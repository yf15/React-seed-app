const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
   entry: './src/index.js',
   output: {
      filename: 'main.js',
      path: path.resolve(__dirname, 'dist'),
   },
   devServer: {
      contentBase: path.join(__dirname, 'dist'),
      compress: true,
      port: 9000,
      open: true
   },
   module: {
      rules: [
         {
            test: /\.jsx?$/,
            exclude: /node_modules/,
            loader: 'babel-loader',
            query: {
               presets: ["@babel/preset-env", "@babel/preset-react"],
            }
         }
      ]
   },
   plugins: [
      new HtmlWebpackPlugin({
         template: './dist/index.html'
      })
   ]

};