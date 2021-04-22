import { useState } from 'react'


import styled, { createGlobalStyle } from 'styled-components'

// @8 利用& 符号有时候会比CSS更加强大, 如果没有写& 然后之后写属性 代表将引用该组件的子代.这里未做解析

const Thing = styled.div.attrs((/* props */) => ({ tabIndex: 0 }))`
  color: blue;

  &:hover {
    color: red; // <Thing> when hovered
  }

  & ~ & {
    background: tomato; // <Thing> as a sibling of <Thing>, but maybe not directly next to it
  }

  & + & {
    background: red; // <Thing> next to <Thing>
  }

  &.something {
    background: orange; // <Thing> tagged with an additional CSS class ".something"
  }

  .something-else & {
    border: 1px solid; // <Thing> inside another element labeled ".something-else"
  }
`;

//  @9  && 符号可以增加组件上规则的特殊性, 等于渲染两个类增加权重???
const Thing2 = styled.div`
  && {
    color: blue;
  }
`

const GlobalStyle = createGlobalStyle`
  div${Thing2} {
    color: red;
  }
  ::-webkit-scrollbar{
    height: 9px !important;
    width: 9px !important;
  }

  ::-webkit-scrollbar-thumb {
      border-radius: 0;
      border-style: dashed;
      background-color: rgba(157, 165, 183, 0.4);
      border-color: transparent;
      border-width: 1.5px;
      background-clip: padding-box;
  }

  ::-webkit-scrollbar-thumb:hover {
      background: rgba(157, 165, 183, 0.7)
  }
`

// @10 避免传入的参数过于复杂,或者单一化,提供了一个attrs参数
const AttInput = styled.input.attrs(props => ({
  type: "text",
  size: props.size || "1em"
}))`
  color: palegoldenrod;
  font-size: 1em;
  border: 2px solid palevioletred;
  border-radius: 3px;
  // 可以使用传入的参数进行一定的计算
  margin: ${props => props.size};
  padding: ${props => props.size};

`

// @11 允许attrs 里面的样式重写
const PasswordInput = styled(AttInput).attrs({
  type: "password",
})`
  border: 2px solid aqua;
`;




function StyleComponents2() {
  return (
    <>
      <Thing>Hello world!</Thing>
      <Thing>How ya doing?</Thing>
      <Thing className="something">The sun is shining...</Thing>
      <div>Pretty nice day today.</div>
      <Thing>Don't you think?</Thing>
      <div className="something-else">
        <Thing>Splendid.</Thing>
      </div>
      <GlobalStyle />
      <Thing2>
        I'm blue, da ba dee da ba daa
      </Thing2>
      <AttInput placeholder="A small text input" />
      <br />
      <AttInput placeholder="A bigger text input" size="2em" />
      <PasswordInput />
    </>
  )
}

export default StyleComponents2