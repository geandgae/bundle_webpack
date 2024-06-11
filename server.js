const express = require("express");
const webpack = require("webpack");
const webpackDevMid = require("webpack-dev-middleware");

const app = express();
const config = require("./webpack.config.js");
const compiler = webpack(config);

// express에서 webpack-dev-middleware와 webpack.config.js를 사용하도록 설정하세요.
app.use(
  webpackDevMid(compiler, {
    publicPath: config.output.publicPath,
  })
);

app.listen(3000, function () {
  console.log("ex app port 3000 webpack-dev-middleware!!")
});
