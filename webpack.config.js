module.exports = {
  entry: "./src/scripts/main.js",
  output: {
    path: "./build",
    filename: "bundle.js"
  },
  devServer: {
    contentBase: "./build",
    noInfo: true,
    inline: true
  }
};
