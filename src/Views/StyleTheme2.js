import React from 'react'
import { Button } from '../Theme/themes' 
import TestTheme2 from './child/TestTheme2.js'
import { ThemeProvider } from 'styled-components'

// @15 修改默认样式，或者设置一些公共的样式, 默认组件，div，类， 样式主题切换以及选择
// 使用npm run dev:dark 生成黑色按钮

function StyleTheme2() {
  return (<ThemeProvider theme={{ buttonMode: process.env.REACT_APP_THEME }}>
    <Button type="ghost">父按钮</Button>
    <br/>
    <br/>
    <TestTheme2 />
  </ThemeProvider>)
}


export default StyleTheme2