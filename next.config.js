const withLess = require('@zeit/next-less')
module.exports = withLess({
  cssModules: true,
  env: {
    customKey: 'my-value',
  }
})