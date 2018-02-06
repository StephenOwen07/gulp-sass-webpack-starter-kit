var path = require("path");

module.exports = {
  entry: "./src/assets/scripts/app.js",
  output: {
    path: path.resolve(__dirname, "./src/temp/scripts"),
    filename: "app.js"
  },
  module: {
    loaders: [
      {
        loader: "babel-loader",
        query: {
          presets: ["env"]
        },
        test: /\.js$/,
        exclude: /nodue_modules/
      }
    ]
  },
  devtool: "source-map"
};
