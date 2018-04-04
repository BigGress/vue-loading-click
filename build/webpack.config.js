const resolve = require("path").resolve;
const CopyWebpackPlugin = require("copy-webpack-plugin")

module.exports = {
  entry: {
    index: resolve(__dirname, "../src/index.js"),
    // style: resolve(__dirname, "../src/base.css"),
  },
  mode: process.env.NODE_ENV || "development",
  output: {
    libraryTarget: "commonjs2",
    path: resolve(__dirname, "../dist"),
    filename: "[name].js",
    // publicPath: p
  },
  resolve: {
    extensions: [".js", ".json", ".vue", ".css"],
  },
  module: {
    rules: [{
      test: /\.js$/,
      loader: "babel-loader",
      include: [resolve(__dirname, "../src")]
    },
  ]
  },
  plugins: [
    new CopyWebpackPlugin([{
      // from: "./package.json",
      from: resolve(__dirname, "../package.json"),
      to: resolve(__dirname, "../dist")
    }, {
      from: resolve(__dirname, "../src/base.css"),
      to: resolve(__dirname, "../dist")
    }, {
      from: resolve(__dirname, "../README.md"),
      to: resolve(__dirname, "../dist")
    }])
  ]
}