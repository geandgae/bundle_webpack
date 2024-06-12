const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
  mode: "development",
  entry: {
    ia: './src/assets/js/ia.js',
    // ui: './src/assets/js/ui.js',
  },
  // devtool: 'inline-source-map',
  devServer: {
    static: path.resolve(__dirname, "dist"),
    open: true,
    // hot: true,
    // watchFiles: ["src/**/*"], // 추가: src 폴더 내 모든 파일을 감시
  },
  resolve: {
    alias: {
      "@scss": path.resolve(__dirname, "./src/assets/styles/scss"),
      "@css": path.resolve(__dirname, "./src/assets/styles/css")
    }
  },
  output: {
    filename: "./src/assets/js/[name].bundle.js",
    path: path.resolve(__dirname, "dist"),
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
      // {
      //   test: /\.css$/i, 
      //   exclude: /node_modules/,
      //   include: path.resolve(__dirname, "./src/assets/styles/css"),
      //   use: [MiniCssExtractPlugin.loader, "css-loader"],
      // },
      // {
      //   test: /\.(woff|woff2|eot|ttf|otf)$/i,
      //   type: "asset/resource",
      //   exclude: /node_modules/,
      //   include: path.resolve(__dirname, "./src/assets/styles/fonts"),
      //   generator: {
      //     filename: "./src/assets/styles/fonts/[name][ext]"
      //   }
      // },
      // {
      //   test: /\.(png|svg|jpg|jpeg|gif)$/i,
      //   type: "asset/resource",
      //   exclude: /node_modules/,
      //   include: path.resolve(__dirname, "./src/assets/images"),
      //   generator: {
      //     filename: "./src/assets/images/[name][ext]"
      //   }
      // },
      // {
      //   test: /\.js$/,
      //   exclude: /node_modules/,
      // },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./src/html/ia/index.html",
      // filename: "./src/html/ia/index.html",
      minify: false,
      // hash: true,
      // showErrors: true,
      
    }),
    new MiniCssExtractPlugin({
      // filename: "./src/assets/styles/style.css",
      filename: "./src/assets/styles/style.css",
    }),
  ],
  optimization: {
    runtimeChunk: 'single',
  },
};
