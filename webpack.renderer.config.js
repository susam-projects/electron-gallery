const rules = require('./webpack.rules');

rules.push(
  {
    test: /\.(s?)css/,
    exclude: /(\.?)module\.(s?)css/,
    use: [
      {
        loader: 'style-loader',
      },
      {
        loader: 'css-loader',
        options: {
          importLoaders: 2,
          sourceMap: true,
          modules: false,
        },
      },
    ],
  },
  {
    test: /\.module.(s?)css$/,
    use: [
      {
        loader: 'style-loader',
      },
      {
        loader: 'css-loader',
        options: {
          localsConvention: 'camelCase',
          sourceMap: true,
          importLoaders: 1,
          modules: {
            localIdentName: '[local]--[hash:base64:8]',
          },
        },
      },
      {
        loader: 'sass-loader',
        options: {
          sourceMap: true,
        },
      },
    ],
  },
  {
    test: /\.(ttf|woff|woff2|svg|eot)$/,
    use: [
      {
        loader: 'file-loader',
      },
    ],
  },
  {
    test: /\.(png|jpg|jpeg)$/,
    use: 'file-loader',
  },
);

module.exports = {
  // Put your normal webpack config below here
  module: {
    rules,
  },
  resolve: {
    extensions: ['.js', '.jsx', '.css', '.scss'],
  },
  output: {
    publicPath: '../',
  },
};
