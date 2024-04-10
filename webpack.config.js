const path = require('path');

module.exports = {
  entry: './index.html', // Entry point for the application
  output: {
    filename: 'bundle.js', // Output filename for the bundled JavaScript
    path: path.resolve(__dirname, 'dist'), // Output directory for the bundled files
  },
  module: {
    rules: [
      {
        test: /\.html$/, // Rule for handling HTML files
        use: ['html-loader'], // Use html-loader to process HTML files
      },
      {
        test: /\.css$/, // Rule for handling CSS files
        use: ['style-loader', 'css-loader'], // Use style-loader and css-loader for CSS
      },
      {
        test: /\.js$/, // Rule for handling JavaScript files
        exclude: /node_modules/, // Exclude node_modules folder
        use: ['babel-loader'], // Use babel-loader for transpiling modern JavaScript (optional)
      },
    ],
  },
};
