import styled, { css } from 'styled-components';  
import theme from 'styled-theming';
import { Button as AButton } from '../../node_modules/antd'
import React from 'react'

// 修改框架的样式, 这里以修改 antd 框架样式为例子

const buttonTheme = theme('buttonMode', {
  light: css`
    background: #ffffff;
    color: #000;
  `,
  dark: css`
    background: #000;
    color: #ffffff;
  `
})

const Button = styled((props)=><AButton {...props}/>)`
  ${buttonTheme}
`

// 导出所有antd组件
export * from '../../node_modules/antd'

// 导出特定的修改组件
export { Button, buttonTheme }