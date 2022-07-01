const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin")

module.exports = {
  resolve: {
    extensions: ['.tsx', '.jsx', ".ts", '.js'],
  },
  entry: path.resolve(__dirname, "..", "src/index.tsx"),
  output: {
    path: path.resolve(__dirname, "..", "build"),
    filename: "bundle.js"
  },
  module: {
    rules: [
      {
        test: /.(js|ts)x?$/,
        exclude: /node_modules/,
        use: "babel-loader"
      },
      {
        test: /.(css|scss|sass)$/,
        use: ["style-loader", "css-loader", "sass-loader"]
      },
      {
        test: /\.(?:ico|gif|png|jpg|jpeg)$/i,
        type: 'asset/resource',
      },
      {
        test: /\.(woff(2)?|eot|ttf|otf|svg|)$/,
        type: 'asset/inline',
      },
    ]
  },
  plugins: [new HtmlWebpackPlugin({
    template: path.resolve(__dirname, "..", "src/index.html")
  })],
}