const path = require('path');

module.exports = {
  entry: './src/index.jsx',
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'app.js',
    publicPath: '/dist/'
  },

  devtool: 'inline-source-map',
  devServer: {
    inline: true,
    historyApiFallback: true
  },
  // watch: true,

  resolve: {
    extensions: ['', '.js', '.jsx'],
  },
  externals: {
    // Use external version of React
    "react": "React",
    "react-dom": "ReactDOM",
    "react-router": "ReactRouter"
  },
  module: {
    loaders: [{
      test: /.jsx?$/,
      loader: 'babel-loader',
      exclude: /node_modules/,
      query: {
        presets: ['es2015', 'react']
      }
    }, {
      test: /\.css$/,
      loader: "style-loader!css-loader"
    }]
  }
};
