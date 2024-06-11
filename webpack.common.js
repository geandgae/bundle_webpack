const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CopyPlugin = require('copy-webpack-plugin');

module.exports = {
  entry: {
    ui: "./src/assets/js/ui.js",
    ia: "./src/assets/js/ia.js",
  },

  output: {
    filename: "./src/assets/js/[name].bundle.js",
    path: path.resolve(__dirname, "dist"),
    clean: true,
  },

  resolve: {
    alias: {
      "@scss": path.resolve(__dirname, "./src/assets/styles/scss"),
      "@css": path.resolve(__dirname, "./src/assets/styles/css")
    }
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
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/i,
        type: "asset/resource",
        exclude: /node_modules/,
        include: path.resolve(__dirname, "./src/assets/styles/fonts"),
        generator: {
          filename: "./src/assets/styles/fonts/[name][ext]"
        }
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: "asset/resource",
        exclude: /node_modules/,
        include: path.resolve(__dirname, "./src/assets/images"),
        generator: {
          filename: "./src/assets/images/[name][ext]"
        }
      },
      // {
      //   test: /\.js$/,
      //   exclude: /node_modules/,
      // },
    ],
  },

  performance: {
    // maxAssetSize: 512000, // 500 KiB로 설정
    // maxEntrypointSize: 512000, // 500 KiB로 설정
    hints: false,
  },

  plugins: [
    new HtmlWebpackPlugin({
      template: "./src/html/ia/index.html",
      filename: "./src/html/ia/index.html",
      minify: false,
      hash: true,
      showErrors: true,
      chunks: ["ia"]
    }),
    new HtmlWebpackPlugin({
      template: "./src/html/pages/index.html",
      filename: "./src/html/pages/index.html",
      minify: false,
      hash: true,
      showErrors: true,
      chunks: ["ui"]
    }),
    new MiniCssExtractPlugin({
      filename: "./src/assets/styles/[name].bundle.css",
    }),
    new CopyPlugin({
      patterns: [
        { from: "./src/assets/images", to: "./src/assets/images" }
      ]
    })
  ],

};
