module.exports = {
  devtool: "eval-nosources-source-map",
  mode: "production",
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
