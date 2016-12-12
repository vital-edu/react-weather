const dotenv = require('dotenv-webpack');
const webpack = require('webpack');

module.exports = {
  entry: [
    'script!jquery/dist/jquery.min.js',
    'script!foundation-sites/dist/js/foundation.min.js',
    './app/app.jsx'
  ],
  externals: {
    jquery: 'jQuery'
  },
  output: {
    path: __dirname,
    filename: './public/bundle.js',
  },
  resolve: {
    root: __dirname,
    alias: {
      About: 'app/components/About.jsx',
      applicationStyles: 'app/styles/app.css',
      ErrorModal: 'app/components/ErrorModal.jsx',
      Examples: 'app/components/Examples.jsx',
      Main: 'app/components/Main.jsx',
      Nav: 'app/components/Nav.jsx',
      openWeatherMap: 'app/api/openWeatherMap.jsx',
      Weather: 'app/components/Weather.jsx',
      WeatherForm: 'app/components/WeatherForm.jsx',
      WeatherMessage: 'app/components/WeatherMessage.jsx',
    },
    extensions: ['', '.js', '.jsx'],
  },
  module: {
    loaders: [{
      loader: 'babel-loader',
      query: {
        presets: ['react', 'es2015', 'stage-0'],
      },
      test: /\.jsx?$/,
      exclude: /(node_modules|bower_components)/,
    }],
  },
  plugins: [
    new dotenv({
      path: './.env',
      systemvars: true,
    }),
    new webpack.ProvidePlugin({
      '$': 'jquery',
      'jQuery': 'jquery'
    })
  ],
  devtool: 'cheap-module-eval-source-map',
};