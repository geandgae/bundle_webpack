const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = (env) => {
  console.log(env);

  return {
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
      }),
    ],
    output: {
      filename: "[name].[contenthash].js",
      path: path.resolve(__dirname, "dist"),
      clean: true,
      publicPath: "/",
      pathinfo: false, // 경로 정보 생성 끄기(기능향상)
    },
    module: {
      rules: [
        {
          test: /\.css$/i, //정규표현식 i는 대소문자 구분하지 않음
          use: ["style-loader", "css-loader"],
        },
        {
          test: /\.(png|svg|jpg|jpeg|gif)$/i,
          type: "asset/resource",
        },
        {
          test: /\.(woff|woff2|eot|ttf|otf)$/i,
          type: "asset/resource",
        },
        {
          test: /\.(js)$/i,
          include: path.resolve(__dirname, "src"),
          loader: "babel-loader",
        },
        {
          test: /\.tsx?$/,
          use: [
            {
              loader: 'ts-loader',
              options: {
                transpileOnly: true,
              },
            },
          ],
        },
      ],
    },
    optimization: {
      runtimeChunk: "single",
    },
  };
};
