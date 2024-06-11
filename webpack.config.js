const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
  // entry: './src/assets/js/ia.js',
  entry: path.resolve(__dirname, "./src/assets/js/ia.js"),

  // output: {
  //   filename: "./src/assets/js/[name].bundle.js",
  //   path: path.resolve(__dirname, "dist"),
  //   clean: true,
  // },

  output: {
    filename: "assets/js/[name].bundle.js",
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

  performance: {
    // maxAssetSize: 512000, // 500 KiB로 설정
    // maxEntrypointSize: 512000, // 500 KiB로 설정
    hints: false,
  },

  // devServer: {
  //   static: "./src/html/ia",
  //   hot: true,
  //   open: true,
  // },
  devServer: {
    static: path.resolve(__dirname, "dist"),
    open: true,
    // hot: true,
    watchFiles: ["src/**/*"], // 추가: src 폴더 내 모든 파일을 감시
  },

  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, "./src/html/ia/index.html"),
    }),
    new MiniCssExtractPlugin({
      // filename: "./src/assets/styles/style.css",
      filename: "assets/styles/style.css",
    }),
  ],

};
