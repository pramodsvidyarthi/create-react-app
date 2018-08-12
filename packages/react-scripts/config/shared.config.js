'use strict';

const autoprefixer = require('autoprefixer');

const getStyleLoaderConfig = () => require.resolve('style-loader');

const getPostCssLoaderConfig = () => ({
  loader: require.resolve('postcss-loader'),
  options: {
    // Necessary for external CSS imports to work
    // https://github.com/facebookincubator/create-react-app/issues/2677
    ident: 'postcss',
    plugins: () => [
      require('postcss-flexbugs-fixes'),
      autoprefixer({
        browsers: [
          '>1%',
          'last 4 versions',
          'Firefox ESR',
          'not ie < 9', // React doesn't support IE8 anyway
        ],
        flexbox: 'no-2009',
      }),
    ],
  },
});

const getCssLoaderConfig = (opts = {}) => ({
  loader: require.resolve('css-loader'),
  options: Object.assign(
    {
      importLoaders: 1,
    },
    opts
  ),
});

module.exports = {
  getStyleLoaderConfig,
  getPostCssLoaderConfig,
  getCssLoaderConfig,
};
