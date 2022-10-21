module.exports = {
  devtool: "eval-nosources-source-map",
  mode: "none",
  module: {
    rules: [
      {
        test: /.js$/,
        exclude: /node_modules/,
        use: "babel-loader",
      },
    ],
  },
};
