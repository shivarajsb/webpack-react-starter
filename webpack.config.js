const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { HotModuleReplacementPlugin } = require("webpack");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");

const port = 3000;
module.exports = {
  mode: "development",
  entry: {
    vendor:['lodash'],
    app:path.resolve(__dirname, "src", "index.js")
  },
  output: {
    filename: "[name].[hash].js",
    path:path.resolve(__dirname,'build'),
    publicPath:'/'
  },
  module: {
    rules: [
      {
        test: /\.(js)$/,
        exclude: /node_modules/,
        use: ["babel-loader"],
      },
      {
        test: /\.css$/,
        use: [
          {
            loader: "style-loader",
          },
          {
            loader: "css-loader",
            options: {
              modules: true,
              sourceMap: true,
            },
          },
        ],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname,'src', 'index.html'),
    }),
    new HotModuleReplacementPlugin(),
    new CleanWebpackPlugin(),
  ],
  devServer:{
      host:'localhost',
      port,
      historyApiFallback:true,
      open:true,
      hot:true,
  },
  devtool: 'inline-source-map',
};
