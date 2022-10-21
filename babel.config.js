module.exports = {
  presets: [
    [
      "@babel/preset-env",
      {
        modules: false,
        corejs: 2,
        useBuiltIns: "usage",
      },
    ],
  ],
  plugins: ["@babel/plugin-transform-runtime"],
};
