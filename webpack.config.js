const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { OptimizationStages } = require("webpack");

module.exports = {
  mode: "development",
  entry: {
    index: "./src/index.js",
    print: "./src/print.js",
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
  },
};
