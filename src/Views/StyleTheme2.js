import { Button } from '../Theme/themes' 
import TestTheme2 from './child/TestTheme2.js'
import { ThemeProvider } from 'styled-components'

// @15 修改默认样式，或者设置一些公共的样式, 默认组件，div，类， 样式主题切换以及选择
// 使用npm run devDark 生成黑色按钮

function StyleTheme2(params) {
  return <ThemeProvider theme={{ buttonMode: process.env.THEME_ENV }}>
    <Button type="ghost">父按钮</Button>
    <TestTheme2 />
  </ThemeProvider>
}


export default StyleTheme2