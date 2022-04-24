const HtmlWebPackPlugin = require("html-webpack-plugin");
const path = require('path');

module.exports = {
entry: "./src/App.tsx",
output: {
  path: path.resolve(__dirname, 'dist'),
  filename: 'bundle.js',
},
plugins: [new HtmlWebPackPlugin({ template: "./src/index.html" })]
};