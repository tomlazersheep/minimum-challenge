const path = require("path");


module.exports = {
  entry: {
    entry: path.resolve(__dirname + "/entry.js"),
  },
  output: {
    filename: "bundle.js",
  },
  mode: "production",
  resolve: {
    alias: {
      "react/jsx-dev-runtime": "react/jsx-dev-runtime.js",
      "react/jsx-runtime": "react/jsx-runtime.js"
    },
  },
};