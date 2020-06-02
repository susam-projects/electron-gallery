module.exports = [
  // Add support for native node modules
  {
    test: /\.node$/,
    use: 'node-loader',
  },
  {
    test: /\.(m?js|node)$/,
    parser: { amd: false },
    use: {
      loader: '@marshallofsound/webpack-asset-relocator-loader',
      options: {
        outputAssetBase: 'native_modules',
      },
    },
  },
];

module.exports = [
  {
    enforce: 'pre',
    test: /\.jsx?$/,
    use: [
      {
        loader: 'source-map-loader',
      },
    ],
  },
];
