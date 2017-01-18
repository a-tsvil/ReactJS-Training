const path = require('path');

module.exports = {
  entry: './src/index.tsx',
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'index.js',
    publicPath: '/dist/'
  },

  devtool: 'inline-source-map',
  devServer: {
    inline: true,
    historyApiFallback: true
  },
  watch: true,

  resolve: {
    extensions: ['', '.ts', '.tsx', '.js', '.jsx'],
  },

  module: {
    loaders: [{
      test: /\.tsx?$/,
      exclude: [ /node_modules/, /typings/ ],
      loader: 'ts-loader'
    }, {
      test: /\.css$/,
      loader: "style-loader!css-loader"
    }]
  }
};
