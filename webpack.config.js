var path = require('path');


// module.exports = {
//     entry: [
//       'webpack/hot/dev-server',
//       'webpack-dev-server/client?http://localhost:8080',
//       path.resolve(__dirname, 'app/main.js')
//     ],
//     output: {
//         path: path.resolve(__dirname, 'build'),
//         filename: 'bundle.js',
//     },
// };

var config = {
  entry: [
    'webpack/hot/dev-server',
    'webpack-dev-server/client?http://localhost:8080',
    path.resolve(__dirname, 'app/main.js')
  ],
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: 'bundle.js'
  },
  module: {
    loaders: [{
      test: /\.jsx?$/,
      loader: 'babel',
      query:{
        presets:['react','es2015']
      }
    }]
  }
};

module.exports = config;