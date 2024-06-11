const path = require("path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
  entry: "./src/assets/styles/scss/default.scss",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "./src/assets/js/bundle.js",
    clean: true,
  },
  module: {
    rules: [
      {
        test: /\.scss$/i, //정규표현식 i는 대소문자 구분하지 않음
        exclude: /node_modules/,
        include: path.resolve(__dirname, "./src/assets/styles/scss"),
        use: [MiniCssExtractPlugin.loader, "css-loader", "sass-loader"],
      },
      {
        test: /\.css$/i, 
        exclude: /node_modules/,
        include: path.resolve(__dirname, "./src/assets/styles/css"),
        use: [MiniCssExtractPlugin.loader, "css-loader"],
      },
    ],
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: "./src/assets/styles/style.css",
    }),
  ],
};
