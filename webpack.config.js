const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin")

module.exports = {
  mode: "development",
  resolve: {
    extensions: ['.tsx', '.jsx', ".ts", '.js'],
  },
  entry: "./src/index.tsx",
  output: {
    path: path.join(__dirname, "build"),
    filename: "bundle.js"
  },
  module: {
    rules: [
      {
        test: /.(js|ts)x?$/,
        exclude: /node_modules/,
        use: "babel-loader"
      }
    ]
  },
  plugins: [new HtmlWebpackPlugin({
    template: path.join(__dirname, "src/index.html")
  })],
}