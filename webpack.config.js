const path = require('path');

module.exports = {
  entry: './src/index.tsx', // Adjust this to your entry file
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist') // Output directory
  },
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: [
          'style-loader', // Injects styles into DOM
          'css-loader',   // Translates CSS into CommonJS
          'sass-loader'   // Compiles Sass to CSS
        ]
      },
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/
      }
    ]
  },
  resolve: {
    extensions: ['.js', '.ts', '.tsx', '.scss']
  }
};
