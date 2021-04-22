### CSS IN JS 

1. styled-components
2. radium

### styled-components
* styled-components会生成带有类的实际样式表，并通过className属性将这些类附加到样式化组件的DOM节点上。在运行时，它将生成的样式表注入文档标题的末尾。
* 服务端渲染需要使用babel插件 有关查看 [https://styled-components.com/docs/tooling#babel-plugin]


### jest 可以试试的


### 适合的情况




### 不适合的情况
1. 考虑到首屏的渲染速度, styled-components框架大小为12.8k


### 参考文章
1. [Styled Components: To Use or Not to Use?](https://medium.com/building-crowdriff/styled-components-to-use-or-not-to-use-a6bb4a7ffc21)
2. [The magic behind 💅 styled-components](https://mxstbr.blog/2016/11/styled-components-magic-explained/)

### 主题化思路


### desc
> 你当前代码加载之前，已经使用过styled-components，但是没有引用antd，导致styled-components的动态样式<script>已经插入到<head>中，而antd的样式还没有加载，这样导致你在后面使用styled包裹antd样式时，antd的样式才会插入<head>，但是你的styled-component包裹的样式只会插入到之前定义好的<script>，优先级就会比antd的样式低。
     这是webpack的开发环境对css的处理顺序导致的，但是在生产环境不会有，因为antd样式加载会变成静态已经打包好的css文件，而styled-components仍然是动态的。

#### 一. 使用styled-components
0. 如果需要覆盖框架的样式需要多加一层
1. 利用css  +  createGlobalStyle
2. 利用withTheme + ThemeProvider 作为当前主题,道具,传递给组件
3. 利用babel-plugin-styled-components
4. styled-theming

#### 二. 使用radium


#### linaria
1. 用JS编写CSS，但是运行时为零，因此在构建过程中会将CSS提取到CSS文件中
2. 类 Sass 的 CSS 的语法
3. Linaria目前支持webpack和Rollup在构建时提取CSS。要配置捆绑器
4. Tree shaking 不在需要引入额外的babel插件,而是自动通过Tree shaking 来做样式的按需引入
5. 自动添加浏览器前缀
6. 没有额外的解析成本,linaria特殊在于是0运行时,样式会在编译期就抽取出来,生成CSS文件,不需要再运行时额外解析一次


##### 一. tips(webapck)
1. npm install @linaria/core @linaria/react @linaria/babel-preset @linaria/shaker
2. 配置babellrc文件
3. 配置loader
```
{
  test: /\.(js|ts|tsx)$/,
  use: [
    { loader: 'babel-loader' },
    {
      loader: 'linaria/loader',
      options: {
        sourceMap: process.env.NODE_ENV !== 'production',
      },
    }
  ],
}
```
4. 将收集到的样式抽取出来，你需要另外一个 Webpack 插件 mini-css-extract-plugin 
```
npm i -D css-loader mini-css-extract-plugin 
```
```
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
{
  test: /\.css$/,
  use: [
    {
      loader: MiniCssExtractPlugin.loader,
      options: {
        hmr: process.env.NODE_ENV !== 'production',
      },
    },
    {
      loader: 'css-loader',
      options: {
        sourceMap: process.env.NODE_ENV !== 'production',
      },
    },
  ],
}
```

### 关于taro
> http://taro-docs.jd.com/taro/docs/css-in-js/