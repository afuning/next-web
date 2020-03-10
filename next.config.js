const path = require('path')
const withLess = require('@zeit/next-less')
const withPlugins = require('next-compose-plugins')
const md5= require('md5')
module.exports = withPlugins([withLess], {
  lessLoaderOptions : {
    javascriptEnabled : true //如果是antd就需要，antd-mobile不需要
  },
  cssModules: true,
  cssLoaderOptions: {
    importLoaders: 1,
    localIdentName: "[local]___[hash:base64:5]",
    getLocalIdent: (context, localIdentName, localName, options) => {
      let hz = context.resourcePath.replace(context.rootContext, "");
      if (/node_modules/.test(hz)) {
        return localName
      } else {
        const _name = path.parse(context._module.resource).name
        const hash = md5(_name).substring(0, 5)
        return `${localName}__${hash}`
      }
    }
  },
  env: {
    customKey: 'my-value',
  },
  webpack(config){
    if(config.externals){
      const includes = [/antd/];
      config.externals = config.externals.map(external => {
        if (typeof external !== 'function') return external;
        return (ctx, req, cb) => {
          return includes.find(include =>
            req.startsWith('.')
              ? include.test(path.resolve(ctx, req))
              : include.test(req)
          )
            ? cb()
            : external(ctx, req, cb);
        };
      });
    }
    return config;
  }
})