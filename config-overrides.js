/* eslint-disable  react-hooks/rules-of-hooks */
const { useBabelRc, override, addWebpackModuleRule, addWebpackAlias, babelInclude } = require('customize-cra')

const path = require('path')

module.exports = override(
  useBabelRc(),
  babelInclude([
		path.resolve("src"), // 确保要包含自己的项目
		path.resolve("node_modules/@aichisuan") //引入报错的项目
	]),
  addWebpackModuleRule({
    test: /\.(js|tsx)$/,
    exclude: /node_modules/,
    use: [
      { loader: 'babel-loader' },
      {
        loader: '@linaria/webpack-loader',
        options: {
          cacheDirectory: 'src/.linaria_cache',
          sourceMap: process.env.NODE_ENV !== 'production',
        },
      },
    ],
  }),
  addWebpackAlias({
    ['antd']: path.resolve(__dirname, './src/Theme/antdTheme.js')
  })
)
