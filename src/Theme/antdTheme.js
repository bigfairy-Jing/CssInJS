import styled, { css } from 'styled-components';  
import theme from 'styled-theming';
import { Button as AButton } from '../../node_modules/antd'

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

export * from '../../node_modules/antd'

export { Button, buttonTheme }