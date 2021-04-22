import styled,  { createGlobalStyle } from 'styled-components'
import "../Styles/StyleComponents5.css"

// @10 Refs

// @11 权重
// 带样式的组件类优先于全局类，因为默认情况下，带样式的组件会在运行时在<head>末尾注入其样式。因此，它的样式胜过其他单个类名选择器。
// 一种解决方案是提高样式表中选择器的特异性：
// 意思就是使用styled-components 的权限要高于className 的权限,所以这里需要使用id 或者更高权重

const MyComponent = styled.div`background-color: green;`;


// @12 注入全局样式, 这里可以用来做一部分的 主题化
const GlobalStyle = createGlobalStyle`
  body {
    color: ${props => (props.whiteColor ? 'white' : 'black')};
  }
`

// @13 插值标记

const something = 'background'

const Button = styled.div`
  // Tell the processor that "something" is a property
  ${/* sc-prop */ something}: papayawhip;
`

function StyleComponents5() {
  return <>
    <GlobalStyle  whiteColor/>
    <MyComponent className="red-bg" >12123</MyComponent>
  </>
}

export default StyleComponents5