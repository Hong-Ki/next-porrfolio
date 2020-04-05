const path = require('path');

module.exports = {
  webpack: config => {
    config.resolve.alias = Object.assign({}, config.resolve.alias, {
      '~': path.join(__dirname, 'src'),
      '~components': path.join(__dirname, 'src', 'components'),
      '~pages': path.join(__dirname, 'src', 'pages'),
      '~constants': path.join(__dirname, 'src', 'constants'),
      '~api': path.join(__dirname, 'src', 'pages', 'api'),
      '~hooks': path.join(__dirname, 'src', 'hooks'),
    });
    return config;
  },
};
