import styled, { css } from 'styled-components';  
import theme from 'styled-theming';

// 修改默认样式，或者设置一些公共的样式

const buttonTheme = theme('buttonMode', {
  light: css`
    background: #ffffff;
    color: green;
  `,
  dark: css`
    background: #000;
    color: #ffffff;
  `
})

const Button = styled.button`
  ${buttonTheme}
`

export { Button }