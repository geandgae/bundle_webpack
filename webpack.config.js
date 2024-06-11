const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { OptimizationStages } = require("webpack");

module.exports = {
  mode: "development",
  entry: {
    // index: "./src/index.js",
    // another: "./src/another-module.js",
    index: {
      import: './src/index.js',
      dependOn: 'shared',
    },
    another: {
      import: './src/another-module.js',
      dependOn: 'shared',
    },
    shared: 'lodash',
  },
  devtool: "inline-source-map",
  devServer: {
    // http://[devServer.host]:[devServer.port]/[output.publicPath]/[output.filename]
    static: "./dist",
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: "development",
    })
  ],
  output: {
    filename: "[name].bundle.js",
    path: path.resolve(__dirname, "dist"),
    clean: true,
    publicPath: "/",
  },
  optimization: {
    runtimeChunk: "single",
    // splitChunks: {
    //   chunks: 'all',
    // },
  },
};
