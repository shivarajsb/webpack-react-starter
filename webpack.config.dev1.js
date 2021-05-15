const path = require("path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const TerserPlugin=require('terser-webpack-plugin');
const HTMLWebpackPlugin=require('html-webpack-plugin');
const {CleanWebpackPlugin}=require('clean-webpack-plugin')

module.exports = {
  entry: path.resolve(__dirname, "src", "index.js"),
  output: {
    filename: "[name].[contenthash].js",
    path: path.resolve(__dirname, "build"),
    publicPath: "",
  },
  mode: "none",
  devServer:{
    contentBase:path.resolve(__dirname, 'src'),
    port:3000, 
    writeToDisk:true
  },
  module: {
    rules: [
      {
        test: /\.m?js$/,
        exclude: /(node_modules)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env']
          }
        }
      }
    ]
  },  
  plugins: [
    new MiniCssExtractPlugin({
      filename: "[name].[contenthash].css",
    }),
    new TerserPlugin({
        exclude:/(node_modules)/,
        extractComments:true,
    }),
    new HTMLWebpackPlugin({
        title:'React App',
        filename:path.resolve(__dirname, 'src','index.html'),
        meta:{
            name:'Shivaraj Bakale'
        }
    }), 
    new CleanWebpackPlugin({cleanAfterEveryBuildPatterns:true,cleanStaleWebpackAssets:true})
  ],
  optimization: {
    splitChunks: {
      chunks: "all",
      minSize:3000
    },
  },
};
